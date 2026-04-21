import { Carousel } from 'react-responsive-carousel';
import { CarouselData } from './CarouselData.js';
import React from 'react'
import './Carousel.css'
import CarouselCard from './CarouselCard.jsx';
const CarouselEffect = () => {
  return (
    <div>
        <Carousel
          autoPlay = {true}
          infiniteLoop = {true}
          showIndicators = {false}
          transitionTime={1000}
          interval={2000}
          showThumbs={false}
        
        >
            {
                CarouselData.map((img)=>{
                 return(
                    <div key ={img.id} >
                       <CarouselCard data = {img} />
                    </div>
                 )   
                })
            }



        </Carousel>
    </div>
  )
}

export default CarouselEffect