// PhotoWallSkeleton.js
import React from "react";
import "./PhotoWallSkeleton.css";

export default function PhotoWallSkeleton() {
  const rows = 5;
  const cols = 30;
  const radius = 500;
  const columnGapDeg = 360 / cols;
  const rowGapPx = 120;

  const grid = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let angle = columnGapDeg * c;
      let yPos = (r - rows / 2) * rowGapPx;
      let height = 100;

      grid.push({ angle, yPos, height });
    }
  }

  return (
    <div className="wall-wrapper">
      <div className="cylinder">
        {grid.map((img, i) => (
          <div
            key={i}
            className="skeleton-box"
            style={{
              transform: `rotateY(${img.angle}deg) translateZ(${radius}px) translateY(${img.yPos}px)`,
              height: `${img.height}px`,
            }}
          ></div>
        ))}
      </div>

       <div className="loader-overlay">
        <div className="loader-spinner"></div>
        <p className="loader-text">Loading Photos...</p>
      </div>
    </div>
  );
}
