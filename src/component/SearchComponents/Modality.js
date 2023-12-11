import { Box } from "@mui/material";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { KeyboardArrowUp } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      backgroundColor: "#272829",
      color: "white",
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      minWidth: 50,
      fontSize: 10,
      border: "1px solid blue",
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
  "RTRECORD",
];

export const Modality = () => {
     const [isClickedModality, setIsClickedModality] = useState(false);
     const [modalityType, setModalityType] = useState([]);
      const [upArrowFill, setUpArrowFill] = useState("blue");
      const [downArrowFill, setDownArrowFill] = useState("blue");

      const upClicked = () => {
        setUpArrowFill("rgb(0,195,255)");
        setDownArrowFill("#090939");
      };
      const downClicked = () => {
        setUpArrowFill("#090939");
        setDownArrowFill("rgb(0,195,255)");
      };
     
      const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setModalityType(typeof value === "string" ? value.split(",") : value);
      };
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          left: "4%",
          marginBottom: "10px",
          bottom: "8px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ color: "white", marginBottom: "1px", height: "1px" }}>
            Modality
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <KeyboardArrowUp
              fontSize="xs"
              onClick={upClicked}
              sx={{ color: upArrowFill, paddingLeft: "12px" }}
            ></KeyboardArrowUp>
            <KeyboardArrowDown
              fontSize="xs"
              onClick={downClicked}
              sx={{
                mt: "-8px",
                mb: "2px",
                color: downArrowFill,
                paddingLeft: "12px",
              }}
            ></KeyboardArrowDown>
          </Box>

          <FormControl sx={{ m: 0, width: 130, height: "22px" }}>
            <InputLabel id="demo-multiple-checkbox-label"></InputLabel>
            <Select
              style={{
                height: "31px",
                width: "130px",
                backgroundColor: "rgba(0, 0, 0, 0.87)",
                color: "white",
                outline: "none",
                border: `1px solid ${isClickedModality ? "cyan" : "indigo"}`,
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
                  <ListItemText primary={name} sx={{ fontSize: "10px" }} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
};
