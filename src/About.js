import React from "react";
import Typography from '@material-ui/core/Typography';
import first from './images/first.png';
import second from './images/second.png';
import third from './images/third.png';
import { Col, Container, Row } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'


export default function Home() {
    return (
<div>
<Typography variant="overline" display="block" gutterBottom style={{       
             marginTop: '20px',
             textAlign:"center",
             color:'grey'}}>

        WHY PRODUCT HUB
      </Typography>
      
<h3 style={{ 
textAlign:"center",
color:'black',
}}>The Future of Smart Manufacturing</h3><br></br>

  <div class="container" >

     <div class="container" >
           
            <p className="space3" style={{fontSize:"18px",fontFamily:"Century Gothic"}}> "Imagine a world where you are in control of the production of your jobs. 
          Imagine being a machine owner for your production timeline. Imagine sitting peacefully at home, 
          taking a sip of your coffee, and sending a command to your machine to get it manufactured remotely.
           No hassle of traffic, no visiting a workshop, no wastage of time."
    
    </p>
    <br></br>
     </div>


          
          <div >          
          <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={first} thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image src={second} thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image src={third} thumbnail />
    </Col>
  </Row>
</Container>
          </div>


  </div>
          <Typography variant="overline" display="block" gutterBottom style={{       
             marginTop: '30px',
             textAlign:"center",
             color:'grey'}}>

        Best Selling
      </Typography>
      <h3 style={{   
        
         textAlign:"center",
         color:'black'}}> Featured Products</h3>
</div>
    )}
