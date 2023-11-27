import { Avatar, Box, Button, Grid, Paper, TextField, withTheme } from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import "./Login.css";

export const Login = () => {
  const paperStyle = {
    padding: "20px",
    height: "50vh",
    width: "280px",
    alignitems: "center",
    margin: "auto auto",
    backgroundColor: "#071835",
  };
  const avatarStyle = {
    backgroundColor: "#12127b00",
  };
  return (
    <Box
      bgcolor="#010916"
      height="100vh"
      width="100vw"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LoginIcon />
            </Avatar>
            <h2>Login</h2>
          </Grid>
          <Grid align="center">
            <TextField
              variant="filled"
              inputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              label="Username"
              placeholder="Username"
              fullWidth
              required
            ></TextField>
            <br />
            <br />
            <TextField
              variant="filled"
              label="Password"
              inputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              placeholder="Password"
              type="password"
              fullWidth
              required
            ></TextField>
            <br />
            <br />
            <Button variant="contained" margin="25px" fullWidth required>
              Login{" "}
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
};
