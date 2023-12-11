import { Box } from "@mui/material";
import React, { useState } from "react";

export const Description = () => {
    const [isClickedDescription, setIsClickedDescription] = useState(false);
  return (
    <div>
      {" "}
      <Box sx={{ position: "relative", left: "-16%", marginBottom: "10px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ color: "white", marginBottom: "8px" }}>Description</Box>
          <input
            style={{
              backgroundColor: "black",
              color: "white",
              width: "150px",
              height: "28px",
              marginBottom: "10px",
              borderRadius: "5px",
              outline: "none",
              border: `1px solid ${isClickedDescription ? "cyan" : "indigo"}`,
            }}
            onFocus={() => setIsClickedDescription(true)}
            onBlur={() => setIsClickedDescription(false)}
          ></input>
        </Box>
      </Box>
    </div>
  );
};
