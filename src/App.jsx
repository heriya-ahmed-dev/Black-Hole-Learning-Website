import React from 'react';
import Header from './Header.jsx'
import Parent from './Components/Carousel/FirstList/Parent.jsx';
import './App.css'
import CarouselEffect from './Components/Carousel/CarouselEffect.jsx'
const App = () => {
  return (
    <div className=''>
       <Header/>
       <CarouselEffect/>
       <Parent/>
    </div>
  )
}

export default App
