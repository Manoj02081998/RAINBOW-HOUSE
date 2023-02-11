// import React, { useEffect } from "react";
// import HeroSection from "./components/HeroSection";
// import { useGlobalContext } from "./context";

// const Register = () => {
//   const { udpateRegisterPage } = useGlobalContext();
  

//   useEffect(() => udpateRegisterPage(), []);
  

//   return <HeroSection />;
// };

// export default Register;
import React, { useState } from 'react'

import styled from "styled-components";
import "./Register.css";
import axios from 'axios';

const Register = () => {

    const [fullName,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [ConfirmPassword,setConfirmPassword] = useState('');



    const clearStateData = () =>
    {
        console.log('fun call')
        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const payload = {
            email:email,
            fullName:fullName,
            password:password
        }
        axios.post('http://localhost:4000/register',payload).
        then((response)=>{

            console.log('pass ',response)
            if(response.data == 'recordInserted')
            {
                console.log(response.data)
                clearStateData();
            }
            else{
                console.log(response.data)
            }
            console.log('res ',response.data)

        }).catch((error)=>{
            console.log('error ',error)
        })
    }


  return (
    <div className='main'>
    <div className='sub-main'>
        <div>
            <div className="imgs">
                 <div className='container-image'> 
                    <img src ="./images/key.jpg" className='profile'/> 
                 </div> 

            </div>
            <div>
                <h2>Register yourSelf</h2>
            </div>
            <div className='secondinput'>
               
                <input type="text" placeholder='Full Name' className='name' value={fullName} onChange={(event)=>{setFullName(event.target.value)}}/>
            </div>
            <div className='secondinput'>
               
                <input type="email" placeholder='Email' className='name'value={email}  onChange={(event)=>{setEmail(event.target.value)}}/>
            </div>
            <div className='secondinput'>
                
                <input type="password" placeholder='password' className='name' value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
            </div>
            <div className='secondinput'>
               
                <input type="password" placeholder='Confirm Password' className='name'value={ConfirmPassword} onChange={(event)=>{setConfirmPassword(event.target.value)}}/>
            </div>
            <div className='login-button'>
                                <button onClick={handleSubmit}>Submit</button>
                                </div>

        </div>
    </div>
 </div>

  )
}
export default Register
