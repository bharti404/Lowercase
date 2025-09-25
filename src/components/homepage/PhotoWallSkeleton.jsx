// PhotoWallSkeleton.js
import React from "react";
import "./PhotoWallSkeleton.css";

export default function PhotoWallSkeleton() {
  const placeholders = Array.from({ length: 16 }); // 12 fake images

  return (
    <div className="skeleton-wall">
      {placeholders.map((_, i) => (
        <div key={i} className="skeleton-box"></div>
      ))}

      <div className="loader-overlay">
        <div className="loader-spinner"></div>
        <p className="loader-text">Loading Photos...</p>
      </div>
    </div>
  );
}
