import React from 'react'
import logo_1 from '../assets/kpitb-logo.png'
import logo_2 from '../assets/dtu-logo.png'

export default function Footer() {
  return (
    <div className='bottom-0 fixed bg-white w-[100%] flex justify-between p-3 z-20'>
      <div className='w-[12%]'>
        <img src={logo_1} alt="" className='w-[100%]' />
      </div>
      <div className='w-[20%] text-center'>
        <p className=' text-gray-400 text-[11px]'>Copyright © 2024</p>
        <a href="/" className='underline text-gray-500 text-[12px]'>Dastak - KP Digital Transformation Unit</a>
      </div>
      <div className='w-[12%]'>
        <img src={logo_2} alt="" className='w-[100%]' />
      </div>
    </div>
  )
}
