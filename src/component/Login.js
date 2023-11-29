import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";


export const Login = () => {
    const [userName,setUserName]=useState('');
    const [password, setPassword] = useState('');
    const [message,setMessage]=useState('')

    const handleSubmit=async(e)=>{
    e.preventDefault();

    

    }

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
    borderRadius:'7px',
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

           <Box >
            <Grid align="center">
              <form onSubmit={handleSubmit}>
                <TextField
                  onChange={(e) => setUserName(e.target.value)}
                  variant="outlined"
                  type="text"
                  value={userName}
                  inputProps={{
                    style: { background: "white", borderRadius: "10px",color:"#000000" },
                     placeholder:"username"
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
          </Box>
        </Paper>
      </Grid>
    </Box>
  );
};
