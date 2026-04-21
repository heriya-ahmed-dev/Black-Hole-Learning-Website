import React from 'react'
import './Carousel.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselCard = ({data}) => {
  return (
    <div className='body'>
        <img src={data.img} className='Carousel_img'/>
    </div>
  )
}

export default CarouselCard