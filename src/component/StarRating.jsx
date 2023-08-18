import React from "react";
import { Rate } from "antd";

const StarRating = () => {
  return (
    <div>
      <div style={{ display: "block" }}>
        <Rate defaultValue={3} allowHalf />
      </div>
      <div>
        <Rate defaultValue={4} allowHalf />
      </div>
    </div>
  );
};

export default StarRating;
