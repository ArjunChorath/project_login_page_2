import { Avatar, Box, Button, Grid, Paper, TextField } from '@mui/material'
import React from 'react'
import LoginIcon from "@mui/icons-material/Login";
import "./Login.css"

export const Login = () => {
    const paperStyle = {
      padding: "20px",
      height: "50vh",
      width: "280px",
      alignitems:'center',
      margin: "auto auto",
      backgroundColor: "#041c4a",
    };
    const avatarStyle={
        backgroundColor:"blue"
    }
  return (
    <Box bgcolor="#010916" height="100vh" width="100vw">
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LoginIcon />
            </Avatar>
            <h2>Login</h2>
          </Grid>
          <TextField
            variant="filled"
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
        </Paper>
      </Grid>
    </Box>
  );
}
