import React, { useState } from "react";
import StarRating from "../starRating/StarRating";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
const DropDownArrow = () => {
  const [show, setShow] = useState(true);
  const showContent = () => {
    if (show == true) {
      setShow(false);
    } else if (show == false) {
      setShow(true);
    }
  };
  return (
    <div
      style={{
        border: "3px solid black",
        paddingTop: "10px",
        borderRadius: "15px",
      }}
    >
      {show && (
        <div style={{ marginBottom: "10px" }}>
          <StarRating />
        </div>
      )}
      <div
        style={{
          cursor: "pointer",
          textAlign: "center",
        }}
      >
        <KeyboardDoubleArrowUpIcon
          style={{ fontSize: "30px" }}
          onClick={showContent}
        />
      </div>
    </div>
  );
};

export default DropDownArrow;
