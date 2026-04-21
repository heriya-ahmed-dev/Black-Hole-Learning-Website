import React from 'react';
import './FirstList.css';

const Child2 = ({info}) => {
  return (
    <div className='box_two'>
        <h2 className='mt-3 text-success-emphasis'>{info.title}</h2>
         <h6>{info.desc}</h6>
         <p>{info.detail}</p>
         
    </div>
  )
}

export default Child2