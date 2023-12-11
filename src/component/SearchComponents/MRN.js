import { Box } from "@mui/material";
import React, { useState } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";

export const Mrn = () => {
  const [isClickedMRN, setIsClickedMRN] = useState(false);
   const [upArrowFill, setUpArrowFill] = useState("blue");
   const [downArrowFill, setDownArrowFill] = useState("blue");
     const upClicked=()=>{
         setUpArrowFill("rgb(0,195,255)");
         setDownArrowFill("#090939");

     }
     const downClicked=()=>{
      setUpArrowFill("#090939");
      setDownArrowFill("rgb(0,195,255)");
     }
  return (
    <div>
      <Box sx={{ position: "relative", left: "-38%", marginBottom: "10px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              color: "white",
              marginBottom: "1px",
              height: "1px",
              width: "1px",
            }}
          >
            MRN
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <KeyboardArrowUp
              fontSize="xs"
              onClick={upClicked}
              sx={{ color: upArrowFill, paddingRight: "58px", }}
            ></KeyboardArrowUp>
            <KeyboardArrowDown
              fontSize="xs"
              onClick={downClicked}
              sx={{
                mt: "-8px",
                mb: "2px",
                color: downArrowFill,
                paddingRight: "58px",
              }}
            ></KeyboardArrowDown>
          </Box>

          <input
            style={{
              backgroundColor: "black",
              color: "white",
              width: "140px",
              height: "28px",
              marginBottom: "10px",
              borderRadius: "5px",
              outline: "none",
              border: `1px solid ${isClickedMRN ? "cyan" : "indigo"}`,
            }}
            onFocus={() => setIsClickedMRN(true)}
            onBlur={() => setIsClickedMRN(false)}
          ></input>
        </Box>
      </Box>
    </div>
  );
};
