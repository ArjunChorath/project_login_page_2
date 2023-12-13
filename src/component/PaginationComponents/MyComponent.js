import React, { useState } from "react";
import Select from "react-select";
import { Box } from "@mui/material";
import downArrow from "../../images/arrow-down-3101 (2).png"

const MyComponent = () => {
 
 

 
 
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10vh",
        width: "100vw",
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          height: "10vh",
          width: "65vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "black",
        }}
      >
        <Box
          className="col-5"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
          
          </Box>
          <h5 style={{ margin: "8px", color: "rgb(248, 248, 248)" }}>
            Results per page
          </h5>
        </Box>
        <Box
          className="col-5"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h5 style={{ color: "white", margin: "2px" }}>Page 1</h5>
          <Box style={{ display: "flex", height: "80%" }}>
            <button
              type="button"
              style={{
                borderRadius: "4px 0px 0px 4px",
                borderWidth: "2px",

                backgroundColor: "black",
                borderColor: "aqua",
                color: "white",
              }}
            >
              &lt;&lt;
            </button>
            <button
              type="button"
              style={{
                borderRadius: "0px 0px 0px 0px",
                borderLeft: "0px",
                borderRight: "0px",

                borderColor: "aqua",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {"< Back"}
            </button>
            <button
              type="button"
              style={{
                borderRadius: "0px 4px 4px 0px",

                borderColor: "aqua",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Next &gt;
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyComponent;
