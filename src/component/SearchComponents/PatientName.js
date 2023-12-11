
import { Box } from "@mui/material";
import React, { useState } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";

export const PatientName = () => {
     const [isClickedPatient, setIsClickedPatient] = useState(false);
     const [upArrowFill,setUpArrowFill]=useState("blue")
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
                onClick={upClicked}
                sx={{color:upArrowFill}}
              ></KeyboardArrowUp>
              <KeyboardArrowDown
                fontSize="xs"
                onClick={downClicked}
                sx={{ mt: "-8px", mb: "8px",color:downArrowFill}}
               
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
