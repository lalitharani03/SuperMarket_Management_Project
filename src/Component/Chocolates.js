import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Vegetables.css';

export default function Chocolates() {
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
                 <h4  style={{color:'Darkblue',fontSize:'4rem',fontWeight:'bolder'}}>Chocolates<hr/></h4>
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
        img="https://5.imimg.com/data5/TJ/EN/MY-8609988/nestle-kitkat.jpg"
        title="Kitkat"
        stock="20pcs"
        price="₹20"/>
        <Card1
        img="https://images.wsj.net/im-598730?width=700&height=495"
        title="Snickers"
        stock="20pcs"
        price="₹15"/>
        <Card1
        img="https://rukminim2.flixcart.com/image/850/1000/xif0q/chocolate/v/o/b/-original-imaghhvtvrmfxe3h.jpeg?q=90"
        title="DairyMilk"
        stock="20pcs"
        price="₹25"/>
        <Card1
        img="https://m.media-amazon.com/images/I/61SBlxloZYL.jpg"
        title="Crispello"
        stock="20pcs"
        price="₹28"/>
        <Card1
        img="https://rukminim1.flixcart.com/image/850/1000/kt64fbk0/chocolate/k/t/i/750-milk-chocolate-fruit-n-nut-dark-chocolate-raisin-n-almond-original-imag6kuut9zzzrd8.jpeg?q=90"
        title="Amul Chocolates"
        stock="20pcs"
        price="₹25"/>
        <Card1
        img="https://m.media-amazon.com/images/I/819KQPlk3xL.jpg"
        title=" Parle Melody Chocolates"
        stock="20pcs"
        price="₹50"/>
        <Card1
        img="https://m.media-amazon.com/images/I/51nF7-x2bPL.jpg"
        title="Mars Chocolates"
        stock="20pcs"
        price="₹75"/>
        <Card1
        img="https://m.media-amazon.com/images/I/81JugTbWdzL.jpg"
        title="Ferrero Rocher Chocolates"
        stock="20pcs"
        price="₹185"/>
        <Card1
        img="https://munchbag.in/cdn/shop/products/hersheys-milk-chocolate-bar-43g-229237_1000x1000_7cecec04-c9e3-46c8-aca6-5bbb6e08f3fd_510x@2x.progressive.png.jpg?v=1601968543"
        title="Hershey Milk Chocolates"
        stock="20pcs"
        price="₹60"/>
        <Card1
        img="https://m.media-amazon.com/images/I/51DrxJl8cpL._AC_UF894,1000_QL80_.jpg"
        title="Pacari Organic Chocolates"
        stock="20pcs"
        price="₹85"/>
        <Card1
        img="https://m.media-amazon.com/images/I/71FSx8-X2ZS.jpg"
        title="Lotte Choco Pie"
        stock="20pcs"
        price="₹100"/>
        <Card1
        img="https://www.tangyshop.com/cdn/shop/products/image_f34e74ec-1343-47da-8983-7a1b138de972.jpg?v=1682483148"
        title="Nestle Munch"
        stock="20pcs"
        price="₹15"/>
        <Card1
        img="https://images.freekaamaal.com/post_images/1660986939.webp"
        title="Parle Fine Belgian Chocolate"
        stock="20pcs"
        price="₹385"/>
        <Card1
        img="https://images.freekaamaal.com/post_images/1660986958.webp"
        title=" Parle Kismi"
        stock="20pcs"
        price="₹200"/>
        <Card1
        img="https://images.freekaamaal.com/post_images/1660987003.webp"
        title=" Mars bar"
        stock="20pcs"
        price="₹250"/>
        
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
    <p className='stock'>Stocks Available:{props.stock}</p>
    <p style={{fontStyle:'oblique'}}>MRP:{props.price}</p>
  </CardContent>
  <CardActions>
  <Button variant="outlined" className='cart' style={{backgroundColor:"green",color:"white"}}onClick={()=>{setCount(count+1)}}>Add to cart</Button><button style={{backgroundColor:'green',color:'white',padding:'3px',width:'30px',borderRadius:'5px'}}>{count}</button>

    </CardActions>
  </Card>
  </div>
    );
}