// import React from 'react';
// import ShopIcon from '@mui/icons-material/Shop';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import { Button } from '@mui/material';
// function Contact(){
// }
// function Privacy(){
//     <h2 style={{alignItems:'center'}}>Terms and Conditions Applied</h2>
// }
// const Footer = () => {
//   return (
//     <footer style={footerStyle}>
//         <>
// <h4 style={{alignItems:'center'}}>Toll Free Number: <small>+144 8765 9807</small></h4>
//        <Button sx={{color:'green'}} onClick={Privacy}>Privacy Policy
//         </Button><br/>
//      <InstagramIcon></InstagramIcon>
//      <WhatsAppIcon></WhatsAppIcon>
//      <TwitterIcon></TwitterIcon>
//      <ShopIcon></ShopIcon>
//       <p>&copy; 2023 Your Grocery Store</p>
//       </>
//     </footer>
//   );
// };

// const footerStyle = {
//   backgroundColor: '#f4f4f4',  
//   padding: '10px',
//   textAlign: 'center',
//   position: 'fixed',
//   left: '0',
//   bottom: '0',
//   width: '100%',
// };

// export default Footer;

import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Box, Typography} from '@mui/material'

const Footer = () => {
  return (
   <>
   <Box sx={{textAlign:'center', bgcolor:'black', color:'white', p:2}}>
    <Box sx={{my: 3, "& svg":{fontSize:"60px",cursor:"pointer",mr:2},"& svg:hover":{color:'goldenrod', transform:'translateX(5px)', transition:'all 400ms'}}}>
        <InstagramIcon />
        <TwitterIcon />
        <GitHubIcon />
        <YouTubeIcon />
    </Box>
      <Typography variant='h6' sx={{"@media (max-width:800px)":{
        fontSize:"1rem",
      }}}>
         All Rights Reserved &copy; Techinfo YT
      </Typography>
   </Box>
   </>
  )
}

export default Footer;