import React, { useState } from 'react';
import Add_Users from './Add_Users';
import Users from './Users/Users';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { LuUsers } from "react-icons/lu";

export default function Side_Bar() {
  const [active, setActive] = useState('Add Users');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (active) {
      case 'Add Users':
        return <Add_Users />;
      case 'Users':
        return <Users />;
      default:
        return <div>Select a Section</div>;
    }
  };

  return (
    <div className="flex h-full w-full">
      <div className="py-3 px-3 block lg:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <FaBars className=" text-2xl cursor-pointer" />
      </div>

      <div className={`fixed lg:static lg:w-64 bg-black text-white h-full ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-hidden lg:block transition-all duration-300 z-10`}>
        <div  onClick={() => setIsSidebarOpen(!isSidebarOpen)}><IoClose className='block lg:hidden absolute text-3xl right-3 top-4'  /></div>
        <div className="p-4">
          <h1
            className={`cursor-pointer mt-20 py-2 px-4 flex gap-2 ${active === 'Add Users' ? 'font-bold bg-white bg-opacity-20 rounded-lg' : ''}`}
            onClick={() => { setActive('Add Users'); setIsSidebarOpen(false); }}
          >
            <MdOutlineAdminPanelSettings className='text-2xl' />Add Users
          </h1>
          <h1
            className={`cursor-pointer mt-10 py-2 px-4 flex gap-2 ${active === 'Users' ? 'font-bold bg-white bg-opacity-20 rounded-lg' : ''}`}
            onClick={() => { setActive('Users'); setIsSidebarOpen(false); }}
          >
           <LuUsers className='text-2xl' />Users
          </h1>
        </div>
        <hr className='w-[90%] m-auto' />
      </div>

      <div className="p-4 w-full lg:ml-56">
        {renderContent()}
      </div>
    </div>
  );
}
