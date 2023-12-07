import { Box } from "@mui/material";
import React,{ useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.module.css'




export const DateRange = () => {
  const [startDate,setStartDate]=useState(null);
  const [endDate,setEndDate]=useState(null);


const handleStartDateChange=(date)=>{

  setStartDate(date);
}

const handleEndDateChange=(date)=>{
  setEndDate(date);
}
  return (
    <Box
      sx={{
        width: "20vw",
        heigth: "30vh",
        bgcolor: "#090c29",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
       
      }}
    >
     <input type="date"
     value='21-10-199'
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="start date"
        style={{width:'105px',backgroundColor:'black',color:'white',value:'12-10-2004'}}
        
      ></input>

      <input type="date"
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="end date"
      ></input>
    </Box>
  );
}
