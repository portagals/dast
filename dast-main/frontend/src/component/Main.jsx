import React, { useState } from 'react';
import axios from 'axios'; 
import right_img from '../assets/workflow.jpg';
import profile from '../assets/profile.jpg';
import { TbFileSearch } from "react-icons/tb";
import { RiUserSearchLine } from "react-icons/ri";
import { MdLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import Cards from './Card';

export default function Main({ handelClick }) {
  const [searchResult, setSearchResult] = useState(null); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [cnicQuery, setCnicQuery] = useState("");
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setError(null); 

    try {
      // Post request to retrieve data by license and optional CNIC
      const response = await axios.post('http://api.dastakappecitizenkp.com/weapons/details', {
        license: searchQuery,
        cnic: cnicQuery
      });
      
      if (response.data) {
        setSearchResult(response.data);
      } else {
        setSearchResult("Result not found"); 
      }
    } catch (err) {
      console.error(err);
      setError("Error retrieving data");
    } finally {
      setLoading(false);
    }
  };

  const handlePrompt = (message, setFunction) => {
    const userInput = prompt(message);
    if (userInput) {
      setFunction(userInput);
    }
  };

  function loginpage() {
    navigate('/login')
  }

  return (
    <div>
      <div className='md:flex justify-between pt-0 p-5 h-[930px]'>

        <div className='bg-white w-[100%] md:w-[48%] p-10'>
          <form onSubmit={handleSearch}>
            <div>
              <input
                type="text"
                placeholder='Track License by Application ID / License #'
                className='border-[#0ddbb9] border-[1px] w-[100%] m-auto py-3 px-6 text-[13px] rounded-full'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
                required
              />
            </div>
            <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row justify-center items-center'>
              <button 
                type="submit"
                className='bg-sky-400 py-3 px-6 text-white rounded-full m-3 flex lg:text-[13px]'
                onClick={() => handlePrompt("Enter Your CNIC", setCnicQuery)}
                disabled={loading}
              >
                <TbFileSearch className='lg:text-[18px] md:mr-3 lg:mr-0' />Search By Application ID
              </button>
              <button
                type="submit"
                className='bg-[#0ddbb9] py-3 px-6 text-white rounded-full m-3 flex lg:text-[13px]'
                onClick={() => handlePrompt("Enter Your CNIC", setCnicQuery)}
                disabled={loading}
              >
                <RiUserSearchLine className='lg:text-[18px] md:mr-3 lg:mr-0' />Search By License #
              </button>
            </div>
          </form>

          <div className='border-l-2 border-r-2 border-b-2 rounded-b-lg pb-5'>
            {loading && <p className="text-gray-500 p-5">Searching...</p>}
            {error && <p className="text-red-500 p-5">{error}</p>}
            {searchResult ? (
              <Cards
                img={searchResult.image || profile} 
                name={searchResult.name}
                fname={searchResult.fname}
                cnic={searchResult.cnic}
                address={searchResult.address}
                license={searchResult.license}
                weapon={searchResult.weapon}
                cartidges={searchResult.cartidges}
                issue={searchResult.issue}
                valid={searchResult.valid}
              />
            ) : (
              <>
                <p className="text-[14px] text-gray-500 p-5">Enter application ID in search-bar and check the latest status of your application.<br /> i.e., <span className='font-bold text-red-500'>ARLXXXXXXX-XXXXXXX</span></p>
                <hr />
                <p className="text-[14px] text-gray-500 p-5">Or Verify the Weapon license by entering the <span className='font-bold text-red-500'> License #</span></p>
              </>
            )}
          </div>

          <div className='flex items-center justify-between mt-10'>
            <hr className='border-0 h-[1px] bg-[#c2c2c2] w-[45%]' />
            <p className='text-[#808080]'>OR</p>
            <hr className='border-0 h-[1px] bg-[#c2c2c2] w-[45%]' />
          </div>

          <div className='mt-8 flex items-center justify-center'>
            <button onClick={loginpage} className='px-10 py-2 bg-[#0ddbb9] ml-3 text-[15px] font-medium rounded-lg flex items-center justify-center'>
              <MdLogin className='mr-2 text-[18px]' />Login
            </button>
            <button onClick={handelClick} className='px-10 py-2 bg-[#fcd53b] ml-3 text-[15px] font-medium rounded-lg flex items-center justify-center'>
              <FaUserPlus className='mr-2 text-[18px]' />Register
            </button>
          </div>
        </div>

        <div className='bg-white w-[100%] md:w-[50%]'>
          <img src={right_img} alt="" className='w-[100%]' />
        </div>
      </div>
    </div>
  );
}
