import React from 'react';
import { IoClose } from "react-icons/io5";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Modal({ handelClick }) { 
    return (
        <div>

            <div className='w-[450px] bg-white fixed z-40 top-10 left-1/2 transform -translate-x-1/2 -translate-y-4 p-3 shadow-lg rounded'>
                <div className='flex justify-between items-center py-3 border-b'>
                    <p className=" text-[14px] text-gray-400">Login - Let's start</p>
                    <p onClick={handelClick} className='cursor-pointer'> 
                        <IoClose aria-label="" className='text-gray-400 text-3xl' />
                    </p>
                </div>
                <div className='py-3 text-center'>
                    <p className='text-[14px] text-gray-400'>
                        Welcome to Dastak, your digital companion for arms licensing in Khyber Pakhtunkhwa. We’re here to revolutionize the way you manage your arms licenses. Say goodbye to paperwork and hello to a seamless, efficient, and transparent experience. With Dastak, you can apply for, renew, and manage your arms licenses from the comfort of your home. Stay informed with real-time updates, make secure payments, and easily locate your nearest NADRA office for biometric verification.
                    </p>
                </div>
                <div className='py-3 flex items-center justify-center'>
                    <button className='bg-[#0ddbb9] text-white px-4 py-2 rounded-full hover:bg-blue-600 transition text-[13px] flex'>
                        <FaArrowDownLong className='font-bold text-[15px]' /> Download Android App
                    </button>
                    <button className='bg-[#0ddbb9] text-white px-4 py-2 rounded-full hover:bg-gray-600 transition ml-1 text-[13px] flex'>
                        <FaArrowDownLong className='font-bold text-[15px]' />Download iOS App
                    </button>
                </div>
            </div>

            {/* Background Overlay */}
            <div className='bg-black bg-opacity-50 w-full h-screen top-0 z-30 fixed'></div>
        </div>
    );
}
