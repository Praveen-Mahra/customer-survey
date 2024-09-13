import React, { useState } from "react";
import "./StarRating.css";

const StarRating = ({ value, onChange, maxStars = 5 }) => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => setHovered(index + 1);
  const handleMouseLeave = () => setHovered(null);
  const handleClick = (index) => onChange(index + 1);

  return (
    <div className="star-rating">
      {[...Array(maxStars)].map((_, index) => (
        <span
          key={index}
          className={`star ${
            index < (hovered !== null ? hovered : value) ? "filled" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
