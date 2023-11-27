// import React, { useState } from 'react';
// import axios from 'axios';
// import './Registration.css';
// import { useNavigate } from 'react-router-dom';
// const RegistrationForm = () => {
//   const [FormData, setFormData] = useState({
//     username: '',
//     password: '',
//     email:'',
//     conf:'',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...FormData,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3000/users', FormData);
//       console.log('User registered successfully:', response.data);
//     } catch (error) {
//       console.error('Error registering user:', error);
//     }
//   };
//   const navigate=useNavigate();
//   const handle=()=>{
//     navigate('/');
//   }
//   return (
//     <div style={{backgroundColor:'black'}}>
//     <div className='divtag'>
//     <h3 className='heading'>Register</h3>
//     <form onSubmit={handleFormSubmit} className='form'>
//       <label className='label'>
//         <input type="text" name="username" placeholder="Name" value={FormData.username} onChange={handleInputChange} className='input' />
//       </label>

//       <label className='label'>
//           <input type="email" placeholder='Email' name="email" value={FormData.email} onChange={handleInputChange} className='input2'/>
//       </label>

//       <label className='label'>
//         <input type="password" placeholder='Password' name="password" value={FormData.password} onChange={handleInputChange} className='input1'/>
//       </label>

//       <label className='label'>
//         <input type="password" placeholder='Confirm Password' name="conf" value={FormData.conf} onChange={handleInputChange} className='input3'/>
//       </label>
//       <br/>
//       <button type="submit" className='button' onClick={handle}>Register</button>
//     </form>
//     </div>
//     </div>
//   );
// };

// export default RegistrationForm;


import React, { useState } from 'react';
import axios from 'axios';


import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const defaultTheme=createTheme();
function Registration(){
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    email:'',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name+" "+value);
    setFormData({
     ...formData,
      [name]: value,
    });
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      await axios.post('http://localhost:3001/users', formData);
      setFormData({
        firstName: '',
        lastName: '',
        email:'',
        password: ''
      });

      alert('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user. Please try again.');
    }
  };
  return(
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        
        <Typography component="h1" variant="h4" sx={{color:'darkblue'}}>
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                value={formData.firstName}
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                autoComplete="family-name"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formData.email}
                autoComplete="email"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                value={formData.password}
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="By creating an account,you agree to our terms and privacy policy"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }} onClick={()=>{navigate("/")}}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Container>
  </ThemeProvider>
  )
      }
      export default Registration;