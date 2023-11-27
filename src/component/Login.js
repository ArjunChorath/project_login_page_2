import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
    const [userName,setUserName]=useState('');
    const [password, setPassword] = useState('');
    const [message,setMessage]=useState('')

    const handleLogin=()=>{
        if(!userName || !password)
        {
            setMessage('enter your credentials')
            
        }
        else{

            setMessage('login successfull')
        }
    setUserName('')
    setPassword('')

    }

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
            <form>
              <TextField
                onChange={(e) => setUserName(e.target.value)}
                variant="outlined"
                type="text"
                value={userName}
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
                onChange={(e) => setPassword(e.target.value)}
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
                onClick={handleLogin}
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
            </form>
            <p
              style={{
                color: message.includes("successfull") ? "green" : "red",
              }}
            >
              {message}
            </p>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
};
