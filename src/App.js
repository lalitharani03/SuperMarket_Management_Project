//import Navbar from "./Component/Navbar";
import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Component/Home'
import Login from "./Component/Login";
import Vegetables from "./Component/Vegetables";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Home1 from "./Component/Home1";
import Fruits from "./Component/Fruits";
import Kitchen from "./Component/Kitchen";
import Chocolates from "./Component/Chocolates";
import Stationery from "./Component/Stationery";
import RegistrationForm from "./Component/Registration";
import Meat from "./Component/Meat";
import Beverages from "./Component/Beverages";
import Juice from "./Component/Juice";
export default function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home1/>}/>
          <Route exact path="/menu" element={<Home/>}/>
          {/* <Route exact path="/home1" element={<Home1/>}/> */}
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<RegistrationForm/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/Vegetables" element={<Vegetables/>}/>
          <Route exact path="/Fruits" element={<Fruits/>}/>
          <Route exact path="/Kitchen" element={<Kitchen/>}/>
          <Route exact path="/chocolates" element={<Chocolates/>}/>
          <Route exact path="/stationery" element={<Stationery/>}/>
          <Route exact path="/juice" element={<Juice/>}/>
          <Route exact path="/meat" element={<Meat/>}/>
          <Route exact path="/mixtures" element={<Beverages/>}/>
          <Route exact path="*" element={<div>404 NOT FOUND</div>}/>
        </Routes>
    </BrowserRouter>
    //<Navbar/>
  )
}