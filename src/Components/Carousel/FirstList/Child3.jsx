import React from 'react'
import './FirstList.css';

const Child3 = ({info}) => {
  return (
    <div className='box_three'>
        <h2 className='mt-2 mb-3'>{info.title}</h2>
         <p>{info.desc}</p>
         <p>{info.detail}</p>
    </div>
  )
}

export default Child3;