import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Fruits.css';

export default function Fruits() {
  return (
    <div style={{backgroundImage:`url(https://img.freepik.com/free-photo/abstract-blur-shopping-mall_1203-8823.jpg?w=1060&t=st=1700588007~exp=1700588607~hmac=234ef69fe7527101241ccde89628d55b5beca0255878c2fce6e90b95c3b6a581)`}}>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 2,
            pb: 0,
          }}
        >
          <Container maxWidth="lg">
             <div className='t'>
                 <h4  style={{color:'Red',fontWeight:'bold',fontStyle:'oblique',fontSize:'4rem'}}>Exotic Fruits<hr/></h4>
             </div>
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             
            </Stack>
          </Container>
        </Box>
      </main>
<div className='wrapper'>
        <Card1
        img="https://thumbs.dreamstime.com/z/three-strawberries-strawberry-leaf-white-background-114284301.jpg?w=768"
        title="Strawberry"
        value="100 g" 
        price="₹150"
        stock="15kgs"/>
        <Card1
        img="https://img.freepik.com/premium-photo/red-wine-grapes-background-dark-grapes-blue-wine-grapes-black-grape-raisins-seedless-grapes_431724-3287.jpg?w=1060"
        title="Black Grapes"
        value="100 g"
        price="₹90"
        stock="15kgs" />
        <Card1
        img="https://img.freepik.com/free-vector/realistic-fruits-composition-with-images-whole-sliced-apricot-fruit-blank-background-vector-illustration_1284-66028.jpg?w=826&t=st=1700584869~exp=1700585469~hmac=4977b39827c7d49145f732a1be73927bd6794101f5c98dcf894bfa761a68b911"
        title="Apricot"
        value="100 g" 
        price="₹160"
        stock="15kgs"/>
        <Card1
        img="https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg?w=900&t=st=1700585043~exp=1700585643~hmac=f3a44a576e6929a0e93ec7d259bca7e1ea0f78083859617bfd4bb92cf934cfd5"
        title="Banana"
        value="100 g" 
        price="₹1"
        stock="15kgs"/>
        <Card1
        img="https://img.freepik.com/premium-photo/melon-isolated-white_253984-4593.jpg?w=996"
        title="Canary Melon"
        value="1 g" 
        price="₹1"
        stock="15kgs"/>
        <Card1
        img="https://img.freepik.com/free-photo/delicious-bunch-grapes_1203-1891.jpg?w=360&t=st=1700585344~exp=1700585944~hmac=08bcfc9f75595d4f2210e9f00db0e4dcf229c52846ff6bf699ad2e21d7d5ca8e"
        title="Grapes"
        value="1 g"
        price="₹1"
        stock="15kgs" />
        <Card1
        img="https://img.freepik.com/free-photo/organic-grapefruit-isolated-whole-sliced_114579-85883.jpg?w=1060&t=st=1700585394~exp=1700585994~hmac=52ca1b7b03c1d57e399df535ee94759b508bff8546091e02bfedcfbeb4ad7f40"
        title="Blood Orange"
        value="1 g" 
        price="₹1"
        stock="15kgs"/>
        <Card1
        img="https://img.freepik.com/premium-photo/papaya-isolated-white-background-full-depth-field_253984-6532.jpg?w=1060"
        title="Papaya"
        value="1 g" 
        price="₹1"
        stock="15kgs"/>
        <Card1
        img="https://img.freepik.com/premium-photo/dragon-fruit-isolated-white-space_116067-372.jpg?w=826"
        title="Dragon Fruit"
        value="1 g" 
        price="₹1"
        stock="15kgs"/>
        <Card1
        img="https://img.freepik.com/premium-photo/indian-gooseberry-isolated-white-surface_55883-3345.jpg?w=996"
        title="Goose Berry"
        value="1 g"
        price="₹1"
        stock="15kgs" />
        <Card1
        img="https://img.freepik.com/premium-photo/ripe-green-pears-isolated-with-leaves-isolated_80510-586.jpg?w=1060"
        title="Pear"
        value="1 g"
        price="₹1"
        stock="15kgs" />
        <Card1
        img="https://img.freepik.com/premium-photo/fresh-red-apple-fruit-with-sliced-green-leaves-isolated-white-background_252965-9.jpg?w=1060"
        title="Apple"
        value="1 kg" 
        price="₹1"
        stock="15kgs"/>
        <Card1
        img="https://img.freepik.com/premium-photo/orange-fruit-with-leaves-white-wall_253984-3354.jpg?w=900"
        title="Orange"
        value="1 kg"
        price="₹1"
        stock="15kgs"/>
        <Card1
        img="https://img.freepik.com/premium-photo/pineapple-isolated-white-background_88281-232.jpg?w=360"
        title="Pine Apple"
        value="1 Pc"
        price="₹1"
       stock="15kgs"/>
        <Card1
        img="https://img.freepik.com/free-photo/agriculture-lychee-fruit-thailand_1150-13609.jpg?w=1060&t=st=1700585840~exp=1700586440~hmac=e20504cefc3510b65f6569bb693adeca71355ce1a98620035b9e8d8c56cb4f15"
        title="Lychee"
        value="1 kg"
        price="₹1"
        stock="15kgs"/>
        </div>
    </div>
  );
}


function Card1(props)
{
  const[count,setCount]=React.useState(0);

    return(
    <div className='card'>
    <Card sx={{maxWidth: 345,padding:1 }}>
  <CardMedia className="image"image={props.img}
    sx={{height: 250}}
  />
  <CardContent>
    <p className='title'>{props.title}</p>
    <p className='value'>Quantity:{props.value}</p>
    <p className='stock'>Stocks Available:{props.stock}</p>
    <p style={{fontStyle:'oblique'}}>MRP: {props.price}</p>
  </CardContent>
  <CardActions>
  <Button variant="outlined" className='cart' style={{backgroundColor:"green",color:"white"}}onClick={()=>{setCount(count+1)}}>Add to cart</Button><button style={{backgroundColor:'green',color:'white',padding:'3px',width:'30px',borderRadius:'5px'}}>{count}</button>

    </CardActions>
  </Card>
  </div>
    );
}