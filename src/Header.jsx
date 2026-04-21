import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='d-flex justify-content-between mt-3 bg-black text-white m-3 main'>
        <div>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyDsSojlOgfyoo73P7UzIcgqPjRjOyDXzwJNDdBNUwnf7i7zP6yJos7E&s" className='ms-3 mt-1'/>
           <p className='ms-3 opacity-50'>Black Hole</p>
        </div>
        <nav className='d-flex gap-4 mt-5 opacity-75 nav-link-custom'>
            <a href="" className='text-decoration-none fs-5 nav-link-custom'>Home</a>
            <a href="" className='text-decoration-none fs-5 nav-link-custom'>Learn</a>
            <a href="" className='text-decoration-none fs-5 nav-link-custom'>simulation</a>
            <a href="" className='text-decoration-none fs-5 nav-link-custom'>Images</a>
            <a href="" className='text-decoration-none fs-5 nav-link-custom'>Time line</a>
            <a href="" className='text-decoration-none fs-5 nav-link-custom'>Quiz</a>
            <a href="" className='text-decoration-none fs-5 nav-link-custom'>Research level</a>
            <a href="" className='text-decoration-none fs-5 nav-link-custom'>Contact</a>

        </nav>
        <div className='d-flex gap-2 m-3'>
          <button className='rounded-4  btn btn-outline-info'>Log In</button>
          <button className='rounded-4 btn btn-outline-info'>Sign Up</button>
        </div>
    </div>
  )
}

export default Header