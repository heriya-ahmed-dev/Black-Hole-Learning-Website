import React from 'react';
import Header from './Header.jsx'
import Parent from './Components/Carousel/FirstList/Parent.jsx';
import './App.css';
import CarouselEffect from './Components/Carousel/CarouselEffect.jsx';
import Learn from './Components/Carousel/FirstList/Learning/Learn.jsx';
const App = () => {
  return (
    <div className=''>
       <Header/>
       <CarouselEffect/>
       <Parent/>
       <Learn/>
    </div>
  )
}

export default App
