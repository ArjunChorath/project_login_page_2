import { Box } from "@mui/material";
import React, { useState } from "react";

export const MRN = () => {
    const [isClickedMRN, setIsClickedMRN] = useState(false);
  return (
    <div>
      <Box sx={{ position: "relative", left: "-38%", marginBottom: "10px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ color: "white", marginBottom: "8px" }}>MRN</Box>

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
