import React from 'react'
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import styled from "styled-components";


const Services = () => {
   return (
<div>
  <h2 style={{ margin: '18rem' }}>Find Better Places to Live, Work and Wonder...</h2>
  
<Container fluid="md">
  <Row> 
    <Col>  
<Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="./images/room.jpg" />
      <Card.Body>
        <Card.Title>Flat</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item >Rs.50,000/-</ListGroup.Item>
         <ListGroup.Item>Deluxe facility</ListGroup.Item>
        {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item>  */}
      </ListGroup>
      <Card.Body>
      <Card.Link href="./Visit">Visit</Card.Link>
    </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '28rem' }}>
    <Card.Img variant="top" src="./images/room2.jpeg" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text> Single room  </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Rs.20,000</ListGroup.Item>
     <ListGroup.Item>Available</ListGroup.Item>
      {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */} 
    </ListGroup>
    <Card.Body>
      <Card.Link href="./Visit">Visit</Card.Link>
    </Card.Body>
  </Card>
  </Col>
   <Col>
    <Card style={{ width: '28rem' }}>
    <Card.Img variant="top" src="./images/room3.png" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      Double Room
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Rs.40,000/-</ListGroup.Item>
      <ListGroup.Item>Full Ac</ListGroup.Item>
      
    </ListGroup>
    <Card.Body>
      <Card.Link href="./Visit">Visit</Card.Link>
    </Card.Body>
  </Card>
  </Col>
  <Col margin>
    <Card style={{ width: '28rem' }}>
    <Card.Img variant="top" src="./images/room4.jpg" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        Flat
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Rs.60,000</ListGroup.Item>
      <ListGroup.Item>Deluxe</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="./Visit">Visit</Card.Link>
     
    </Card.Body>
  </Card>
  </Col>

  <Col>
    <Card style={{ width: '28rem' }}>
    <Card.Img variant="top" src="./images/room5.jpg" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        Flat
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Rs.60,000</ListGroup.Item>
      <ListGroup.Item>Deluxe</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="./Visit">Visit</Card.Link>
     
    </Card.Body>
  </Card>
  </Col>
 
  <Col>
    <Card style={{ width: '28rem' }}>
    <Card.Img variant="top" src="./images/Key.jpg" />
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        Flat
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Rs.55,000</ListGroup.Item>
      <ListGroup.Item>Deluxe</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="./Visit">Visit</Card.Link>
     
    </Card.Body>
  </Card>
  </Col>
 
  </Row>
  </Container>
  </div> 
);
};
const Wrapper = styled.section`
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default Services
