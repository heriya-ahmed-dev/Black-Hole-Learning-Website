import React from 'react'
import './FirstList.css'
const Child2 = ({info}) => {
  return (
    <div className='box'>
        <h2>{info.title}</h2>
         <p>{info.desc}</p>
    </div>
  )
}

export default Child2