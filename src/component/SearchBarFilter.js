import { Box } from '@mui/material'
import React, { useState } from 'react'

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
     
      backgroundColor: "black",
      color:'white',
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      
    },
  },
 
};

const names = [
  "AR",
  "ASMT",
  "AU",
  "BDUS",
  "BI",
  "BMD",
  "CR",
  "CT",
  "DG",
  "DOC",
];


export const SearchBarFilter = () => {
    const [isClickedPatient,setIsClickedPatient]=useState(false);
    const [isClickedMRN, setIsClickedMRN] = useState(false);
    const [isClickedStartStudyDate,setIsClickedStartStudyDate]=useState(false);
    const [isClickedEndStudyDate, setIsClickedEndtStudyDate]=useState(false);
    const [isClickedDescription, setIsClickedDescription] = useState(false);
    const [isClickedModality, setIsClickedModality] = useState(false);
    const [modalityType, setModalityType] = useState([]);
    const [isClickedAccession, setIsClickedAccession] = useState(false);
    
    

   

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setModalityType(
      
      typeof value === "string" ? value.split(",") : value
    );
  };
   

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
                  outline: "none",
                  borderRadius: "5px",
                  border: `1px solid ${isClickedPatient ? "cyan" : "indigo"}`,
                }}
                onFocus={() => setIsClickedPatient(true)}
                onBlur={() => setIsClickedPatient(false)}
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
                  outline: "none",
                  border: `1px solid ${isClickedMRN ? "cyan" : "indigo"}`,
                }}
                onFocus={() => setIsClickedMRN(true)}
                onBlur={() => setIsClickedMRN(false)}
              ></input>
            </Box>
          </Box>

          <Box
            sx={{ position: "relative", left: "-04.6%", marginBottom: "10px" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ color: "white", marginBottom: "8px" }}>Study Date</Box>
              <input
                type="date"
               
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "100px",
                  height: "25px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  outline: "none",
                  border: `1px solid ${
                    isClickedStartStudyDate ? "cyan" : "indigo"
                  }`,
                }}
                onFocus={() => setIsClickedStartStudyDate(true)}
                onBlur={() => setIsClickedStartStudyDate(false)}
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

          <Box
            sx={{ position: "relative", left: "-6.4%", marginBottom: "10px" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ color: "white" }}> </Box>            
               
              <input
                type="date"
               
              
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "100px",
                  height: "25px",
                  marginTop: "19px",
                  borderRadius: "5px",
                  outline: "none",
                  border: `1px solid ${
                    isClickedEndStudyDate ? "cyan" : "indigo"
                  }`,
                }}
                onFocus={() => setIsClickedEndtStudyDate(true)}
                onBlur={() => setIsClickedEndtStudyDate(false)}
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
                  outline: "none",
                  border: `1px solid ${
                    isClickedDescription ? "cyan" : "indigo"
                  }`,
                }}
                onFocus={() => setIsClickedDescription(true)}
                onBlur={() => setIsClickedDescription(false)}
              ></input>
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              left: "-6.5%",
              marginBottom: "10px",
              bottom: "8px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ color: "white", marginBottom: "8px" }}>Modality</Box>

              <FormControl sx={{ m: 0, width: 130, height: "22px" }}>
                <InputLabel id="demo-multiple-checkbox-label"></InputLabel>
                <Select
                  style={{
                    height: "27px",
                    width: "130px",
                    backgroundColor: "black",
                    color: "white",
                    outline: "none",
                    border: `1px solid ${
                      isClickedModality ? "cyan" : "indigo"
                    }`,
                  }}
                  onFocus={() => setIsClickedModality(true)}
                  onBlur={() => setIsClickedModality(false)}
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={modalityType}
                  onChange={handleChange}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox
                        checked={modalityType.indexOf(name) > -1}
                        style={{}}
                      />
                      <ListItemText
                        primary={name}
                        style={{ fontSize: "1px" }}
                      />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
                  outline: "none",
                  border: `1px solid ${isClickedAccession ? "cyan" : "indigo"}`,
                }}
                onFocus={() => setIsClickedAccession(true)}
                onBlur={() => setIsClickedAccession(false)}
              ></input>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ color: "white", marginBottom: "50px" }}>Instances</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
