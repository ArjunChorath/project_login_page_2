import { Box, TextField } from "@mui/material";
import React from "react";

export const SearchBar = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        heigth: "100vh",
        bgcolor: "#041c4a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "60vw",
          heigth: "4rem",
          bgcolor: "#041c4a",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "5vw",
            heigth: "10rem",
            bgcolor: "#041c4a",
            display: "flex",
            alignItems: "center",
            fontSize: "30px",
          }}
        >
          Study list
        </Box>
        <Box
          sx={{
            width: "5vw",
            heigth: "4rem",
            bgcolor: "#041c4a",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          10 studies
        </Box>
      </Box>
      <Box
        sx={{
          width: "100vw",
          heigth: "100vh",
          bgcolor: "041c4a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "60%",
            heigth: "20%",
            bgcolor: "#041c4a",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
        </Box>
      </Box>
    </Box>
  );
};
