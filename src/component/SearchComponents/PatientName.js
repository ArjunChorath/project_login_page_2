
import { Box } from "@mui/material";
import React, { useState } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";

export const PatientName = () => {
     const [isClickedPatient, setIsClickedPatient] = useState(false);
     const [arrowUpColor, setArrowUpColor] = useState('blue');
       const [arrowDownColor, setArrowDownColor] = useState('blue');

 const handleArrowUpClickOfPatient = () => {
   setArrowUpColor((prevColor) => (prevColor === "cyan" ? "#90c29" : "cyan"));
   setArrowDownColor((prevColor) => (prevColor === "cyan" ? "cyan" : "#90c29"));
 };

 const handleArrowDownClickOfPatient = () => {
   setArrowDownColor((prevColor) =>
     prevColor === "#90c29" ? "cyan" : "#90c29"
   );
   setArrowUpColor("cyan");
 };
  return (
    <div>
      <Box sx={{ position: "relative", left: "-38%", marginBottom: "10px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ color: "white", marginBottom: "8px" }}>Patient name</Box>
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
                sx={{ color: arrowUpColor }}
                onClick={handleArrowUpClickOfPatient}
              ></KeyboardArrowUp>
              <KeyboardArrowDown
                fontSize="xs"
                sx={{ mt: "-8px", mb: "8px", color: arrowDownColor }}
                onClick={handleArrowDownClickOfPatient}
              ></KeyboardArrowDown>
            </Box>
          </Box>

          <input
            style={{
              backgroundColor: "black",
              color: "white",
              width: "150px",
              height: "28px",
              marginBottom: "10px",
              outline: "none",
              borderRadius: "5px",
              border: `1px solid ${isClickedPatient ? "cyan" : "indigo"}`,
            }}
            onFocus={() => setIsClickedPatient(true)}
            onBlur={() => setIsClickedPatient(false)}
          ></input>
        </Box>
      </Box>
    </div>
  );
}
