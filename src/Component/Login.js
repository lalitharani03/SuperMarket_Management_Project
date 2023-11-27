//  import {Link, useNavigate} from 'react-router-dom';
//  import { TextField,Button,Box } from '@mui/material';
// import Form from './Registration';
// import { Route,Routes} from 'react-router-dom';
// import './Login.css';
// import axios from 'axios';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import React,{useEffect,useState} from 'react';
// const Login=()=>{
//   const[email,setEmail]=useState("");
//   const[password,setpassword]=useState("");
//   const navigate=useNavigate();
//   const [user,setUser] = useState({
//     "email" : "",
//     "password" : ""
//   });
//   const [success,setSuccess] = useState(true);
//   const [apiData,setApiData] = useState([]);
//   const addUser=(event)=>{
//     setSuccess(true);
//     setUser({...user,[event.target.name]:event.target.value})
//   }
//   useEffect(()=>{
//     const apiURL = 'http://localhost:3000/users';
//     axios.get(apiURL)
//             .then(response =>{
//                 setApiData(response.data);               
                      
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//   })
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // console.log({
//     //   email: data.get('email'),
//     //   password: data.get('password'),
//     // });
    
      
//     const valid = apiData.some(item => item.email === user.email && item.password === user.password);   
//     console.log(valid);
//     if(valid)
//     {
//       setSuccess(true);
//       console.log("success");
//       navigate('/');
//     }   
//     else
//     {
//       console.log("failed");
//       setSuccess(false);
//     }
    

//   }
// const handleLogin = () => {
//   console.log(`Logging in with email: ${email} and password: ${password}`);
//   navigate("/");
// };

//   return(
//     <div style={{backgroundImage:`url(https://img.freepik.com/free-photo/supermarket-banner-concept-with-ingredients_23-2149421148.jpg?w=1380&t=st=1700633399~exp=1700633999~hmac=722c3b37dbe1e49a04c4176c14bcefb84de4fcd99528d512d3bd7dc8eabac24a)`,minHeight:'100vh', display:'flex',alignItems:'center',justifyContent:'center'}}>
//     <Box display={"flex"} flexDirection={"column"} maxWidth={400} alignItems={"center"} margin={"auto"} padding={5}  borderRadius={5} boxShadow={'5px 5px 10px #ccc'} justifyContent={'center'} backgroundColor={'white'}>
//             <AccountCircleOutlinedIcon className='icon' style={{fontSize:'80px'}}></AccountCircleOutlinedIcon>
//              <h1 style={{color:'darkblue'}}>Sign In</h1>
//               <TextField required margin="normal" id="email" label="Email" variant="outlined" sx={{width:300}}/>
//               <TextField required margin="normal" id="password" label="Password" variant="outlined" sx={{width:300}}/><br/>
//               <Button variant="outlined" sx={{width:150,color:'darkblue',backgroundColor:'lightblue'}} onClick={handleLogin}>Sign In</Button><br/>
//               <Link to='/'>Forgot Password?</Link>
//               <small style={{marginTop:'10px'}}>"Don't have an account?"<Link to="/register">Sign Up</Link>
//               <Routes>
//                 <Route exact path='/register' element={<Form/>}/>
//               </Routes>
//               </small>
//          </Box>
//          </div>
//      )
// }
// export default Login;


// import React from 'react'
// import TextField from '@mui/material/TextField';
// import { Link ,useNavigate} from "react-router-dom";
// import Box from '@mui/material/Box';
// import { useState , useEffect} from 'react';
// import axios from 'axios';
// import Button from '@mui/material/Button';

// const Login = () => {
//   const navigate = useNavigate();
//   const [user,setUser] = useState({
//     "email" : "",
//     "password" : ""
//   });
//   const [success,setSuccess] = useState(true);
//   const [apiData,setApiData] = useState([]);
//   const addUser=(event)=>{
//     setSuccess(true);
//     setUser({...user,[event.target.name]:event.target.value})
//   }
//   useEffect(()=>{
//     const apiURL = 'http://localhost:3000/users';
//     axios.get(apiURL)
//             .then(response =>{
//                 setApiData(response.data);               
                      
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//   })
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // console.log({
//     //   email: data.get('email'),
//     //   password: data.get('password'),
//     // });
    
      
//     const valid = apiData.some(item => item.email === user.email && item.password === user.password);   
//     console.log(valid);
//     if(valid)
//     {
//       setSuccess(true);
//       console.log("success");
//       navigate('/');
//     }   
//     else
//     {
//       console.log("failed");
//       setSuccess(false);
//     }
    

//   }
//   return (
//     <div className="app-container">
//       <div className="half-page" id='image'>
//         ;
//       </div>
//       <div className="half-page">
//     <center>
//       <div className='page'>
//           <h2 style={{left:'200px'}} >LOGIN HERE</h2>
//           <TextField id="standard-basic" label="Email id" variant="standard" />
//         <br></br>
//         <br></br>
//         <TextField id="standard-basic" label="Password" variant="standard" />
//         <br></br>
//         <br></br>
//         <Button variant="contained"
//          style={{backgroundColor:'blue' ,color:'white' ,textDecorationStyle:'wavy'}} onClick={handleSubmit}><a>Login</a></Button>
//         <br></br>
//         <br></br>
//         <br></br>
//         <Box  >
//         <Link to="/register">Create account</Link>
//         </Box>
//         </div>
//         </center>
//         </div>
//     </div>
//   )
// }

//  export default Login;


import {React,useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const defaultTheme = createTheme();

function Login(){
  const navigate = useNavigate();
  const[creds,setCreds]=useState([]);
  const [formData,setFormData]=useState(
    {
       email:'',
       password:''
    }
  );

  useEffect(()=>{
    const fetchedData= ()=>{
  axios.get("http://localhost:3002/user")
        .then(response=>{setCreds(response.data);
        })
        .catch(error=>{
          console.log("error:"+error);
        })
    }
   fetchedData();
  },[]);

  const handleSubmit=()=>{
    const isAuthenticated=creds.some((cred)=>
      (cred['email'] === formData.email && cred['password'] === formData.password)
    )
   if(isAuthenticated){
    alert("Successfully Logedin");
    // navigate('/');
   }
   else{
    alert("Invalid email/password");
   }
  }
const handleChange=(e)=>{
  const {name,value}=e.target;
  setFormData({
    ...formData,
    [name]:value,
  })
}

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/free-photo/shopping-cart-full-products-inside-supermarket_123827-28165.jpg?t=st=1701028788~exp=1701032388~hmac=fa3325ec50ca09ac2ea13b65ceaaebe7d986c598feba11b747c130b21171e478&w=900)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography component="h1" variant="h3" sx={{color:'darkblue'}}>
            <AccountCircleOutlinedIcon className='icon' style={{fontSize:'60px',margin:'auto'}}></AccountCircleOutlinedIcon>
            <br/>
              Sign in
            </Typography>
            <Box component="form"  onSubmit={handleSubmit} noValidate  sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formData.email}
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={formData.password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }} onClick={()=>navigate("/")}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link  variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link  onClick={() => navigate("/register")} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
      }
      export default Login;