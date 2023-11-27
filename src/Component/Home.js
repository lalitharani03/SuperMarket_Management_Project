import Navbar from './Navbar';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './Home.css';
import { Slider } from './Slider';
import './Slide.css';
export default function Home(){
  return(
    <>
        <Navbar/>   
        <Slider/>
         <div className='wrapper'>
        <Card1
        img="https://img.freepik.com/free-photo/fresh-organic-healthy-yellow-bell-pepper-black-generative-ai_188544-8675.jpg?t=st=1700668233~exp=1700671833~hmac=aff518f87dcf0c0ac685419335e351e07fc3a82a4d65ec0146ab96adabf70786&w=900"
        title="Fresh Vegetables"
        handleLogin="/Vegetables"/>
        <Card1
        img="https://img.freepik.com/free-photo/fresh-fruit-salad-healthy-gourmet-delight-generated-by-ai_188544-22495.jpg?t=st=1700668432~exp=1700672032~hmac=9a86bc40e9c561c865552d31d3ac8ec6dcf3e92bfdf4c952989abeac8ae6ca3b&w=1060"
        title="Fresh Farm Fruits"
        handleLogin="/Fruits"/>
        <Card1
        img="https://img.freepik.com/free-photo/elegant-kitchen-utensils-set-harmonious-fusion-practicality-style-meet-your-culinary-requirements_157027-2322.jpg?t=st=1700668564~exp=1700672164~hmac=c543f6edeaf8c6a4451f7aa51334fcd539633c27b923a667053884eeb39ba816&w=1380"
        title="Kitchen Accessories"
        handleLogin="/Kitchen"/>
        <Card1
        img="https://img.freepik.com/free-vector/modern-blue-professional-business-stationery-set_1017-15301.jpg?w=900&t=st=1700668955~exp=1700669555~hmac=9846d88d1fa4458a47b017532d0824f0caf5e275986b0b02a36704d749ca8a6e"
        title="Stationery Items"
        handleLogin="/Stationery"/>
        <Card1
        img="https://img.freepik.com/free-photo/close-up-japanese-street-food_23-2149287802.jpg?w=996&t=st=1700670200~exp=1700670800~hmac=78d3d66740fc1f6bb1e3e84179c4659ed607757d6dc80ce17276c3b840e3c115"
        title="Frozen Meats"
        handleLogin="/Meat"/>
        <Card1
        img="https://img.freepik.com/free-photo/front-view-chocolate-with-cocoa-powder_23-2148549909.jpg?size=626&ext=jpg&uid=R127822682&ga=GA1.1.244610712.1700506720&semt=sph"
        title="Chocolates"
        handleLogin="/chocolates"/>
        <Card1
        img="https://img.freepik.com/free-photo/ice-tea-with-mint_144627-41802.jpg?size=626&ext=jpg&uid=R127822682&ga=GA1.1.244610712.1700506720&semt=ais"
        title="Soft Drinks"
        handleLogin="/Juice"/>
        <Card1
        img="https://img.freepik.com/free-photo/coffee-preparation-concept-still-life_23-2150354593.jpg?w=360&t=st=1701014355~exp=1701014955~hmac=53780464d098008593d176b9b042a32684c48567e540c299f096f7b2ac505814"
        title="Beverages"
        handleLogin="/Mixtures"/>
        </div> 
        </>
    )
  }
  function Card1(props){
     const navigate=useNavigate();
       return(
      <>
    <div className='card'>
        <Card sx={{maxWidth: 300,padding:5}}>
      <CardMedia className="image"image={props.img}
        sx={{height: 250 }}
      />
      <CardContent>
        <Typography sx={{fontWeight:'bold'}} className='title' gutterBottom variant="h5" component="div">{props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='btn'sx={{color:'white',backgroundColor:'black'}} size="normal" onClick={()=>{navigate(props.handleLogin)}} >buy now</Button>
        
      </CardActions>
       
    </Card>
     </div>
     </>
    )
    }