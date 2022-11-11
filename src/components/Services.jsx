
import React from 'react'
import {Carousel}from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/services1.jpg"
import img2 from "../assets/services2.jpg"

const Services = () => {
    const imgStyle={
        height:"100vh",
        
    }
  return (
    <div>
    
    <Carousel infiniteLoop autoPlay showArrows={false} showStatus={false} showThumbs={false} interval={5000}>

    <div>
        <img src={img1} alt="Image1" style={imgStyle}/>
        <p className='legend'>Full Stack</p>
    </div>
    <div>
        <img src={img2} alt="Image2" style={imgStyle} />
        <p className='legend'>Supprot Services</p>
    </div>

    </Carousel>
    </div>
  )
}

export default Services