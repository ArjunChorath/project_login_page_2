import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
    setIsButtonDisabled(!event.target.value || !password);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsButtonDisabled(!userName || !event.target.value);
  };

  const handleUserNameFocus = () => {
    setIsUsernameFocused(true);
    setIsPasswordFocused(false)
  };

  const handlePasswordFocus=()=>{
    setIsPasswordFocused(true)
    setIsUsernameFocused(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleLogin = () => {};

  const paperStyle = {
    borderRadius: "7px",
    padding: "35px",
    height: "330px",
    width: "330px",
    alignitems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection:"column",
    margin: "auto auto",
    backgroundColor: "#071835",
  };

  return (
    <Box
      bgcolor="#010916"
      height="100vh"
      width="100vw"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Paper style={paperStyle}>
          <Grid
            sx={{
              height: "5rem",
              width: "20rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <br />
            <h2
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: "29px",
                lineHeight: "2.0",
              }}
            >
              Login
            </h2>
          </Grid>

          <Box
            sx={{
              height: "25vh",
              width: "22vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid align="center">
              <form onSubmit={handleSubmit}>
                <TextField
                  onChange={handleUsernameChange}
                  onFocus={handleUserNameFocus}
                  type="text"
                  value={userName}
                  inputProps={{
                    placeholder: "username",
                    style: {
                      background: "white",
                      height: "4px",
                      borderRadius: "5px",
                      color: "black",
                      width: "20vw",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  sx={{ height: "40px" }}
                ></TextField>
                {isUsernameFocused && (
                  <p style={{ color: "red" }}>Enter your username</p>
                )}
                <br />
                <br />
                <TextField
                  onChange={handlePasswordChange}
                  onFocus={handlePasswordFocus}
                  variant="outlined"
                  inputProps={{
                    placeholder: "Password",
                    style: {
                      background: "white",
                      height: "4px",
                      borderRadius: "5px",
                      color: "black",
                      width: "20vw",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  type="password"
                  value={password}
                ></TextField>
                {isPasswordFocused && (
                  <p style={{ color: "red" }}>Enter your password</p>
                )}
                <br />
                <br />
                <button
                  onClick={handleLogin}
                  disabled={isButtonDisabled}
                  variant="contained"
                  margin="25px"
                  style={{
                    color: "black",
                    background: isButtonDisabled ? "#9292a4" : "white",
                    textTransform: "capitalize",
                    width: "4rem",
                    height: "3.3rem",
                    fontSize: "10px",

                    // bgcolor:"grey"
                  }}
                >
                  Login
                </button>
              </form>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Box>
  );
};
