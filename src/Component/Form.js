import React, { useState } from "react";
function Form(){
    const[email,setemail]=useState(' ');
    const[password,setpassword]=useState(' ');
    const[error,seterror]=useState([])
    const handlesubmit=(event)=>{
        event.preventDefault();
        const errors=validate();
    }
    const validate=()=>{
        const error=();
        if(!email){
            error.email="Email is Required";
        }
        else if(!/\S+@\S+\.\S+/.test(email)){

        }
    }
    return(
        <div className="container">
            <div className="form_container">
                 <form>
                      <div className="form_group">
                          <label htmlFor="email">Email</label>
                          <input type="email" onChange={(e)=>setemail(e.target.value)}/>
                     </div> 
                      <div className="form_group">
                          <label htmlFor="password">Password</label>
                          <input type="password" onChange={(e)=>setpassword(e.target.value)}/>
                     </div> 
                     <button>Log In</button>
                 </form>
                 <a href="/register">Sign Up</a>
            </div>
        </div>
    )
}