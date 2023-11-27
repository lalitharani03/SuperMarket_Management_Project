import React from 'react'
import Layout from './Layout';
import {Link} from 'react-router-dom'
import "./Home1.css";

const Home1 = () => {
  return (
    <Layout className='layout'>
       <div className='home' style={{backgroundImage:`url(https://cdn.wallpapersafari.com/49/73/mcEn0H.jpg)`,backgroundSize:'cover' }}>
        <div className='headerContainer'>
            <h1>Grocery Website</h1>
            <p>Best products in all over India</p>
            <Link to="/menu">
            <button>
                ORDER NOW
            </button>
            </Link>
        </div>

       </div>
    </Layout>
  )
}

export default Home1;