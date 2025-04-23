import React from 'react'
import img from '../../../assets/Yamo Preview v1.jpg'

export default function Img() {
  return (
    <div className='py-10   rounded-3xl'>
        <img src={img} alt="" className='w-auto h-auto bg-cover bg-center'/>
    </div>
  )
}
