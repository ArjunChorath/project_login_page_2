import { Box } from "@mui/material";
import React, { useState } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";

export const Accession = () => {
     const [isClickedAccession, setIsClickedAccession] = useState(false);
      const [upArrowFill, setUpArrowFill] = useState("blue");
      const [downArrowFill, setDownArrowFill] = useState("blue");

      const upClicked = () => {
        setUpArrowFill("rgb(0,195,255)");
        setDownArrowFill("#090939");
      };
      const downClicked = () => {
        setUpArrowFill("#090939");
        setDownArrowFill("rgb(0,195,255)");
      };
  return (
    <div>
      <Box sx={{ position: "relative", left: "2%", marginBottom: "10px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ color: "white", marginBottom: "1px",height:'1px' }}>Accession #</Box>
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
              sx={{ color: upArrowFill, paddingLeft: "45px" }}
            ></KeyboardArrowUp>
            <KeyboardArrowDown
              fontSize="xs"
              onClick={downClicked}
              sx={{
                mt: "-8px",
                mb: "2px",
                color: downArrowFill,
                paddingLeft: "45px",
              }}
            ></KeyboardArrowDown>
          </Box>
          <input
            style={{
              backgroundColor: "black",
              color: "white",
              width: "130px",
              height: "27px",
              marginBottom: "10px",
              borderRadius: "5px",
              outline: "none",
              border: `1px solid ${isClickedAccession ? "cyan" : "indigo"}`,
            }}
            onFocus={() => setIsClickedAccession(true)}
            onBlur={() => setIsClickedAccession(false)}
          ></input>
        </Box>
      </Box>
    </div>
  );
};
