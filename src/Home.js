import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import moonshine from './moonshine.jpg'
import frame from './frame.jpeg'
import litho from './litho.jpeg'


export default function Home() {
    return (
      <div style={{backgroundColor:"white"}} >
        <div  style={{ 
          
            marginTop: "55px",   
            marginLeft:"auto",
            marginRight:"auto",
            width: "50%"
            }}>
            
            <Carousel>
  <Carousel.Item interval={1000}>
    <img style={{   height: "auto",
    }}
      className="d-block w-100"
      src={frame}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>FRAMES</h3>
      
     
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img style={{   height: "auto",
            }}
      className="d-block w-100"
      src={moonshine}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>MOONSHINE</h3>
      
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img style={{   height: "auto",
            }}
      className="d-block w-100"
      src={litho}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>LITHOPHANES</h3>
      
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>


</div>                

    )}