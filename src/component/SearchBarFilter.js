import { Box } from '@mui/material'
import React, { useState } from 'react'

export const SearchBarFilter = () => {
    const [isClicked,setIsClicked]=useState(false);
  return (
    <Box>
      <Box
        sx={{
          width: "100vw",
          heigth: "100vh",
          bgcolor: "#090c29",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "60%",
            heigth: "20%",
            bgcolor: "#090c29",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{ position: "relative", left: "-04%", marginBottom: "10px" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ color: "white", marginBottom: "8px" }}>
                Patient name
              </Box>
              <input
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "150px",
                  height: "22px",
                  marginBottom: "10px",
                  outline:"none",
                  borderRadius: "5px",
                  border:`1px solid ${isClicked ? "cyan":"indigo"}`
               
                }}
                onFocus={() => setIsClicked(true)}
                onBlur={()=>setIsClicked(false)}
              ></input>
            </Box>
          </Box>

          <Box
            sx={{ position: "relative", left: "-4.5%", marginBottom: "10px" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ color: "white", marginBottom: "8px" }}>MRN</Box>
              <input
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "140px",
                  height: "22px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border:`1px solid ${isClicked ? "cyan":"indigo"}`
               
                }}
                onFocus={() => setIsClicked(true)}
                onBlur={()=>setIsClicked(false)}
              ></input>
            </Box>
          </Box>

          <Box
            sx={{ position: "relative", left: "-04.6%", marginBottom: "10px" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ color: "white", marginBottom: "8px" }}>Study Date</Box>
              <input
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "100px",
                  height: "22px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              ></input>
            </Box>
          </Box>

          <Box
            sx={{ position: "relative", left: "-07%", marginBottom: "10px" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ color: "white" }}> </Box>
              <input
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "100px",
                  height: "22px",
                  marginTop: "19px",
                  borderRadius: "5px",
                }}
              ></input>
            </Box>
          </Box>

          <Box sx={{ position: "relative", left: "-7%", marginBottom: "10px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ color: "white", marginBottom: "8px" }}>
                Description
              </Box>
              <input
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "150px",
                  height: "22px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              ></input>
            </Box>
          </Box>

          <Box sx={{ position: "relative", left: "-6%", marginBottom: "10px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ color: "white", marginBottom: "8px" }}>Modality</Box>
              <input
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "130px",
                  height: "22px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              ></input>
            </Box>
          </Box>

          <Box
            sx={{ position: "relative", left: "-5.5%", marginBottom: "10px" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ color: "white", marginBottom: "8px" }}>
                Accession #
              </Box>
              <input
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "130px",
                  height: "22px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              ></input>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
