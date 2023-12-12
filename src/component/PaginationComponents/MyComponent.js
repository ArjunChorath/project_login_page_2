import React, { useState } from "react";
import Select from "react-select";
import { Box } from "@mui/material";

const MyComponent = () => {
  const options = [
    { value: "1", label: "25" },
    { value: "2", label: "50" },
    { value: "3", label: "100" },
  ];

  const [selectedOption, setSelectedOption] = useState({value:'2',label:'50'});

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "2px",
      backgroundColor:"black",
      border: state.isFocused ? "1px solid white" : "1px solid aqua",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      padding: "5px",
    }),

    option: (provided, state) => ({
      ...provided,
      minHeight: "5px",
      color: "white",
      backgroundColor: state.isSelected ? "blue" : "black",
    }),
   
  };
 
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10vh",
        width: "100vw",
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          height: "10vh",
          width: "65vw",
          display: "flex",
          alignItems:"center",
          justifyContent:"space-between",
          backgroundColor: "black",
        }}
      >
        <Box
          className="col-5"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Select
            style={{ innerWidth: "5px" }}
            options={options}
            value={selectedOption}
            onChange={handleChange}
            styles={customStyles}
          />
          <h5 style={{ margin: "8px", color: "rgb(248, 248, 248)" }}>
            Results per page
          </h5>
        </Box>
        <Box
          className="col-5"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h5 style={{ color: "white", margin: "2px" }}>Page 1</h5>
          <Box style={{ display: "flex", height: "80%" }}>
            <button
              type="button"
              style={{
                borderRadius: "4px 0px 0px 4px",
                borderWidth: "2px",

                backgroundColor: "black",
                borderColor: "aqua",
                color: "white",
              }}
            >
              &lt;&lt;
            </button>
            <button
              type="button"
              style={{
                borderRadius: "0px 0px 0px 0px",
                borderLeft: "0px",
                borderRight: "0px",

                borderColor: "aqua",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {"< Back"}
            </button>
            <button
              type="button"
              style={{
                borderRadius: "0px 4px 4px 0px",

                borderColor: "aqua",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Next &gt;
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyComponent;
