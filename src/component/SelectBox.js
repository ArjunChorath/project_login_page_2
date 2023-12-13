import React from "react";

import downArrow from "../images/arrow-down-3101 (2).png";

import "./SeletBox.css";
import { Box } from "@mui/material";

const SelectBox = () => {
  return (
    
    <Box className="custom-select-container">
      <Box sx={{ position: "relative" }}>
        <select className="custom-select">
          <option hidden value="" disabled selected>
            Select...
          </option>
          <option value="option1">25</option>
          <option value="option1">50</option>
          <option value="option2">100</option>
        </select>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: ".4rem",
          left: "6rem",
        }}
      >
        <img src={downArrow} alt="error"></img>
      </Box>
      <Box sx={{position:'absolute'}}>
        <h5 style={{ margin: "8px", color: "rgb(248, 248, 248)" }}>
          Results per page
        </h5>
      </Box>
      
    </Box>
  );
};

export default SelectBox;
