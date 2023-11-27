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
