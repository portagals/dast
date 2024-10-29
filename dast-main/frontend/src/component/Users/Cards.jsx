import React from 'react'

export default function Cards({ name, fname, cnic, address, img, license, weapon, cartidges, issue, valid }) {
  return (
    <div>
      <div className='bg-[#cef7fd] mt-20 p-3 xl:w-[300px] relative w-[100%] md:w-[80%] lg:w-[70%] m-auto text-[#045663] rounded-lg'>
              <div className='flex justify-between'>
                <h1 className='font-medium underline'>Applicant Information</h1>
                <h1 className='px-3 py-1 border-[1px] border-[#ee5b5b] text-[#ee5b5b] font-bold text-[12px] rounded-lg'>New License</h1>
              </div>
              <div className='flex justify-between mt-8'>
                <div className='w-[80%]'>
                  <p className='text-[14px] font-bold'>Applicant Name: {name}</p>
                  <p className='text-[14px] font-bold'>Father Name: {fname}</p>
                  <p className='text-[14px] font-bold'>CNIC# {cnic}</p>
                  <p className='text-[14px]'><span className='font-bold'>Permanent Address:</span>{address}</p>
                </div>
                <div className='w-20'>
                  <img src={img} alt="" className='w-[100%] rounded-md' />
                </div>
              </div>
              <div className='mt-6 bg-[#fcdede] text-[#8f3737] p-3'>
                <div className='mb-3'>
                  <p><span className='text-[14px] font-medium'>License #</span> {license}</p>
                  <p><span className='text-[14px] font-medium'>Weapon #</span> {weapon}</p>
                  <p><span className='text-[14px] font-medium'>Cartidges :</span> {cartidges}</p>
                </div>
                <hr className='border-0 h-px bg-[#8f3737]' />
                <div className='mt-3'>
                  <p><span className='text-[14px] font-medium'>Issue Date :</span> {issue}</p>
                  <p><span className='text-[14px] font-medium'>Valid Upto :</span> {valid}</p>
                </div>
              </div>
              <button className='bg-red-600 text-white py-2 px-6 mt-2 rounded-lg'>Delete</button>
            </div>
    </div>
  )
}
