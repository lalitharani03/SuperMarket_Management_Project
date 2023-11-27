import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Beverages.css';

export default function Meat() {
  return (
    <div style={{backgroundImage:`url(https://img.freepik.com/free-photo/abstract-blur-shopping-mall_1203-8823.jpg?w=1060&t=st=1700588007~exp=1700588607~hmac=234ef69fe7527101241ccde89628d55b5beca0255878c2fce6e90b95c3b6a581)`, backgroundAttachment:'fixed'}}>
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
                 <h4  style={{color:'black'}}>Frozen Meats<hr/></h4>
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
        img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQsnj-_X8zYtSv5GMxLQovqVWj_i6PAkr3W4ar1njfLLBbbYwCQA5xnUPbv5PR88-jl3nicwb4nmZRciQbTIVypsb_02rWzJCAZ5RIgDuAWYo6MSEzoG9Pwyw&usqp=CAE"
        title=" 
        Halal Chicken Meat --1Kg"
        price="₹248"
        stock="15 kgs"/>
        <Card1
        img="https://halal786.in/wp-content/uploads/2020/02/Mutton_Curry_Cut_1-halal768.in_.png"
        title="Mutton Curry Cut Halal – 1Kg"
        price="₹650"
        stock="12 kgs"/>
        <Card1
        img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQcP5iFnaoKAbIuvyNV4qpbT6ceyfig5AKcwYtVn-h2QCZDI7pTrZxOL3GpJAhqIPWOzRzswrXDKkSMST1hDQpVbGog5hWD&usqp=CAE"
        title=" 
        Buy Fresh Mutton Chops 1/2 kg"
        price="₹365"
        stock="10 kgs"/>
        <Card1
        img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR6DYjw3iqjtOhoGzUUHOD5bkh3NbJwQvqkvy1xqt7A-pcIO7CHbO1JnCwNLrpH4X4zxv6VqWc6LRIA18AuMvKBKE7GTmeIXw&usqp=CAE"
        title="
        Fresho Chicken - Curry Cut Without Skin 250 g" 
        price="₹75"
        stock="8 kgs"/>
        <Card1
        img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTU69f1ntgPLTTrkuxohiWAG9_lL58X7462cacxmDZ5_OmidTQecS-bHsN-hfJtx0J-ANXUnnb653BHbnsdSAHTL3ByAHcgtNFzszoyt0g&usqp=CAE"
        title=" 
        Fresh Live Rabbit Meat --1 KG " 
        price="₹1500"
        stock="5 kgs"/>
        <Card1
        img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRTtXK_ir3WKaKg2RDWe4cjwZCE1MuqxrizHlKB31d1p95WNiDwdE8mZOGIPuqr4DCxUnknh4Us3ZGjnr94xLZ7B1GsKpPu&usqp=CAE"
        title=" 
        Mutton Boneless Halal - 500 g"
        price="₹400"
        stock="10 kgs"/>
        <Card1
        img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQF9vjSyRCObd9ft-eiknQwVlSfr2DhF9a5OheSLXMjhVaEZ1-HXXQ08dFLhmLWXP-FOHpr3WYDNMC4vMZrftEsTBCRbF7MU9BIdURpkV18&usqp=CAE"
        title=" 
        HF RAW PORK MEAT WITH BONE 1KG"
        price="₹440"
        stock="15 kgs"/>
        <Card1
        img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvOYKJTdHkAdNErc1kJwkioeLyRIfF9DPd9zKOpaupK2gYXvMwBQ3GXL4L00nuAkHWi9T1YMMvg4YvUs5nGYyUDwkhppeywGAsLA4aDB6_3JeEQNyGrewub5VV&usqp=CAE"
        title=" 
        Fresh Goat Meat Mutton Paya"
        price="₹400"
        stock="5 kgs"/>
        <Card1
        img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTayNKwe3vvEqsQCC86Jz7pksR2akw6GSWIFvOqRhDSGUDu1jRX86F8Tubi0SFStqkg2hpAX7djrDX5Xh0-wc4pmoOGkx-I&usqp=CAE"
        title=" 
        Buy Goat Mutton Quality Meat Cuts 1kg " 
        price="₹660"
        stock="3 kgs"/>
        <Card1
        img="https://www.bluetribefoods.com/cdn/shop/products/Chickennuggetsfront1500x1500whitebackground_1024x1024@2x.jpg?v=1679398013"
        title="PLANT BASED CHICKEN NUGGETS" 
        price="₹265"
        stock="15 kgs"/>
        <Card1
        img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRhgGE9-12YGnMGPGWyRssKwsoD_5OHr7FQDB46Qol9RuuJR7dzpJlXe8jUa2OieWoSzf1JAGdqaLw8QyWgpgGoKpxK4bAu&usqp=CAE"
        title=" 
        Rabbit Meat - Curry Cut"
        price="₹736"
        stock="2 kgs"/>
        <Card1
        img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRjCJY8XqZY-BGoElulpAaZR2RFZ6wo5IzXjtmKm7KRv3rExN3N-xP_ab87URbm6gUcWo63FKWMJBa1OmtFxETJu6J8-XkVzg&usqp=CAE"
        title=" 
        Mutton Paya 4 Piece"
        price="₹399"
        stock="10 kgs"/>
        <Card1
        img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQNEezxqzi-PKSGdnGkO62jW1_vJ8IHm7w_5-Wu2BHGrZ-OnXiIdAa7v0QU1NzULRd6jg5BBdlK1bnvHPaRXalfjX8C9i8PVA&usqp=CAE"
        title=" 
        Mutton Chaap 500gm"
        price="₹509"
        stock="8 kgs"/>
        <Card1
        img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTwnTTojib40YM00f-uxbIAxJz0mzjEJHoBiJfbmM05iDVmRflht5yc2cypje262l61KB-ZJyTiPAO2xf5jEqJSuc-KGJFrMxeyhLPfIddSJPNtFwKJCavW&usqp=CAE"
        title=" 
        Full Mutton Raan"
        price="₹1750"
        stock="5 kgs"/>
        <Card1
        img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbapT8dfyAqLo63DYh3QBEIIIrxim-e9pdarQlJs37xMydrIEl52MrlumceyBFG6putc0EF8iQ5MEN8uet5uEkLYDdWfdxiBfqqhZnAByQxIMGCPVXHAwE5g&usqp=CAE"
        title=" 
        Frozen Mutton 1kg"
        price="₹525"
        stock="12 kgs"/>
        <Card1
        img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTL0zaSg_IH5oogh7fiAXUPUZ6sT_HeRjUfOlYieHoUOgAEPw6v2jZJJzLwYAVceYKyNdb8xVF4Zx6F8Pw7d7fVTna6ax6zmw&usqp=CAE"
        title=" 
        Fresh Chicken - Half Chicken Curry Cut (500g / 7 To 9 Pcs)"
        price="₹149"
        stock="15 kgs"/>
        <Card1
        img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTFeWHWrF5hYKC0aUOt_5-mK9AKX2-VZlukUHDMDTywCJ4885Hh0C0jqktCDWSmFXPkMEU7DoivNuVCouRt73rbEQPeHCkcbh2Ax_DItlk&usqp=CAE"
        title=" 
        Order Fresh Mutton Kheema Mutton mince 1kg"
        price="₹390"
        stock="12 kgs"/>
        <Card1
        img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTy5lrDc8LkmMSfIPB-1d0YgpBrJg8rWMkzG8JTlpXy0bRKFhZiIO3kI6Mw5k-fTOEMDFUgNCxut1Cw3lqEV9dI2_g_Lqsx&usqp=CAE"
        title=" 
        Bombay Duck Fish / Bombil - Whole Full piece"
        price="₹290"
        stock="14 kgs"/>
        <Card1
        img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ6tc_u3ib98EuJ7JPV56OSWohEqkWEklk5c1ROX7tzBhRnZvh6KBfprNok3lPQoHmpe9OohFDc5itBbq9XGGmLCyq3SfLW&usqp=CAE"
        title=" 
        Sole Fish / Manthal / Repti (Medium) - Whole Cleaned"
        price="₹237"
        stock="10 kgs"/>
        <Card1
        img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrl0aA09AXis_3yOSNLz931RfL3AnAYBZGMx724TiVbWHOr40R5-LuHSxwZH8kLEhYTQnanSRQ6vDSTgiHIVo-OtvBeuYAXEJWdxYQ5hJ_7KoqDooQEXXQ&usqp=CAE"
        title=" 
        Tilapia Fish 1Kg After Process (Approx 650-700 gms) "
        price="₹180"
        stock="10 kgs"/>
      
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
    {/* <p className='value'>Quantity:{props.value}</p> */}
    <p className='stock'>Stocks Available:{props.stock}</p>
    <p className='stock'>MRP:{props.price}</p>
  </CardContent>

  <CardActions>
  <Button variant="outlined" className='cart' style={{backgroundColor:"green",color:"white"}}onClick={()=>{setCount(count+1)}}>Add to cart</Button><button style={{backgroundColor:'green',color:'white',padding:'3px',width:'30px',borderRadius:'5px'}}>{count}</button>

    </CardActions>
    <CardActions >
    </CardActions>
  </Card>
  </div>
    );
}

