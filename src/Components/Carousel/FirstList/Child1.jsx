import React from 'react'
import './FirstList.css'

const Child1 = ({info}) => {
  return (
    <div className='box'>
      <img src={info.img} className='child_img'/>
        <h2 className='text-success-emphasis'>{info.title}</h2><br/>
        <h6>{info.desc}</h6><br/>
         <p>{info.detail}</p>
    </div>
  )
}

export default Child1;