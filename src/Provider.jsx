import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import styled from "styled-components";
import "./Register.css"
import axios from 'axios';

const Provider = () => {

    
    const [fullName,setFullName] = useState ('');
    const [email,setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [houseAddress,setHouseAddress] = useState('');
    const [landmark,setlandmark] = useState('');
    const [description,setDescription] = useState('');
    
    const clearStateData = () =>
    {
        setFullName("");
        setEmail("");
        setHouseAddress("");
        setlandmark("");
        setDescription("");
    }
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const payload = {
            email:email,
            fullName:fullName,
            phoneNumber:phoneNumber,
            houseAddress:houseAddress,
            landmark:landmark,
            description:description
             
        }
        axios.post('http://localhost:4000/provide',payload).
        then((response)=>{

            console.log('pass ',response)
            if(response.data == 'recordInserted')
            {
                console.log(response.data)
                clearStateData()
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
                    <img src ="./images/house.jpg" className='profile'/> 
                 </div> 

            </div>
            <div>
                <h2>Add Your Own House For Rent</h2>
            </div>
            <div className='secondinput'>
               
                <input type="text" placeholder='FullName' className='name'value={fullName}   onChange={(event)=>{setFullName(event.target.value)}}/>
            </div>
            <div className='secondinput'>
               
                <input type="email" placeholder='Email' className='name'value={email}   onChange={(event)=>{setEmail(event.target.value)}}/>
            </div>
            <div className='secondinput'>
               
               <input type="number" placeholder='PhoneNumber' className='name'value={phoneNumber}  onChange={(event)=>{setPhoneNumber(event.target.value)}}/>
           </div>
           <div className='secondinput'>
               
               <input type="text" placeholder=' HouseAddress' className='name' value={houseAddress} onChange={(houseAddress)=>{setHouseAddress(event.target.value)}}/>
           </div>
            <div className='secondinput'>
                
                <input type="text" placeholder='landmark' className='name'value={landmark}  onChange={(event)=>{setlandmark(event.target.value)}}/>
            </div>
            <div className='secondinput'>
               
                <input type="text" placeholder='Description' className='name'value={description}  onChange={(event)=>{setDescription(event.target.value)}}/>
            </div>
            <div className='login-button'>
                                <button onClick={handleSubmit}>Submit</button> <button>ADD Picture</button>
                                </div>
                                

        </div>
    </div>
 </div>

    
  )
  }

export default Provider
