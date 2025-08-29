import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import "./PhotoWall.css";
import axios from "axios";
import PhotoWallSkeleton from "./PhotoWallSkeleton";
gsap.registerPlugin(Draggable);

export default function PhotoWall() {
  const wallRef = useRef(null);
  const rotationRef = useRef(0); // stores last known rotation (degrees)
  const autoRotationRef = useRef(null);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const draggableRef = useRef(null);


  const startXRef = useRef(0);
  const dragStartRotationRef = useRef(0);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);
    const [loading, setLoading] = useState(true); 
  
// const [imagesLoaded, setImagesLoaded] = useState(0);
  const BaseUrl = process.env.REACT_APP_BASE_URL;

  // const FetchAlbumById = async () => {
  //   const response = await axios.get(
  //     `${BaseUrl}/api/album/get/6733c1b1df07ccf2838503d7`
  //   );
  //   console.log("The response from backend:", response.data.data.photos);

  //   setImageList(response.data?.data.photos);
  // };


const FetchAlbumById = async () => {
  try {
    const response = await axios.get(
      `${BaseUrl}/api/album/get/6733c1b1df07ccf2838503d7`
    );
    const photos = response.data?.data.photos || [];
    console.log("bharti" , photos)
    setImageList(photos)
      
  } catch (error) {
    console.error("Error fetching album:", error);
  }
};


useEffect(() => {
  if (imageList.length > 0) {
    let loaded = 0;
    imageList.forEach((img) => {
      const image = new Image();
      image.src = img.url;
      image.onload = () => {
        loaded++;
        if (loaded === imageList.length) {
          setLoading(false); // ✅ only after ALL done
        }
      };
      image.onerror = () => {
        loaded++;
        if (loaded === imageList.length) {
          setLoading(false);
        }
      };
    });
  }
}, [imageList]);

  useEffect(() => {
    FetchAlbumById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 


  // layout
  const rows =4;
  const cols = 18;
  const radius = 500;

  const columnGapDeg = 360 / cols;
  const rowGapPx = 120;
  const minAngleJitter = 1;
  const minYPxJitter = 15;
  const minHeight = 80;
  const maxHeight = 110;

  const grid = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let baseAngle = columnGapDeg * c;
      let angle = baseAngle + (Math.random() - 0.5) * minAngleJitter;
      let yPos =
        (r - rows / 2) * rowGapPx + (Math.random() - 0.5) * minYPxJitter;
      let height = minHeight + Math.random() * (maxHeight - minHeight);

      // const imgSrc = imageList[(r * cols + c) % imageList.length];
      const imgSrc = imageList[(r * cols + c) % imageList.length]?.url;

      grid.push({ src: imgSrc, angle, yPos, height });
    }
  }

  useEffect(() => {
    const wall = wallRef.current;
    if (!wall) return;

    const createAutoRotate = () => {
      if (autoRotationRef.current) {
        autoRotationRef.current.kill();
        autoRotationRef.current = null;
      }
      autoRotationRef.current = gsap.to(wall, {
        rotationY: "+=360",
        duration: 120,
        repeat: -1,
        ease: "none",
      });
    };

    const stopAutoRotate = () => {
      if (autoRotationRef.current) {
        autoRotationRef.current.kill();
        autoRotationRef.current = null;
      }
    };

    createAutoRotate();

    const created = Draggable.create(thumbRef.current, {
      type: "x",
      bounds: trackRef.current,
      inertia: true,
      onPress: () => {
        stopAutoRotate();
      },
      onDrag: function () {
        const trackWidth =
          trackRef.current.offsetWidth - this.target.offsetWidth;
        const progress = this.x / trackWidth;
        const rotation = progress * 360;
        gsap.set(wall, { rotationY: rotation });
        rotationRef.current = rotation;
      },
      onRelease: () => {
        if (!selectedImage) createAutoRotate();
      },
    });
    draggableRef.current = created && created[0];

    const DEGREES_PER_PIXEL = 0.4;

    const onPointerDown = (e) => {
      if (selectedImage) return;
      e.preventDefault && e.preventDefault();

      stopAutoRotate();

      startXRef.current = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;

      const currentRotation =
        Number(gsap.getProperty(wall, "rotationY")) || rotationRef.current || 0;
      dragStartRotationRef.current = currentRotation;

      document.addEventListener("pointermove", onPointerMove, {
        passive: false,
      });
      document.addEventListener("pointerup", onPointerUp);
    };

    const onPointerMove = (e) => {
      e.preventDefault && e.preventDefault();
      const clientX = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
      const delta = clientX - startXRef.current;
      const newRotation =
        dragStartRotationRef.current + delta * DEGREES_PER_PIXEL;

      gsap.set(wall, { rotationY: newRotation });

      const trackWidth =
        trackRef.current.offsetWidth - thumbRef.current.offsetWidth;
      const progress = (((newRotation % 360) + 360) % 360) / 360;
      gsap.set(thumbRef.current, { x: progress * trackWidth });
    };

    const onPointerUp = (e) => {
      const finalRotation =
        Number(gsap.getProperty(wall, "rotationY")) || rotationRef.current || 0;
      rotationRef.current = finalRotation;

      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);

      if (!selectedImage) {
        createAutoRotate();
      }
    };

    wall.addEventListener("pointerdown", onPointerDown);

    return () => {
      wall.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
      if (draggableRef.current) {
        draggableRef.current.kill();
        draggableRef.current = null;
      }
      stopAutoRotate();
    };
  }, [selectedImage]);
  const handleImageClick = (src, e) => {
    e.stopPropagation();
    setSelectedImage(src);
    if (autoRotationRef.current) {
      autoRotationRef.current.kill();
      autoRotationRef.current = null;
    }
  };

  const handleOutsideClick = () => {
    setSelectedImage(null);
    const wall = wallRef.current;
    if (wall) {
      if (autoRotationRef.current) autoRotationRef.current.kill();
      autoRotationRef.current = gsap.to(wall, {
        rotationY: "+=360",
        duration: 120,
        repeat: -1,
        ease: "none",
      });
    }
  };

    if (loading) {
    return <PhotoWallSkeleton />;
  }

  return (
    <div className="wall-wrapper" onClick={handleOutsideClick}>
      <div className="cylinder-blur-mask"></div>

      <div className="cylinder" ref={wallRef}>
        {grid.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`img-${i}`}
            onClick={(e) => handleImageClick(img.src, e)}
            style={{
              transform: `rotateY(${img.angle}deg) translateZ(${radius}px) translateY(${img.yPos}px)`,
              height: `${img.height}px`,
            }}
          />
        ))}
       
      </div>
      {selectedImage && (
        <>
          <div className="blur-overlay"></div>
          <div className="enlarged-image">
            <img src={selectedImage} alt="Selected" />
          </div>
        </>
      )}

    
    </div>
  );
}
