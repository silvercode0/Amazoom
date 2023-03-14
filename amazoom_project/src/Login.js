import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api-adapter";
import { toast } from "react-toastify";
import "./Login.css";


const Login = ({ setUser, setIsLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loginMessage, setLoginMessage] = useState("");
  
    async function handleLogin(e) {
      e.preventDefault();
      const { token, user } = await loginUser(
        username,
        password,
        setLoginMessage
      );
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
      localStorage.removeItem("username");
      localStorage.setItem("username", username);
      setUsername("");
      setPassword("");
      setUser(user);
      setIsLoggedIn(true);
  
      if (token) {
        toast.success("Login Successful");
        navigate("/Products");
      } else {
        toast.error("Login Failed");
        navigate("/Login");
      }
    }
  
    return (
      <div className="login-container">
        <h1 className="login-header">Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <input
            className="usernameLogin"
            type="text"
            required
            placeholder="username *"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
  
          <input
            className="passwordLogin"
            type="password"
            required
            placeholder="password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" type="submit">
            Login
          </button>
        </form>
  
        <div className="register-link-container">
          <h3>Not Yet a User? </h3>
          <Link to="/register" className="link">
            Register
          </Link>
          <div id="loginMessage">{loginMessage}</div>
        </div>
      </div>
    );
  };
  
export default Login;


// import React from 'react';
// import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// const Login=()=>{

//     const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
//     const avatarStyle={backgroundColor:'#1bbd7e'}
//     const btnstyle={margin:'8px 0'}
//     return(
//         <Grid>
//             <Paper elevation={10} style={paperStyle}>
//                 <Grid align='center'>
//                      <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
//                     <h2>Sign In</h2>
//                 </Grid>
//                 <TextField label='Username' placeholder='Enter username' fullWidth required/>
//                 <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
//                 <FormControlLabel
//                     control={
//                     <Checkbox
//                         name="checkedB"
//                         color="primary"
//                     />
//                     }
//                     label="Remember me"
//                  />
//                 <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
//                 <Typography > Do you have an account ?
//                      <Link href="http://localhost:3000/signup" >
//                         Sign Up 
//                 </Link>
//                 </Typography>
//             </Paper>
//         </Grid>
//     )
// }

// export default Login;