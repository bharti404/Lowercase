// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { gsap } from "gsap";
// import Draggable from "gsap/Draggable";
// import axios from "axios";
// import "./PhotoWall.css";
// import PhotoWallSkeleton from "./PhotoWallSkeleton";

// gsap.registerPlugin(Draggable);

// export default function PhotoWall() {
//   const wallRef = useRef(null);
//   const rotationRef = useRef(0);
//   const autoRotationRef = useRef(null);
//   const trackRef = useRef(null);
//   const thumbRef = useRef(null);
//   const draggableRef = useRef(null);
//   const startXRef = useRef(0);
//   const dragStartRotationRef = useRef(0);

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imageList, setImageList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const BaseUrl = process.env.REACT_APP_BASE_URL;

//   useEffect(() => {
//     const FetchAlbumById = async () => {
//       try {
//         const response = await axios.get(
//           `${BaseUrl}/api/album/get/6733c1b1df07ccf2838503d7`
//         );
//         setImageList(response.data?.data.photos || []);
//       } catch (err) {
//         console.error("Error fetching images:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     FetchAlbumById();
//   }, [BaseUrl]);

 
//   const rows = 4;
//   const cols = 24; 
//   const radius = 500;

//   const columnGapDeg = 360 / cols;
//   const rowGapPx = 120;
//   const minAngleJitter = 1;
//   const minYPxJitter = 15;
//   const minHeight = 80;
//   const maxHeight = 110;


//   const grid = useMemo(() => {
//     if (!imageList || imageList.length === 0) return [];

//     const gridArray = [];
//     for (let r = 0; r < rows; r++) {
//       for (let c = 0; c < cols; c++) {
//         const baseAngle = columnGapDeg * c;
//         const angle = baseAngle + (Math.random() - 0.5) * minAngleJitter;
//         const yPos =
//           (r - rows / 2) * rowGapPx + (Math.random() - 0.5) * minYPxJitter;
//         const height = minHeight + Math.random() * (maxHeight - minHeight);

//         const imgSrc = imageList[(r * cols + c) % imageList.length]?.url;
//         gridArray.push({ src: imgSrc, angle, yPos, height });
//       }
//     }

//     return gridArray;
//     // eslint-disable-next-line
//   }, [imageList]);


//   useEffect(() => {
//     if (!grid.length) return;

//     const wall = wallRef.current;
//     if (!wall) return;

//     const createAutoRotate = () => {
//       if (autoRotationRef.current) autoRotationRef.current.kill();
//       autoRotationRef.current = gsap.to(wall, {
//         rotationY: "+=360",
//         duration: 120,
//         repeat: -1,
//         ease: "none",
//       });
//     };

//     const stopAutoRotate = () => {
//       if (autoRotationRef.current) {
//         autoRotationRef.current.kill();
//         autoRotationRef.current = null;
//       }
//     };

//     createAutoRotate();

//     const created = Draggable.create(thumbRef.current, {
//       type: "x",
//       bounds: trackRef.current,
//       inertia: true,
//       onPress: () => {
//         stopAutoRotate();
//       },
//       onDrag: function () {
//         const trackWidth =
//           trackRef.current.offsetWidth - this.target.offsetWidth;
//         const progress = this.x / trackWidth;
//         const rotation = progress * 360;
//         gsap.set(wall, { rotationY: rotation });
//         rotationRef.current = rotation;
//       },
//       onRelease: () => {
//         if (!selectedImage) createAutoRotate();
//       },
//     });
//     draggableRef.current = created && created[0];

//     const DEGREES_PER_PIXEL = 0.4;

//     const onPointerDown = (e) => {
//       if (selectedImage) return;
//       e.preventDefault && e.preventDefault();

//       stopAutoRotate();

//       startXRef.current =
//         e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;

//       const currentRotation =
//         Number(gsap.getProperty(wall, "rotationY")) ||
//         rotationRef.current ||
//         0;
//       dragStartRotationRef.current = currentRotation;

//       document.addEventListener("pointermove", onPointerMove, {
//         passive: false,
//       });
//       document.addEventListener("pointerup", onPointerUp);
//     };

//     const onPointerMove = (e) => {
//       e.preventDefault && e.preventDefault();
//       const clientX =
//         e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
//       const delta = clientX - startXRef.current;
//       const newRotation =
//         dragStartRotationRef.current + delta * DEGREES_PER_PIXEL;

//       gsap.set(wall, { rotationY: newRotation });

//       const trackWidth =
//         trackRef.current.offsetWidth - thumbRef.current.offsetWidth;
//       const progress = (((newRotation % 360) + 360) % 360) / 360;
//       gsap.set(thumbRef.current, { x: progress * trackWidth });
//     };

//     const onPointerUp = () => {
//       const finalRotation =
//         Number(gsap.getProperty(wall, "rotationY")) ||
//         rotationRef.current ||
//         0;
//       rotationRef.current = finalRotation;

//       document.removeEventListener("pointermove", onPointerMove);
//       document.removeEventListener("pointerup", onPointerUp);

//       if (!selectedImage) {
//         createAutoRotate();
//       }
//     };

//     wall.addEventListener("pointerdown", onPointerDown);

//     return () => {
//       wall.removeEventListener("pointerdown", onPointerDown);
//       document.removeEventListener("pointermove", onPointerMove);
//       document.removeEventListener("pointerup", onPointerUp);
//       if (draggableRef.current) {
//         draggableRef.current.kill();
//         draggableRef.current = null;
//       }
//       stopAutoRotate();
//     };
//   }, [grid, selectedImage]);

//   const handleImageClick = (src, e) => {
//     e.stopPropagation();
//     setSelectedImage(src);
//     if (autoRotationRef.current) {
//       autoRotationRef.current.kill();
//       autoRotationRef.current = null;
//     }
//   };

//   const handleOutsideClick = () => {
//     setSelectedImage(null);
//     const wall = wallRef.current;
//     if (wall && !autoRotationRef.current) {
//       autoRotationRef.current = gsap.to(wall, {
//         rotationY: "+=360",
//         duration: 120,
//         repeat: -1,
//         ease: "none",
//       });
//     }
//   };

//   if (isLoading) {
//     return <PhotoWallSkeleton/>;
//   }

//   return (
//     <div className="wall-wrapper" onClick={handleOutsideClick}>
//       <div className="cylinder-blur-mask"></div>

//       <div className="cylinder" ref={wallRef}>
//         {grid.map((img, i) => (
//           <img
//             key={`${i}-${img.src}`}
//             src={img.src}
//             alt={`img-${i}`}
//             loading="lazy"
//             onClick={(e) => handleImageClick(img.src, e)}
//             style={{
//               transform: `rotateY(${img.angle}deg) translateZ(${radius}px) translateY(${img.yPos}px)`,
//               height: `${img.height}px`,
//             }}
//           />
//         ))}
//       </div>

     
//       <div className="track" ref={trackRef}>
//         <div className="thumb" ref={thumbRef}></div>
//       </div>

//       {selectedImage && (
//         <>
//           <div className="blur-overlay"></div>
//           <div className="enlarged-image">
//             <img src={selectedImage} alt="Selected" />
//           </div>
//         </>
//       )}
//     </div>
//   );
// }


//second code


// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { gsap } from "gsap";
// import Draggable from "gsap/Draggable";
// import axios from "axios";
// import "./PhotoWall.css";
// import PhotoWallSkeleton from "./PhotoWallSkeleton";

// gsap.registerPlugin(Draggable);

// export default function PhotoWall() {
//   const wallRef = useRef(null);
//   const rotationRef = useRef(0);
//   const autoRotationRef = useRef(null);
//   const trackRef = useRef(null);
//   const thumbRef = useRef(null);
//   const draggableRef = useRef(null);
//   const startXRef = useRef(0);
//   const dragStartRotationRef = useRef(0);

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imageList, setImageList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const BaseUrl = process.env.REACT_APP_BASE_URL;

//   useEffect(() => {
//     const FetchAlbumById = async () => {
//       try {
//         const response = await axios.get(
//           `${BaseUrl}/api/album/get/6733c1b1df07ccf2838503d7`
//         );
//         setImageList(response.data?.data.photos || []);
//       } catch (err) {
//         console.error("Error fetching images:", err);
//       } 
//     };

//     FetchAlbumById();
//   }, [BaseUrl]);




 
//   const rows = 4;
//   const cols = 24; 
//   const radius = 500;

//   const columnGapDeg = 360 / cols;
//   const rowGapPx = 120;
//   const minAngleJitter = 1;
//   const minYPxJitter = 15;
//   const minHeight = 80;
//   const maxHeight = 110;


//   const grid = useMemo(() => {
//     if (!imageList || imageList.length === 0) return [];

//     const gridArray = [];
//     for (let r = 0; r < rows; r++) {
//       for (let c = 0; c < cols; c++) {
//         const baseAngle = columnGapDeg * c;
//         const angle = baseAngle + (Math.random() - 0.5) * minAngleJitter;
//         const yPos =
//           (r - rows / 2) * rowGapPx + (Math.random() - 0.5) * minYPxJitter;
//         const height = minHeight + Math.random() * (maxHeight - minHeight);

//         const imgSrc = imageList[(r * cols + c) % imageList.length]?.url;
//         gridArray.push({ src: imgSrc, angle, yPos, height });
//       }
//     }

//     return gridArray;
//     // eslint-disable-next-line
//   }, [imageList]);


  


//   useEffect(() => {
//     if (!grid.length) return;

//     const wall = wallRef.current;
//     if (!wall) return;

//     const createAutoRotate = () => {
//       if (autoRotationRef.current) autoRotationRef.current.kill();
//       autoRotationRef.current = gsap.to(wall, {
//         rotationY: "+=360",
//         duration: 120,
//         repeat: -1,
//         ease: "none",
//       });
//     };

//     const stopAutoRotate = () => {
//       if (autoRotationRef.current) {
//         autoRotationRef.current.kill();
//         autoRotationRef.current = null;
//       }
//     };

//     createAutoRotate();

//     const created = Draggable.create(thumbRef.current, {
//       type: "x",
//       bounds: trackRef.current,
//       inertia: true,
//       onPress: () => {
//         stopAutoRotate();
//       },
//       onDrag: function () {
//         const trackWidth =
//           trackRef.current.offsetWidth - this.target.offsetWidth;
//         const progress = this.x / trackWidth;
//         const rotation = progress * 360;
//         gsap.set(wall, { rotationY: rotation });
//         rotationRef.current = rotation;
//       },
//       onRelease: () => {
//         if (!selectedImage) createAutoRotate();
//       },
//     });
//     draggableRef.current = created && created[0];

//     const DEGREES_PER_PIXEL = 0.4;

//     const onPointerDown = (e) => {
//       if (selectedImage) return;
//       e.preventDefault && e.preventDefault();

//       stopAutoRotate();

//       startXRef.current =
//         e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;

//       const currentRotation =
//         Number(gsap.getProperty(wall, "rotationY")) ||
//         rotationRef.current ||
//         0;
//       dragStartRotationRef.current = currentRotation;

//       document.addEventListener("pointermove", onPointerMove, {
//         passive: false,
//       });
//       document.addEventListener("pointerup", onPointerUp);
//     };

//     const onPointerMove = (e) => {
//       e.preventDefault && e.preventDefault();
//       const clientX =
//         e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
//       const delta = clientX - startXRef.current;
//       const newRotation =
//         dragStartRotationRef.current + delta * DEGREES_PER_PIXEL;

//       gsap.set(wall, { rotationY: newRotation });

//       const trackWidth =
//         trackRef.current.offsetWidth - thumbRef.current.offsetWidth;
//       const progress = (((newRotation % 360) + 360) % 360) / 360;
//       gsap.set(thumbRef.current, { x: progress * trackWidth });
//     };

//     const onPointerUp = () => {
//       const finalRotation =
//         Number(gsap.getProperty(wall, "rotationY")) ||
//         rotationRef.current ||
//         0;
//       rotationRef.current = finalRotation;

//       document.removeEventListener("pointermove", onPointerMove);
//       document.removeEventListener("pointerup", onPointerUp);

//       if (!selectedImage) {
//         createAutoRotate();
//       }
//     };

//     wall.addEventListener("pointerdown", onPointerDown);

//     return () => {
//       wall.removeEventListener("pointerdown", onPointerDown);
//       document.removeEventListener("pointermove", onPointerMove);
//       document.removeEventListener("pointerup", onPointerUp);
//       if (draggableRef.current) {
//         draggableRef.current.kill();
//         draggableRef.current = null;
//       }
//       stopAutoRotate();
//     };
//   }, [grid, selectedImage]);


//   useEffect(() => {
//   if (!imageList.length) return;

//   let loaded = 0;
//   imageList.forEach((img) => {
//     const image = new Image();
//     image.src = img.url;
//     image.onload = () => {
//       loaded++;
//       if (loaded === imageList.length) {
//         setIsLoading(false);
//       }
//     };
//     image.onerror = () => {
//       loaded++;
//       if (loaded === imageList.length) {
//         setIsLoading(false);
//       }
//     };
//   });
// }, [imageList]);


//   const handleImageClick = (src, e) => {
//     e.stopPropagation();
//     setSelectedImage(src);
//     if (autoRotationRef.current) {
//       autoRotationRef.current.kill();
//       autoRotationRef.current = null;
//     }
//   };

//   const handleOutsideClick = () => {
//     setSelectedImage(null);
//     const wall = wallRef.current;
//     if (wall && !autoRotationRef.current) {
//       autoRotationRef.current = gsap.to(wall, {
//         rotationY: "+=360",
//         duration: 120,
//         repeat: -1,
//         ease: "none",
//       });
//     }
//   };

//   if (isLoading) {
//     return <PhotoWallSkeleton/>;
//   }

//   return (
//     <div className="wall-wrapper" onClick={handleOutsideClick}>
//       <div className="cylinder-blur-mask"></div>

//       <div className="cylinder" ref={wallRef}>
//         {grid.map((img, i) => (
//           <img
//             key={`${i}-${img.src}`}
//             src={img.src}
//             alt={`img-${i}`}
//             loading="lazy"
//             onClick={(e) => handleImageClick(img.src, e)}
//             style={{
//               transform: `rotateY(${img.angle}deg) translateZ(${radius}px) translateY(${img.yPos}px)`,
//               height: `${img.height}px`,
//             }}
//           />
//         ))}
//       </div>

     
//       <div className="track" ref={trackRef}>
//         <div className="thumb" ref={thumbRef}></div>
//       </div>

//       {selectedImage && (
//         <>
//           <div className="blur-overlay"></div>
//           <div className="enlarged-image">
//             <img src={selectedImage} alt="Selected" />
//           </div>
//         </>
//       )}
//     </div>
//   );
// }



// third

// import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
// import { gsap } from "gsap";
// import Draggable from "gsap/Draggable";
// import axios from "axios";
// import "./PhotoWall.css";
// import PhotoWallSkeleton from "./PhotoWallSkeleton";

// gsap.registerPlugin(Draggable);

// export default function PhotoWall() {
//   const wallRef = useRef(null);
//   const rotationRef = useRef(0);
//   const autoRotationRef = useRef(null);
//   const trackRef = useRef(null);
//   const thumbRef = useRef(null);
//   const draggableRef = useRef(null);
//   const startXRef = useRef(0);
//   const dragStartRotationRef = useRef(0);
//   const skeletonTimeoutRef = useRef(null);
//   const isDraggingRef = useRef(false);

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imageList, setImageList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [imagesLoaded, setImagesLoaded] = useState(false);
//   const [showSkeleton, setShowSkeleton] = useState(true);

//   const BaseUrl = process.env.REACT_APP_BASE_URL;

 
//   const rows = 4;
//   const cols = 24; 
//   const radius = 500;

//   const columnGapDeg = 360 / cols;
//   const rowGapPx = 120;
//   const minAngleJitter = 1;
//   const minYPxJitter = 15;
//   const minHeight = 80;
//   const maxHeight = 110;

 
//   const createAutoRotate = useCallback(() => {
//     if (autoRotationRef.current) autoRotationRef.current.kill();
    
//     autoRotationRef.current = gsap.to(rotationRef, {
//       current: rotationRef.current + 360,
//       duration: 120,
//       ease: "none",
//       onUpdate: () => {
//         if (wallRef.current) {
//           gsap.set(wallRef.current, { rotationY: rotationRef.current });
          
       
//           if (trackRef.current && thumbRef.current) {
//             const trackWidth = trackRef.current.offsetWidth - thumbRef.current.offsetWidth;
//             const progress = (((rotationRef.current % 360) + 360) % 360) / 360;
//             gsap.set(thumbRef.current, { x: progress * trackWidth });
//           }
//         }
//       },
//       modifiers: {
//         current: (value) => value % 360 
//       },
//       repeat: -1
//     });
//   }, []);

//   const stopAutoRotate = useCallback(() => {
//     if (autoRotationRef.current) {
//       autoRotationRef.current.kill();
//       autoRotationRef.current = null;
//     }
//   }, []);

//   useEffect(() => {
//     const FetchAlbumById = async () => {
//       try {
//         const response = await axios.get(
//           `${BaseUrl}/api/album/get/6733c1b1df07ccf2838503d7`
//         );
//         setImageList(response.data?.data.photos || []);
//       } catch (err) {
//         console.error("Error fetching images:", err);
//         setIsLoading(false);
//         setShowSkeleton(false);
//       } 
//     };

//     FetchAlbumById();
//   }, [BaseUrl]);

//   const grid = useMemo(() => {
//     if (!imageList || imageList.length === 0) return [];

//     const gridArray = [];
//     for (let r = 0; r < rows; r++) {
//       for (let c = 0; c < cols; c++) {
//         const baseAngle = columnGapDeg * c;
//         const angle = baseAngle + (Math.random() - 0.5) * minAngleJitter;
//         const yPos =
//           (r - rows / 2) * rowGapPx + (Math.random() - 0.5) * minYPxJitter;
//         const height = minHeight + Math.random() * (maxHeight - minHeight);

//         const imgSrc = imageList[(r * cols + c) % imageList.length]?.url;
//         gridArray.push({ src: imgSrc, angle, yPos, height });
//       }
//     }

//     return gridArray;
//   }, [imageList, rows, cols, columnGapDeg, rowGapPx, minAngleJitter, minYPxJitter, minHeight, maxHeight]);

//   useEffect(() => {
//     if (!grid.length || !wallRef.current) return;

//     const wall = wallRef.current;
    
 
//     gsap.set(wall, { rotationY: rotationRef.current });


//     if (!selectedImage) {
//       createAutoRotate();
//     }


//     const initDraggable = () => {
//       if (draggableRef.current) draggableRef.current.kill();
      
//       const created = Draggable.create(thumbRef.current, {
//         type: "x",
//         bounds: trackRef.current,
//         inertia: true,
//         onPress: () => {
//           stopAutoRotate();
//           isDraggingRef.current = true;
//         },
//         onDrag: function () {
//           const trackWidth = trackRef.current.offsetWidth - this.target.offsetWidth;
//           const progress = Math.max(0, Math.min(1, this.x / trackWidth));
//           const rotation = progress * 360;
//           gsap.set(wall, { rotationY: rotation });
//           rotationRef.current = rotation;
//         },
//         onRelease: () => {
//           isDraggingRef.current = false;
//           if (!selectedImage) createAutoRotate();
//         },
//       });
//       draggableRef.current = created && created[0];
//     };

//     initDraggable();

  
//     const DEGREES_PER_PIXEL = 0.4;

//     const onPointerDown = (e) => {
//       if (selectedImage) return;
//       e.preventDefault && e.preventDefault();

//       stopAutoRotate();
//       isDraggingRef.current = true;

//       startXRef.current =
//         e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;

//       dragStartRotationRef.current = rotationRef.current;

//       document.addEventListener("pointermove", onPointerMove, {
//         passive: false,
//       });
//       document.addEventListener("pointerup", onPointerUp);
//     };

//     const onPointerMove = (e) => {
//       if (!isDraggingRef.current) return;
//       e.preventDefault && e.preventDefault();
//       const clientX =
//         e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
//       const delta = clientX - startXRef.current;
//       const newRotation =
//         dragStartRotationRef.current + delta * DEGREES_PER_PIXEL;

//       gsap.set(wall, { rotationY: newRotation });
//       rotationRef.current = newRotation;

//       const trackWidth =
//         trackRef.current.offsetWidth - thumbRef.current.offsetWidth;
//       const progress = (((newRotation % 360) + 360) % 360) / 360;
//       gsap.set(thumbRef.current, { x: progress * trackWidth });
//     };

//     const onPointerUp = () => {
//       isDraggingRef.current = false;
//       document.removeEventListener("pointermove", onPointerMove);
//       document.removeEventListener("pointerup", onPointerUp);

//       if (!selectedImage) {
//         createAutoRotate();
//       }
//     };

//     wall.addEventListener("pointerdown", onPointerDown);

//     return () => {
//       wall.removeEventListener("pointerdown", onPointerDown);
//       document.removeEventListener("pointermove", onPointerMove);
//       document.removeEventListener("pointerup", onPointerUp);
      
//       if (draggableRef.current) {
//         draggableRef.current.kill();
//         draggableRef.current = null;
//       }
      
//       stopAutoRotate();
//     };
//   }, [grid, selectedImage, createAutoRotate, stopAutoRotate]);

//   useEffect(() => {
//     if (!imageList.length) return;

//     let loaded = 0;
//     const totalImages = imageList.length;
    
//     imageList.forEach((img) => {
//       const image = new Image();
//       image.src = img.url;
//       image.onload = () => {
//         loaded++;
//         if (loaded === totalImages) {
//           setImagesLoaded(true);
//         }
//       };
//       image.onerror = () => {
//         loaded++;
//         if (loaded === totalImages) {
//           setImagesLoaded(true);
//         }
//       };
//     });
//   }, [imageList]);

//   useEffect(() => {
//     if (imagesLoaded) {
      
//       const skeletonTime = 20000 + Math.random() * 10000;
//       skeletonTimeoutRef.current = setTimeout(() => {
//         setIsLoading(false);
//         setShowSkeleton(false);
//       }, skeletonTime);
      
//       return () => {
//         if (skeletonTimeoutRef.current) {
//           clearTimeout(skeletonTimeoutRef.current);
//         }
//       };
//     }
//   }, [imagesLoaded]);

//   const handleImageClick = (src, e) => {
//     e.stopPropagation();
//     setSelectedImage(src);
//     stopAutoRotate();
//   };

//   const handleOutsideClick = () => {
//     setSelectedImage(null);
//     if (!autoRotationRef.current && !selectedImage) {
//       createAutoRotate();
//     }
//   };

//   if (showSkeleton) {
//     return <PhotoWallSkeleton/>;
//   }

//   return (
//     <div className="wall-wrapper" onClick={handleOutsideClick}>
//       <div className="cylinder-blur-mask"></div>

//       <div className="cylinder" ref={wallRef}>
//         {grid.map((img, i) => (
//           <img
//             key={`${i}-${img.src}`}
//             src={img.src}
//             alt={`img-${i}`}
//             loading="lazy"
//             onClick={(e) => handleImageClick(img.src, e)}
//             style={{
//               transform: `rotateY(${img.angle}deg) translateZ(${radius}px) translateY(${img.yPos}px)`,
//               height: `${img.height}px`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="track" ref={trackRef}>
//         <div className="thumb" ref={thumbRef}></div>
//       </div>

//       {selectedImage && (
//         <>
//           <div className="blur-overlay"></div>
//           <div className="enlarged-image">
//             <img src={selectedImage} alt="Selected" />
//           </div>
//         </>
//       )}
//     </div>
//   );
// }


import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import axios from "axios";
import "./PhotoWall.css";
import PhotoWallSkeleton from "./PhotoWallSkeleton";

gsap.registerPlugin(Draggable);

export default function PhotoWall() {
  const wallRef = useRef(null);
  const rotationRef = useRef(0);
  const autoRotationRef = useRef(null);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const draggableRef = useRef(null);
  const startXRef = useRef(0);
  const dragStartRotationRef = useRef(0);
  const skeletonTimeoutRef = useRef(null);
  const isDraggingRef = useRef(false);
  const hasUserInteractedRef = useRef(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const BaseUrl = process.env.REACT_APP_BASE_URL;

  // Reduce number of images for better performance
  const rows = 4;
  const cols = 24; 
  const radius = 500;

  const columnGapDeg = 360 / cols;
  const rowGapPx = 120;
  const minAngleJitter = 1;
  const minYPxJitter = 15;
  const minHeight = 80;
  const maxHeight = 110;

  console.log("is loadind", isLoading)
  // Create auto rotation function with useCallback to maintain reference
  const createAutoRotate = useCallback(() => {
    if (autoRotationRef.current) autoRotationRef.current.kill();
    
    autoRotationRef.current = gsap.to(rotationRef, {
      current: rotationRef.current + 360,
      duration: 120,
      ease: "none",
      onUpdate: () => {
        if (wallRef.current) {
          gsap.set(wallRef.current, { rotationY: rotationRef.current });
          
          // Update slider position
          if (trackRef.current && thumbRef.current) {
            const trackWidth = trackRef.current.offsetWidth - thumbRef.current.offsetWidth;
            const progress = (((rotationRef.current % 360) + 360) % 360) / 360;
            gsap.set(thumbRef.current, { x: progress * trackWidth });
          }
        }
      },
      modifiers: {
        current: (value) => value % 360 // Keep rotation within 0-360 range
      },
      repeat: -1
    });
  }, []);

  const stopAutoRotate = useCallback(() => {
    if (autoRotationRef.current) {
      autoRotationRef.current.kill();
      autoRotationRef.current = null;
    }
  }, []);

  useEffect(() => {
    const FetchAlbumById = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/api/album/get/6733c1b1df07ccf2838503d7`
        );
        console.log(response.data?.data.photo)
        setImageList(response.data?.data.photos || []);

      } catch (err) {
        console.error("Error fetching images:", err);
        setIsLoading(false);
        setShowSkeleton(false);
      } 
    };

    FetchAlbumById();
  }, [BaseUrl]);

  const grid = useMemo(() => {
    if (!imageList || imageList.length === 0) return [];

    const gridArray = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const baseAngle = columnGapDeg * c;
        const angle = baseAngle + (Math.random() - 0.5) * minAngleJitter;
        const yPos =
          (r - rows / 2) * rowGapPx + (Math.random() - 0.5) * minYPxJitter;
        const height = minHeight + Math.random() * (maxHeight - minHeight);

        const imgSrc = imageList[(r * cols + c) % imageList.length]?.url;
        gridArray.push({ src: imgSrc, angle, yPos, height });
      }
    }

    return gridArray;
  }, [imageList, rows, cols, columnGapDeg, rowGapPx, minAngleJitter, minYPxJitter, minHeight, maxHeight]);

  useEffect(() => {
    if (!grid.length || !wallRef.current) return;

    const wall = wallRef.current;
    
    // Set initial rotation
    gsap.set(wall, { rotationY: rotationRef.current });

    // Start auto-rotation automatically
    if (!selectedImage && !hasUserInteractedRef.current) {
      // Use a small timeout to ensure the DOM is ready
      setTimeout(() => {
        createAutoRotate();
      }, 100);
    }

    // Initialize draggable slider
    const initDraggable = () => {
      if (draggableRef.current) draggableRef.current.kill();
      
      const created = Draggable.create(thumbRef.current, {
        type: "x",
        bounds: trackRef.current,
        inertia: true,
        onPress: () => {
          hasUserInteractedRef.current = true;
          stopAutoRotate();
          isDraggingRef.current = true;
        },
        onDrag: function () {
          const trackWidth = trackRef.current.offsetWidth - this.target.offsetWidth;
          const progress = Math.max(0, Math.min(1, this.x / trackWidth));
          const rotation = progress * 360;
          gsap.set(wall, { rotationY: rotation });
          rotationRef.current = rotation;
        },
        onRelease: () => {
          isDraggingRef.current = false;
          if (!selectedImage) createAutoRotate();
        },
      });
      draggableRef.current = created && created[0];
    };

    initDraggable();

    // Manual rotation with mouse/touch
    const DEGREES_PER_PIXEL = 0.4;

    const onPointerDown = (e) => {
      if (selectedImage) return;
      e.preventDefault && e.preventDefault();

      hasUserInteractedRef.current = true;
      stopAutoRotate();
      isDraggingRef.current = true;

      startXRef.current =
        e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;

      dragStartRotationRef.current = rotationRef.current;

      document.addEventListener("pointermove", onPointerMove, {
        passive: false,
      });
      document.addEventListener("pointerup", onPointerUp);
    };

    const onPointerMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault && e.preventDefault();
      const clientX =
        e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
      const delta = clientX - startXRef.current;
      const newRotation =
        dragStartRotationRef.current + delta * DEGREES_PER_PIXEL;

      gsap.set(wall, { rotationY: newRotation });
      rotationRef.current = newRotation;

      const trackWidth =
        trackRef.current.offsetWidth - thumbRef.current.offsetWidth;
      const progress = (((newRotation % 360) + 360) % 360) / 360;
      gsap.set(thumbRef.current, { x: progress * trackWidth });
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
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
  }, [grid, selectedImage, createAutoRotate, stopAutoRotate]);

  useEffect(() => {
    if (!imageList.length) return;

    let loaded = 0;
    const totalImages = imageList.length;
    
    imageList.forEach((img) => {
      const image = new Image();
      image.src = img.url;
      image.onload = () => {
        loaded++;
        if (loaded === totalImages) {
          setImagesLoaded(true);
        }
      };
      image.onerror = () => {
        loaded++;
        if (loaded === totalImages) {
          setImagesLoaded(true);
        }
      };
    });
  }, [imageList]);

  // Keep showing skeleton for 20-30 seconds even after images are loaded
  useEffect(() => {
    if (imagesLoaded) {
      // Random time between 20-30 seconds
      const skeletonTime = 20000 + Math.random() * 10000;
      skeletonTimeoutRef.current = setTimeout(() => {
        setIsLoading(false);
        setShowSkeleton(false);
        
        // Start rotation after skeleton disappears
        if (!selectedImage && !hasUserInteractedRef.current) {
          createAutoRotate();
        }
      }, skeletonTime);
      
      return () => {
        if (skeletonTimeoutRef.current) {
          clearTimeout(skeletonTimeoutRef.current);
        }
      };
    }
  }, [imagesLoaded, selectedImage, createAutoRotate]);

  const handleImageClick = (src, e) => {
    e.stopPropagation();
    hasUserInteractedRef.current = true;
    setSelectedImage(src);
    stopAutoRotate();
  };

  const handleOutsideClick = () => {
    setSelectedImage(null);
    if (!autoRotationRef.current) {
      createAutoRotate();
    }
  };

  if (showSkeleton) {
    return <PhotoWallSkeleton/>;
  }

  return (
    <div className="wall-wrapper" onClick={handleOutsideClick}>
      <div className="cylinder-blur-mask"></div>

      <div className="cylinder" ref={wallRef}>
        {grid.map((img, i) => (
          <img
            key={`${i}-${img.src}`}
            src={img.src}
            alt={`img-${i}`}
            loading="lazy"
            onClick={(e) => handleImageClick(img.src, e)}
            style={{
              transform: `rotateY(${img.angle}deg) translateZ(${radius}px) translateY(${img.yPos}px)`,
              height: `${img.height}px`,
            }}
          />
        ))}
      </div>

      <div className="track" ref={trackRef}>
        <div className="thumb" ref={thumbRef}></div>
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