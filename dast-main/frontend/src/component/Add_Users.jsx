import React, { useState } from 'react';
import axios from 'axios';
import img from '../assets/mid.png';

export default function Add_Users() {
  const [formData, setFormData] = useState({
    name: '',
    fname: '',
    cnic: '',
    address: '',
    license: '',
    weapon: '',
    cartridges: '',
    issue: '',
    valid: '',
    image: null, // Add state for the image
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({
        ...formData,
        [name]: files[0], // Set the image file
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]); // Append all form fields to FormData
    }

    try {
      const response = await axios.post('https://api.dastakappecitizenkp.com/weapons', data, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for file upload
        },
      });
      console.log('Form submitted successfully:', response.data);
      alert('User added successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to add user');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center mb-20'>
      <div className='w-64 h-32 mt-6 '>
        <img src={img} alt="" className='w-full h-full object-cover shadow-lg' />
      </div>

      <form onSubmit={handleSubmit} className='w-[80%] md:w-[80%] lg:w-[60%] flex flex-col gap-4'>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter user name'
          className='flex-grow px-4 py-2 focus:outline-none text-gray-700 border-2 border-gray-300 rounded-full shadow-md bg-white'
        />
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          placeholder='Enter Father name'
          className='flex-grow px-4 py-2 focus:outline-none text-gray-700 border-2 border-gray-300 rounded-full shadow-md bg-white'
        />
        <input
          type="text"
          name="cnic"
          value={formData.cnic}
          onChange={handleChange}
          placeholder='Enter CNIC'
          className='flex-grow px-4 py-2 focus:outline-none text-gray-700 border-2 border-gray-300 rounded-full shadow-md bg-white'
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder='Enter Permanent Address'
          className='flex-grow px-4 py-2 focus:outline-none text-gray-700 border-2 border-gray-300 rounded-full shadow-md bg-white'
        />
        <input
          type="text"
          name="license"
          value={formData.license}
          onChange={handleChange}
          placeholder='Enter License'
          className='flex-grow px-4 py-2 focus:outline-none text-gray-700 border-2 border-gray-300 rounded-full shadow-md bg-white'
        />
        <input
          type="text"
          name="weapon"
          value={formData.weapon}
          onChange={handleChange}
          placeholder='Enter Weapon'
          className='flex-grow px-4 py-2 focus:outline-none text-gray-700 border-2 border-gray-300 rounded-full shadow-md bg-white'
        />
        <input
          type="text"
          name="cartridges"
          value={formData.cartridges}
          onChange={handleChange}
          placeholder='Enter Cartridges'
          className='flex-grow px-4 py-2 focus:outline-none text-gray-700 border-2 border-gray-300 rounded-full shadow-md bg-white'
        />
        <input
          type="text"
          name="issue"
          value={formData.issue}
          onChange={handleChange}
          placeholder='Enter Issue Date'
          className='flex-grow px-4 py-2 focus:outline-none text-gray-700 border-2 border-gray-300 rounded-full shadow-md bg-white'
        />
        <input
          type="text"
          name="valid"
          value={formData.valid}
          onChange={handleChange}
          placeholder='Enter Valid Upto'
          className='flex-grow px-4 py-2 focus:outline-none text-gray-700 border-2 border-gray-300 rounded-full shadow-md bg-white'
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className='flex-grow px-4 py-2 focus:outline-none text-gray-700 border-2 border-gray-300 rounded-full shadow-md bg-white'
        />
        <button type='submit' className='flex-grow focus:outline-none bg-blue-800 text-white py-2 rounded-full'>
          Add
        </button>
      </form>
    </div>
  );
}
