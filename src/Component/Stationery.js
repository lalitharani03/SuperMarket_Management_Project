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

export default function Stationery() {
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
                 <h4  style={{fontStyle:"oblique",color:'darkblue',fontSize:'4rem',fontWeight:'bold'}}>Stationery<hr/></h4>
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
        img="https://img.freepik.com/free-photo/3d-rendering-various-pens_23-2150851456.jpg?t=st=1700754762~exp=1700758362~hmac=b7e315430fd06b70cb1ebea0fb0f2084f58ca77e69330ea454c0a5c029667e73&w=900"
        title="BallPoint Pen"
        value="Pack of 10" 
        price="₹100"
        stock="150 Packs"/>
        <Card1
        img="https://img.freepik.com/free-photo/3d-rendering-pen-ai-generated_23-2150695617.jpg?t=st=1700755060~exp=1700758660~hmac=72a189f1bc1db680387caa35973186e52e470d7e5f7007ca9f3fda5d1d6b4b06&w=740"
        title="Ink Pen"
        value="Pack of 4"
        price="₹200"
        stock="150 Packs" />
        <Card1
        img="https://img.freepik.com/premium-photo/colored-pencils-with-floral-design_961875-374.jpg?w=740"
        title="Colored Pencil"
        value="A pack of all colors"
        price="₹60"
        stock="150 packs" />
        <Card1
        img="https://img.freepik.com/free-photo/watercolor-paints-with-notepad-table_23-2147953501.jpg?w=740&t=st=1700755602~exp=1700756202~hmac=26e43c5db70a43602b8dcf323f83e73f8fe4b14c769522d8332b428b2b47258a"
        title="Watercolour Paints"
        value="1 Pc"
        price="₹30"
        stock="200 Pcs" />
        <Card1
        img="https://img.freepik.com/free-vector/stationery-realistic-composition-with-isolated-image-calculator-blank-background-vector-illustration_1284-65975.jpg?w=740&t=st=1700756494~exp=1700757094~hmac=3afc76ee7ed0f3dc2d9438aba5b7da8027bfc3875e066c37d1615d47dc42b0de"
        title="Calculator"
        value="1 Pc"
        price="₹50"
        stock="1500 Pcs" />
        <Card1
        img="https://img.freepik.com/free-photo/notebook_74190-4422.jpg?w=900&t=st=1700756599~exp=1700757199~hmac=4020514076cc6ad704f4bdb05ee09613d9fe00461b5b462dcaf4526e7d1e1c0e"
        title="Note Books"
        value="Pack of 4"
        price="₹140"
        stock="200 Packs" />
        <Card1
        img="https://img.freepik.com/premium-photo/stack-colored-paper-white-background_9083-6697.jpg?w=900"
        title="Colour Papers"
        value="1 Pack"
        price="₹35"
        stock="220 Packs" />
        <Card1
        img="https://img.freepik.com/premium-vector/eraser-vector-collection-design_1096-897.jpg?w=740"
        title="Pencil Eraser"
        value="Pack of 4"
        price="₹20"
        stock="200 Packs" />
        <Card1
        img="https://img.freepik.com/premium-photo/household-manual-stapler-staples-blue-background-top-view_1073222-218.jpg?w=900"
        title="Stapler ans staples"
        value="1 Pc"
        price="₹60"
        stock="200 Pcs" />
        <Card1
        img="https://img.freepik.com/free-photo/stacks-colourful-sharpeners-top-view_23-2148362174.jpg?w=900&t=st=1700757216~exp=1700757816~hmac=a7eb3384428a5415a840a801aef6b1b149f0faa2dfbfd8cbeb1ca70d9fd08140"
        title="Sharpeners"
        value="Pack of 12"
        price="₹60"
        stock="200 Packs" />
        <Card1
        img="https://img.freepik.com/free-photo/close-up-view-stacked-sticky-coloured-note-cubes-isolated-black-wave-background-with-free-space_179666-19927.jpg?w=900&t=st=1700757395~exp=1700757995~hmac=64877aceeae48af07b9b5ad4fc55c4cd3e6a4eb7e8cdcb39d0cf225b094dab59"
        title="Sticky Notes"
        value="1 Pack"
        price="₹10"
        stock="200 Packs" />
        <Card1
        img="https://img.freepik.com/free-vector/super-fix-glue-tube-realistic_1441-893.jpg?w=740&t=st=1700757516~exp=1700758116~hmac=7091f793abb0dc0774da4548c7040bf06e551eabe3ea4d427be6a540c185bdec"
        title="Glue"
        value="1Pc"
        price="₹15"
        stock="200 Pcs" />
        <Card1
        img="https://img.freepik.com/free-psd/marker-pen-object-transparent-psd_7939-4518.jpg?w=740&t=st=1700757600~exp=1700758200~hmac=9b86a94deed043431be2aba40f86eb885cf496e6b04b7ea79ea9cb9f0702148a"
        title="Marker Pens"
        value="Pack of 4"
        price="₹60"
        stock="200 Packs" />
        <Card1
        img="https://img.freepik.com/free-vector/color-school-rulers-centimeters-inches-set_1284-51361.jpg?w=740&t=st=1700757734~exp=1700758334~hmac=6510afed0a2ce43614a03961949ce55cc8028d41e87784e43ca85da3d9fa013f"
        title="Rulers"
        value="Pack of 4"
        price="₹40"
        stock="200 Packs" />
        <Card1
        img="https://img.freepik.com/free-vector/angles-measuring-tool-set-round-protractors-scale-degrees-measure-metric-rulers-set-equipment-protra_145391-1065.jpg?w=900&t=st=1700758337~exp=1700758937~hmac=751ddea501c1fe4593fb64ec28129bd1e76ca87af4e05e59009a6702eb72812a"
        title="Measuring Tool Sets"
        value="Pack of 1"
        price="₹50"
        stock="200 Packs" />
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