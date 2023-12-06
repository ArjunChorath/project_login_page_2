import { Box, Grid, TextField } from "@mui/material";
import React from "react";

export const SearchBar = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        heigth: "100vh",
        bgcolor: "#090c29",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "62vw",
          heigth: "4rem",
          bgcolor: "#090c29",
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
            bgcolor: "#090c29",
            display: "flex",
            alignItems: "center",
            fontSize: "35px",
            color: "white",
            whiteSpace: "nowrap",
            paddingBottom: "50px",
            paddingTop: "20px",
          }}
        >
          Study List
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "2.5vw",
              heigth: "10rem",
              bgcolor: "#090c29",
              display: "flex",
              alignItems: "center",
              fontSize: "35px",
              color: "white",
              whiteSpace: "nowrap",
              paddingBottom: "50px",
              paddingTop: "20px",
            }}
          >
            10
          </Box>
          <Box
            sx={{
              width: "5vw",
              heigth: "10rem",
              bgcolor: "#090c29",
              display: "flex",
              alignItems: "center",
              fontSize: "25px",
              color: "grey",
              whiteSpace: "nowrap",
              paddingBottom: "50px",
              paddingTop: "20px",
            }}
          >
            Studies
          </Box>
        </Box>
      </Box>
      
    </Box>
  );
}; 
