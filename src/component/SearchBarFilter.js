import { Box } from "@mui/material";
import React, { useState } from "react";


import { PatientName } from "./SearchComponents/PatientName";
import {Mrn} from "./SearchComponents/Mrn.js"
import { StudyDate } from "./SearchComponents/StudyDate.js";
import { Description } from './SearchComponents/Description.js'
import { Modality } from "./SearchComponents/Modality.js";
import { Accession } from "./SearchComponents/Accession.js";


export const SearchBarFilter = () => {
 
 
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
         <PatientName></PatientName>
         <Mrn></Mrn>
        <StudyDate/>
        <Description/>
        <Modality/>
        <Accession/>
 <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ color: "white", marginBottom: "50px" }}>Instances</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
