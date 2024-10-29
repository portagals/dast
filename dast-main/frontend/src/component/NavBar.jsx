import React from 'react'
import logo from '../assets/logo.png'
import mid from '../assets/mid.png'
import { LuMessageSquare } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdLogin } from "react-icons/md";

export default function NavBar({ handelClick }) {
  return (
    <div>
      <div className='flex justify-between bg-white p-2'>
        <div className='w-[60px]'>
          <img src={logo} alt="" className='w-[100%] hidden lg:block ' />
        </div>
        <div className='w-[110px]'>
          <img src={mid} alt="" className='w-[100%]' />
        </div>
        <div>
          <button className='bg-[#0ddbb9] px-1 py-2 rounded-lg text-[12px] font-medium' onClick={handelClick}><span className=' hidden md:block'>Login</span><span><MdLogin className='mr-2 text-[18px] md:hidden' /></span></button>
        </div>
      </div>

      <div className='md:flex justify-between px-5 py-2'>
        <div>
          <h1 className='font-normal text-[17px]'>Welcome! We're delighted to have you here!</h1>
          <p className='text-[13px] text-gray-500'>You are one step close to digital platform.</p>
        </div>
        <div className='flex'>
          <button className='py-1 h-9 px-6 ml-1 text-[13px] font-medium text-blue-500 rounded-md border-[1px] border-[#0ad7f7] hover:cursor-pointer hover:bg-[#0ad7f7] hover:text-gray-500 flex items-center'>Feedback<LuMessageSquare className='ml-2 text-[15px]' /></button>
          <button className='py-1 h-9 px-6 ml-1 text-[12px] font-medium text-blue-500 rounded-md border-[1px] border-[#0ad7f7] hover:cursor-pointer hover:bg-[#0ad7f7] hover:text-gray-500 flex items-center'>Help<FaRegQuestionCircle className='ml-2 text-[15px]' /></button>
        </div>
      </div>
    </div>
  )
}
