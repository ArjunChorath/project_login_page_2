import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const parameters = new URLSearchParams();
  parameters.append("username", username);
  parameters.append("password", password);
  parameters.append("grant_type", "password");
  parameters.append("client_id", "dicom-authentication");
  parameters.append("client_secret", "3vxuBRaMIz8FDly0vZi6tu5gWEtp9fqa");

  const handleSubmit = async (e) => {
    e.preventDefault();
     if (!username ) {
      setMessage("enter your username ");
    } else if(!password){
      setMessage('enter your password')
    }
   else{
    try {
      const response = await axios
        .post(
          "http://10.30.2.208:8080/realms/dicom-realm/protocol/openid-connect/token",
          parameters
        )
        .then((data) => data)
        .then((dataKey) => dataKey.data.access_token);
      console.log(response); 
      return response; 
      
    } catch (error) {
      console.error("error durinng login", error.response.data);
       }
    ;}
  };
  const paperStyle = {
    borderRadius: "7px",
    padding: "35px",
    height: "330px",
    width: "330px",
    alignitems: "center",
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
      <Grid>
        <Paper elevation={0} style={paperStyle}>
          <Grid
            align="center"
            sx={{
              height: "7.5rem",
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

          <Box>
            <Grid align="center">
              <form>
                <TextField
                  onChange={(e) => setUserName(e.target.value.trim())}
                  variant="outlined"
                  type="text"
                  value={username}
                  inputProps={{
                    style: {
                      background: "white",
                      borderRadius: "10px",
                      color: "#000000",
                    },
                    placeholder: "username",
                  }}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  size="small"
                  fullWidth
                  required
                ></TextField>
                <br />
                <br />
                <TextField
                  onChange={(e) => setPassword(e.target.value.trim())}
                  variant="outlined"
                  inputProps={{
                    style: { background: "white", borderRadius: "10px" },
                  }}
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  placeholder="Password"
                  type="password"
                  value={password}
                  size="small"
                  fullWidth
                  required
                ></TextField>
                <br />
                <br />
                <Button
                  onClick={handleSubmit}
                  margin="25px"
                  style={{
                    color: "black",
                    background: "white",
                    textTransform: "capitalize",
                  }}
                >
                  Login
                </Button>
              </form>
              <p
                style={{
                  color: message.includes("successfull") ? "green" : "red",
                }}
              >
                {message}
              </p>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Box>
  );
};
