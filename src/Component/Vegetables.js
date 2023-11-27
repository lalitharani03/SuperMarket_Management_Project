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

export default function Veges() {
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
                 <h4  style={{fontStyle:"oblique",color:'green',fontSize:'4rem',fontWeight:'bold'}}>Vegetables<hr/></h4>
             </div>
            <Stack
              sx={{pt:0}}
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
        img="https://img.freepik.com/free-photo/fresh-broccoli-vegetable_144627-20156.jpg?w=740&t=st=1700624107~exp=1700624707~hmac=ef763e9de97d404fbbaa3f2a044c5307fb1d39fbc446e3487e54f62bbca9c798"
        title="Broccoli"
        value="1 kg" 
        price="₹50"
        stock="15kgs"/>
        <Card1
        img="https://img.freepik.com/free-vector/cucumber-isolated-white_98292-5103.jpg?w=900&t=st=1700624207~exp=1700624807~hmac=79eb6650a4738903593ef2bbeea90ea0c62a2977f192f75e47c6f9009a5d27d5"
        title="Cucumber"
        value="1/4 kg"
        price="₹20"
        stock="15kgs" />
        <Card1
        img="https://img.freepik.com/free-photo/chopped-bitter-gourd-put-dark-floor_1150-35345.jpg?w=1060&t=st=1700624276~exp=1700624876~hmac=882ff024dcc9b5ee2cded1d9466ef947bc8634554e1c0d7c4f0ec64f5a46a0a1"
        title="Bitter Gourd"
        value="1 kg"
        price="₹30"
        stock="15kgs" />
        <Card1
        img="https://img.freepik.com/premium-photo/cassavas-grouped-white-background_491130-3281.jpg?w=1060"
        title="Elephant Yam"
        value="1 Pc"
        price="₹20"
        stock="15kgs" />
        <Card1
        img="https://img.freepik.com/free-photo/stack-carrots-bowl-marble_114579-65075.jpg?w=1060&t=st=1700624500~exp=1700625100~hmac=0627a860a787a76678770effe990da5e11c6404d6191325ba78c7e0d980a7afc"
        title="Carrot"
        value="1 kg"
        price="₹50"
        stock="15kgs" />
        <Card1
        img="https://img.freepik.com/free-photo/potato-table_144627-14824.jpg?w=740&t=st=1700624548~exp=1700625148~hmac=d56d39485e33060ea71f9fb7facceb4c2d2f19480714ec178ddfabe636041df1"
        title="Potato"
        value="1 Kg"
        price="₹50"
        stock="15kgs" />
        <Card1
        img="https://img.freepik.com/free-photo/pile-fresh-green-peppers-isolated_114579-85699.jpg?w=1060&t=st=1700625006~exp=1700625606~hmac=93a38ffc627f3e6155fd5ea4d8afe1145302007f67ad6cd73c61359ef504c35d"
        title="Capsicum"
        value="1/4 kg"
        price="₹35"
        stock="15kgs" />
        <Card1
        img="https://img.freepik.com/free-photo/natural-peas_144627-13542.jpg?w=900&t=st=1700625127~exp=1700625727~hmac=f6b9cc2d21e7c058a53d91716aafc350165cb224fed5ac724bbdd5113c2101fb"
        title="Green Peas"
        value="1/4 kg"
        price="₹20"
        stock="15kgs" />
        <Card1
        img="https://img.freepik.com/free-photo/bittersweet-ginger_144627-12044.jpg?w=1060&t=st=1700625170~exp=1700625770~hmac=125bd863648bb0aff2776b70a62453e7375df00b78d78456f8dfe432a401d70e"
        title="Ginger"
        value="1 Pc"
        price="₹10"
        stock="15kgs" />
        <Card1
        img="https://img.freepik.com/free-photo/sweet-potato_144627-20751.jpg?w=826&t=st=1700625227~exp=1700625827~hmac=3d8ce66ee4288f2ea170622c3ae74251bc56d32b5415bd1b548fa353d16643f5"
        title="Sweet Potatoes"
        value="1 kg"
        price="₹45"
        stock="15kgs" />
        <Card1
        img="https://img.freepik.com/free-photo/chinese-kale-vegetable_1203-6811.jpg?w=360&t=st=1700625303~exp=1700625903~hmac=5993a772d9746553a07d25b6fd4671b371e1294e0db56ae8ae54dd61c0ae02d0"
        title="Spinach"
        value="1 bundle"
        price="₹10"
        stock="20 bundle" />
        <Card1
        img="https://img.freepik.com/free-photo/fresh-red-tomatoes_2829-13449.jpg?w=740&t=st=1700625467~exp=1700626067~hmac=f068b62252682f0808b1ea9ab088606adc58dbc9b84d3c4654ec98e479a3397d"
        title="Tomato"
        value="1 Kg"
        price="₹40"
        stock="15kgs" />
        <Card1
        img="https://img.freepik.com/free-photo/cauliflower-isolated_1203-6777.jpg?w=1060&t=st=1700625514~exp=1700626114~hmac=2bf4e74ddfd6accc782bc0a2401601baee4da65d6307220edcc90eda45ee1720"
        title="CauliFlower"
        value="1 Pc"
        price="₹15"
        stock="15kgs" />
        <Card1
        img="https://img.freepik.com/free-photo/close-up-view-basket-red-onions_141793-5351.jpg?w=900&t=st=1700625589~exp=1700626189~hmac=715b997c927f50092d674a9020a500c8104f32a6b1f30f514db9c3e7492c0f2d"
        title="Onion"
        value="1 kg"
        price="₹30"
        stock="15kgs" />
        <Card1
        img="https://img.freepik.com/premium-photo/green-cabbage-vegetables-isolated-white_80510-721.jpg?w=996"
        title="Cabbage"
        value="1 Pc"
        price="₹25"
        stock="15kgs" />
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
    <p>MRP: {props.price}</p>
  </CardContent>

  <CardActions>
  <Button variant="outlined" className='cart' style={{backgroundColor:"green",color:"white"}}onClick={()=>{setCount(count+1)}}>Add to cart</Button><button style={{backgroundColor:'green',color:'white',padding:'3px',width:'30px',borderRadius:'5px'}}>{count}</button>

    </CardActions>
    {/* <CardActions >
        <Button className='purch' variant='outlined' sx={{color:'white',backgroundColor:'black'}}>Purchase</Button>
    </CardActions> */}
  </Card>
  </div>
    );
}