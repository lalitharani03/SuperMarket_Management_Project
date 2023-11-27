import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Beverages.css';

export default function Beverages() {
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
                 <h4  style={{color:'black'}}>Beverages and Health mixtures<hr/></h4>
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
        img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR__VucMb0s87C6IOd_oQOacC2w7RxS_t1kynWA6kpv5h_BAlGCU0crh8sh_DbA9nCbISAAlNjXQyqar5E8D06aVaU-_KJruiFJDkQKeQOwEvabhAAeZX-R8g&usqp=CAE"
        title=" 
        Kannan Devan Strong Tata Tea Powder "
        value="100g" 
        price="₹45"
        stock="50packs"/>
        <Card1
        img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT9SLRnxQvT1eQNRqlTd6A0nL2GtKenpG09eaEfFoPqhkHgSmYfRc0vX5UtfpnSWVdM5bYJ7775uAcg-XM_NofblzWO-VGAxqvgn5-BVDW9I-a3DDQt6Otacg&usqp=CAE"
        title=" 
        AVT Tea Premium CTC Dust Tea 500 g Jar"
        value="100g" 
        price="₹60"
        stock="50packs"/>
        <Card1
        img="https://m.media-amazon.com/images/I/71DvXL+Z1EL._SX679_.jpg"
        title="Tata Tea Chakra Gold Dust Tea"
        value="50g" 
        price="₹45"
        stock="50packs"/>
        <Card1
        img="https://www.jiomart.com/images/product/original/490002010/bru-instant-coffee-100-g-product-images-o490002010-p490002010-0-202304281534.jpg?im=Resize=(420,420)"
        title="BRU Instant Coffee 100 g"
        value="50g" 
        price="₹73"
        stock="50packs"/>
        <Card1
        img="https://m.media-amazon.com/images/I/71HtqJlLe-L._SX679_.jpg"
        title="Nescafé Gold Blend Imported Decaf Coffee "
        value="50g" 
        price="₹53"
        stock="50packs"/>
        <Card1
        img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0nV0rMXGqPouWZM8dgmI7gX5NW_Ve7trLsBy8lQ-sgRjup3gHKFAGlz2OOfBNeZqKUoExhbJKMyWYOR3LjqkK9WDv6pWMblPea-RaewYdh-g0UVHIwx6Rsg&usqp=CAE"
        title=" 
        Nescafe Classic Coffee Glass Jar, 50g"
        value="50g" 
        price="₹64"
        stock="50packs"/>
        <Card1
        img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQPEgeLHMwGLSC-Zttql9Cl30tTp9fmrs9zwGLSCAQh-IvWZs75r81wBo--W_dFKH2zcTVFno6xmqw9chGkyXNPYUTrq-WuNa3UhLFoib-XKxiYy9NR8L1iIQ&usqp=CAE"
        title=" 
        Nescafe Coffee Original Decaffeinated 100g"
        value="100g" 
        price="₹78"
        stock="50packs"/>
        <Card1
        img="https://levista.in/cdn/shop/products/LevistaPremium3Dpouch200gmFront_e79e4caf-0dce-48cc-ac4f-e4ae78a083a1.webp?v=1653973434"
        title="Levista Premium Instant coffee"
        value="100g" 
        price="₹400"
        stock="50packs"/>
        <Card1
        img="https://levista.in/cdn/shop/files/ExtraStrongPillowPack1Kg.webp?v=1685598295"
        title="Extra Strong Pillow Pack 1Kg"
        value="50g" 
        price="₹356"
        stock="50packs"/>
        <Card1
        img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRHLtqTuFoZctShQKNZcZr50fnMVkqFnFMfre-0gaD4SYwoVIkNQxjuiD8phvZzfx1tPnbuB5HOBbl6-lSbKI4SyBmhoUnvaEKclXNm1X8&usqp=CAE"
        title=" 
        Boost Chocolate Energy & Sports Nutrition Drink "
        value="100g" 
        price="₹468"
        stock="50packs"/>
        <Card1
        img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS8SvzspIbrETFi49FEwTvv6hydNNRTAMgtTkmycmyHX1J5Kw2uFaY097nX4Av_CTyt2HxExgW7f5ZCp-ekvnKOD79Ha3XfoJ4nYY5TQ_X76jos4vtLAeI0&usqp=CAE"
        title=" 
        Boost Drink Powder - Sports Stars First Choice for 1g"
        value="50g" 
        price="₹346"
        stock="50packs"/>
        <Card1
        img="https://m.media-amazon.com/images/I/61KvK4RMsBL.jpg"
        title="Horlicks Health & Nutrition Drink for Kids for 15 kg"
        value="100g" 
        price="₹864"
        stock="50packs"/>
        <Card1
        img="https://5.imimg.com/data5/ANDROID/Default/2023/8/336767519/FS/WC/JM/89195434/product-jpeg.jpeg"
        title="Horlicks Chocolate Powder Delight Salt and Pepper "
        value="50g" 
        price="₹865"
        stock="50packs"/>
        <Card1
        img="https://richesm.com/wp-content/uploads/2023/05/Horlicks-Womens-Caramel-Jar-400-gm-1.jpg"
        title="Horlicks Women's Caramel Jar Perfect Nutrients for Your Baby"
        value="100g" 
        price="₹245"
        stock="50packs"/>
        <Card1
        img="https://saltandpepperretail.com/wp-content/uploads/2020/10/junior-horlicks-chocolate-stage1-jar.jpg"
        title="Junior Horlicks Chocolate Stage-1 - 500g "
        value="50g" 
        price="₹467"
        stock="50packs"/>
        <Card1
        img="https://m.media-amazon.com/images/I/71cTJPWJVmL._SX679_.jpg"
        title="Complan Nutrition and Health Drink Royale Chocolate"
        value="50g" 
        price="₹432"
        stock="50packs"/>
        <Card1
        img="https://m.media-amazon.com/images/I/61cgT9453KL._SX679_.jpg"
        title="Complan Nutrition and Health Royale Chocolate 500g, Jar pack"
        value="50g" 
        price="₹64"
        stock="50packs"/>
        <Card1
        img="https://m.media-amazon.com/images/I/61zN1ucaHxL._SX679_.jpg"
        title="Cadbury Bournvita Chocolate Health Drink, 500 g Jar"
        value="150g" 
        price="₹58"
        stock="50packs"/>
        <Card1
        img="https://m.media-amazon.com/images/I/61Er0039-xL._SX679_.jpg"
        title="Cadbury Bournvita Chocolate Health Drink, 500 g Pouch"
        value="35g" 
        price="₹547"
        stock="50packs"/>
        <Card1
        img="https://m.media-amazon.com/images/I/71j2Npq+HAL._SX679_.jpg"
        title="NESCAFE SUNRISE Instant Coffee Powder Stabilo| Coffee-Chicory"
        value="100g" 
        price="₹654"
        stock="50packs"/>
        <Card1
        img="https://m.media-amazon.com/images/I/41VBtKEwikL._SX300_SY300_QL70_FMwebp_.jpg"
        title="NESCAFE SUNRISE Instant Coffee Powder Jar | Coffee-Chicory Mix"
        value="50g" 
        price="₹457"
        stock="50packs"/>
        <Card1
        img="https://m.media-amazon.com/images/I/71qgKRyD5eS._SX679_.jpg"
        title="Manna Health Mix 1kg | Multi Millet Health Drink Mix Powder for Kids "
        value="100g" 
        price="₹540"
        stock="50packs"/>
        </div>
    </div>
  );
}

function Card1(props)
{
  const [count,setCount] = useState(0);
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
    <CardActions >
    </CardActions>
  </Card>
  </div>
    );
}

