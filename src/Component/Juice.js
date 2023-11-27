import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Juice.css';

export default function Juice() {
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
                 <h4  style={{color:'black'}}>Juice<hr/></h4>
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
        img="https://ik.imagekit.io/dunzo/60020763f09e11ed9c72fe2a2cf2e90e_VARIANT_5bdc71036cb2d102bff80754_1.jpg"
        title="Maaza Mango Drink 600ml (Pack of 3) Unique wow"
        price="₹126"
        value="1l"
        stock="20 bottles"/>
        <Card1
        img="https://4.imimg.com/data4/SI/DF/MY-7535179/pantry-products-500x500.jpg"
        title="Tropicana Extraordinary Fantastic just looking like a wow"
        price="₹10"
        value="1bottle"
        stock="20 bottles"/>
        <Card1
        img="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/images/products/sliding_image/536415a.jpg"
        title="Real Fruit Juice - Cranberry Price in India wow"
        price="₹15"
        value="1bottle"
        stock="20 bottles"/>
        <Card1
        img="https://rukminim2.flixcart.com/image/850/1000/xif0q/drinks-juice/x/h/u/1-mixed-fruit-juice-goodness-of-fiber-tetrapack-2-b-natural-original-imagnf2bbabzvgrr.jpeg?q=90"
        title="B Natural – 100% Indian Fruit 0% Concentrate wow"
        price="₹40"
        value="1bottle"
        stock="20 bottles"/>
        <Card1
        img="https://images-cdn.ubuy.co.in/634f945bbdf73613772b8467-fresca-original-citrus-sparkling.jpg"
        title="Fresca, Original Citrus, Sparkling Flavored Soda India wow"
        price="₹25"
        value="1bottle"
        stock="20 bottles"/>
        <Card1
        img="https://m.media-amazon.com/images/I/41v8dr8vG6L._AC_UF1000,1000_QL80_.jpg"
        title="Paper Boat Juice (Mixed Pack), 3x250ml freshy juice No Added Sugar"
        price="₹25"
        value="1bottle"
        stock="20 bottles"/>
        <Card1
        img="https://4.imimg.com/data4/PU/XX/MY-1850306/minute-maid-pulpy-orange.jpg"
        title="Premium Original Orange Juice - OJ Products "
        price="₹25"
        value="1bottle"
        stock="20 bottles"/>
        <Card1
        img="https://m.media-amazon.com/images/I/51CjX3sNwtL.jpg"
        title="100% Natural Mango And Sweet Taste Delicious  "
        price="₹45"
        value="1bottle"
        stock="20 bottles"/>
        <Card1
        img="https://m.media-amazon.com/images/I/511pRA3cHiL.jpg"
        title="Appy Fizz Pet Bottle, 1000 ml : KKL.in: Grocery "
        price="₹35"
        value="1bottle"
        stock="20 bottles"/>
        <Card1
        img="https://lh3.googleusercontent.com/6O-wgwbfQM-KZkwYZNn9A7l5wQTAAX58O0zqjhvqJNUn67UfViSA8rpr27PaC7i2zvuld-X6gDQlU3Qsbyrm9eH1_aKvZLsO3Nip58NP"
        title="Lemony Crisp Flavour Cool Refreshing Taste 7 Up Soft Drink Packaging"
        price="₹18"
        value="1l"
        stock="20 bottles"/>
        <Card1
        img="https://m.media-amazon.com/images/I/51CFDdHur2L.jpg"
        title="Yakult Probiotic Health Drink Bottle, 65 ml| Pack of 5"
        price="₹47"
        value="1bottle"
        stock="20 bottles"/>
        <Card1
        img="https://rukminim2.flixcart.com/image/416/416/xif0q/concentrate/v/g/n/-original-imagpvfhhuze6k7a.jpeg?q=70"
        title="Tender Coconut Water Premix Powder with Natural Electrolytes "
        price="₹56"
        value="1bottle"
        stock="20 bottles"/>
        <Card1
        img="https://www.bigbasket.com/media/uploads/p/l/1214501_3-paperboat-swing-zesty-pomegranate-juice-enriched-with-vitamin-d-no-gmos.jpg?tr=w-640,q=80"
        title="Paperboat Swing Zesty Pomegranate Juice Enriched With Vitamin D"
        price="₹43"
        value="1bottle"
        stock="20 bottles"/>
        <Card1
        img="https://www.bigbasket.com/media/uploads/p/l/1209455_4-paper-boat-coconut-water-refreshing-flavour-vital-electrolytes.jpg?tr=w-640,q=80"
        title="Paper Boat Coconut Water - Refreshing Flavour"
        price="₹22"
        value="1bottle"
        stock="20 bottles"/>
        <Card1
        img="https://www.bigbasket.com/media/uploads/p/l/1223246_1-storia-100-tender-coconut-water-no-added-sugar.jpg?tr=w-640,q=80"
        title="Storia 100% Tender Coconut Water - No Added Sugar"
        price="₹19"
        value="1bottle"
        stock="20 bottles"/>
       
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
    <p className='stock'>MRP:{props.price}</p>
  </CardContent>
  <CardActions>
  <Button variant="outlined" className='cart' style={{backgroundColor:"green",color:"white"}}onClick={()=>{setCount(count+1)}}>Add to cart</Button><button style={{backgroundColor:'green',color:'white',padding:'3px',width:'30px',borderRadius:'5px'}}>{count}</button>

    </CardActions>
  </Card>
  </div>
    );
}