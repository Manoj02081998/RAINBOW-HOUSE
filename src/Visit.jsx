import React from 'react'
//import { Row } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";
//import { useGlobalContext } from "../context"

//port Register from "./Register";

import "./Visit.css"

const Visit = () => {
  return (
    <>
    <Container fluid="md">
       <Row> 
    <Col> 
    
<img src="./images/house2.jpg" alt="" style={{ width: "100%" }}/>
    
    </Col>
    <Col> 
    
    <h2>Householder: Mamta yadav</h2>

      <h3>House Type: 2BHK</h3>

    <p>Discription: This is Good Home To you and our family.
      Location: Near Patna Station 
      
              
    </p>

    <h3>Fair fild Colony Digha Patna</h3>
    <h3>Location: Near Patna Station</h3>
    <h3>Pin code: 560124</h3>
    <h3></h3>
  <h2 style={{ margin: '4rem' }}>Rent: 30,000/-</h2>
    <Button className="btn hireme-btn" style={{ margin: '4rem' }}>
            <NavLink to="/Register">Book now </NavLink>
          </Button>  
    </Col>
    </Row> 
    </Container>
    {/* visit */}
    </>
  );
};
const Wrapper = styled.section`

`;

export default Visit
