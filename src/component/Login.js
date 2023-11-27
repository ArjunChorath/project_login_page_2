import { Avatar, Box, Button, Grid, Paper, TextField, withTheme } from "@mui/material";
import React from "react";
import "./Login.css";

export const Login = () => {
  const paperStyle = {
    padding: "20px",
    height: "40vh",
    width: "280px",
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
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <br />
            <h2>Login</h2>
          </Grid>
          <Grid align="center">
            <TextField
              variant="outlined"
              inputProps={{
                style: { background: "white", borderRadius: "10px" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              placeholder="username"
              size="small"
              fullWidth
              required
            ></TextField>
            <br />
            <br />
            <TextField
              variant="outlined"
              inputProps={{
                style: { background: "white", borderRadius: "10px" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              placeholder="Password"
              type="password"
              size="small"
              fullWidth
              required
            ></TextField>
            <br />
            <br />
            <Button
              variant="contained"
              margin="25px"
              style={{
                color: "black",
                background: "white",
                textTransform: "capitalize",
              }}
            >
              Login
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
};
