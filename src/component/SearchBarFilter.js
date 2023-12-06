import { Box } from '@mui/material'
import React, { useState } from 'react'

export const SearchBarFilter = () => {
    const [isClickedPatient,setIsClickedPatient]=useState(false);
    const [isClickedMRN, setIsClickedMRN] = useState(false);
    const [isClickedStartStudyDate,setIsClickedStartStudyDate]=useState(false);
    const [isClickedEndStudyDate, setIsClickedEndtStudyDate]=useState(false);
    const [isClickedDescription, setIsClickedDescription] = useState(false);
    const [isClickedModality, setIsClickedModality] = useState(false);
    const [isClickedAccession, setIsClickedAccession] = useState(false);
    const [selectedOptions,setSelectedOptions]=useState([]);

    const options = [
      "option1",
      "option2",
      "option3",
      "option3",
      "option3",
      "option3",
      "option3",
      "option3",
      "option3",
      "option3",
      "option3",
      "option3",
      "option3",
      "option3",
      "option3",
    ];

    const handleChange=(event)=>{
      setSelectedOptions(event.target.value)

    }
   

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
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "100px",
                  height: "22px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  outline: "none",
                  border: `1px solid ${
                    isClickedStartStudyDate ? "cyan" : "indigo"
                  }`,
                }}
                onFocus={() => setIsClickedStartStudyDate(true)}
                onBlur={() => setIsClickedStartStudyDate(false)}
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

          <Box sx={{ position: "relative", left: "-6%", marginBottom: "10px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ color: "white", marginBottom: "8px" }}>Modality</Box>
              <select
              value={selectedOptions}
              onChange={handleChange}
              
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "130px",
                  height: "22px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                 
                  overflow:'auto',
                  outline: "none",
                  border: `1px solid ${isClickedModality ? "cyan" : "indigo"}`,
                }}
                onFocus={() => setIsClickedModality(true)}
                onBlur={() => setIsClickedModality(false)}
              >
                <option value="" disabled></option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
              </select>
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
                  border: `1px solid ${
                    isClickedAccession ? "cyan" : "indigo"
                  }`,
                }}
                onFocus={() => setIsClickedAccession(true)}
                onBlur={() => setIsClickedAccession(false)}
              ></input>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
