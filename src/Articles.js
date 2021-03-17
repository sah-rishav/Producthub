import React from "react";
import Typography from '@material-ui/core/Typography';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';


export default function Articles() {
    return (
      <div>
             <Typography variant="overline" display="block" gutterBottom style={{        
        marginTop:"50px",

         textAlign:"center",
         color:'grey'}}>
        Quality Features
      </Typography>

          <h3 style={{      
            textAlign:"center",
         color:'black'}}> Features Articles of Product Hub</h3>
<br></br>
<CardColumns>
  <Card>
    <Card.Img variant="top" src={require('./mechatronics.jpg')} style={{height:"250px"}} />
    <Card.Body>
      <Card.Title>MECHATRONICS: THE HUMAN FUTURE</Card.Title>
      <Card.Text style={{fontFamily:"Candara"}}>
      Mechatronics engineering is an interdisciplinary branch of engineering that focuses on the engineering 
      of electronic, electrical and mechanical engineering systems, and also includes a combination of 
      robotics, electronics, computer, telecommunications, systems, control, and product engineering.
           </Card.Text>
    </Card.Body>
    <Card.Footer style={{display:"flex",justifyContent: "center",
  alignItems: "center"}}>
    <a href="https://medium.com/knowledgehub-by-producthub/mechatronics-the-human-future-3fa734fca651" class="btn btn-warning" role="button">View Full Article</a>    
    </Card.Footer>
  </Card>
  
  <Card>
    <Card.Img variant="top" src={require('./power.png')} style={{height:"250px"}} />
    <Card.Body>
      <Card.Title>The Power of Collaboration</Card.Title>
      <Card.Text style={{fontFamily:"Candara"}}>
      ProductHub collaborates with local manufacturing sellers and vendors to bring them 
      into the mainstream and make their businesses more profitable. With hundreds of manufacturing
      partners around India, ProductHub provides customers a platform to easily post their project and get
     it manufactured and delivered at their doorstep. {' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer  style={{display:"flex",justifyContent: "center",
  alignItems: "center"}}>
      <a href="https://medium.com/knowledgehub-by-producthub/the-power-of-collaboration-52b888adb30d" class="btn btn-warning" role="button">View Full Article</a>
    </Card.Footer>
  </Card>
  
  <Card >
    <Card.Img variant="top" src={require('./3dpainting.jpeg')} style={{height:"250px"}} />
    <Card.Body>
      <Card.Title>3D Printing : The laying foundation of futuristic Manufacturing</Card.Title>
      <Card.Text style={{fontFamily:"Candara"}}>
      3D printing is a process of making 3-dimensional objects layer by layer. It is an additive
      manufacturing process, wherein the material gets added to create an object. Unlike the cutting, 
      milling, drilling, and machining processes, wherein the material is removed to create ....{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{display:"flex",justifyContent: "center",
  alignItems: "center"}}>
     <a href="https://medium.com/@manujabandal/3d-printing-the-laying-foundation-of-futuristic-manufacturing-764cf91bd95d" class="btn btn-warning" role="button" >View Full Article</a>
    </Card.Footer>
  </Card>
 
  
</CardColumns>

      </div>
    )}