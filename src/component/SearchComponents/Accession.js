import { Box } from "@mui/material";
import React, { useState } from "react";

export const Accession = () => {
     const [isClickedAccession, setIsClickedAccession] = useState(false);
  return (
    <div>
      <Box sx={{ position: "relative", left: "2%", marginBottom: "10px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ color: "white", marginBottom: "8px" }}>Accession #</Box>
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
