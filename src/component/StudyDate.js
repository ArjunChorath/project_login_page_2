import { Box } from "@mui/material";
import React, { useState } from "react";

export const StudyDate = () => {
     const [isClickedStartStudyDate, setIsClickedStartStudyDate] =useState(false);
     const [isClickedEndStudyDate, setIsClickedEndtStudyDate] = useState(false);
     const [inputType, setInputType] = useState("text");

     const handleStartStudyDateFocus = () => {
       setInputType("date");
       setIsClickedStartStudyDate(!isClickedStartStudyDate);
     };

     const handleStartStudyDateBlur = () => {
       setInputType("text");
       setIsClickedStartStudyDate(!isClickedStartStudyDate);
     };

     const handleEndStudyDateFocus = () => {
       setInputType("date");
       setIsClickedEndtStudyDate(!isClickedEndStudyDate);
     };

     const handleEndStudyDateBlur = () => {
       setInputType("text");
       setIsClickedEndtStudyDate(!isClickedEndStudyDate);
     };
  return (
    <Box sx={{display:'flex',flexDirection:'row'}} >
      <Box sx={{ position: "relative", left: "-24%", marginBottom: "10px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ color: "white", marginBottom: "8px" }}>Study Date</Box>
          <input
            type={inputType}
            onFocus={handleStartStudyDateFocus}
            onBlur={handleStartStudyDateBlur}
            placeholder="Start date"
            style={{
              backgroundColor: "black",
              color: "white",
              width: "100px",
              height: "30px",
              marginBottom: "10px",
              borderRadius: "5px",
              outline: "none",
              border: `1px solid ${
                isClickedStartStudyDate ? "cyan" : "indigo"
              }`,
            }}
          />
        </Box>
      </Box>

      <style>
        {`
    input[type="date"]::-webkit-calendar-picker-indicator {
      filter: invert(1); // Invert the color of the calendar icon
    }
  `}
      </style>

      <Box sx={{ position: "relative", left: "-24%", marginBottom: "10px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ color: "white" }}> </Box>

          <input
            type={inputType}
            onFocus={handleEndStudyDateFocus}
            onBlur={handleEndStudyDateBlur}
            placeholder="End date"
            id="dateRequired"
            name="dateRequired"
            style={{
              backgroundColor: "black",
              color: "white",
              width: "100px",
              height: "30px",
              marginTop: "29px",
              borderRadius: "5px",
              outline: "none",
              border: `1px solid ${isClickedEndStudyDate ? "cyan" : "indigo"}`,
            }}
          ></input>
        </Box>
      </Box>
    </Box>
  );
}
