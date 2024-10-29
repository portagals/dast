import React, { useState } from 'react';
import './App.css';
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Model from "./component/Model";
import Sidebar from "./component/Side_Bar";
import Login from './component/Users/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [active, setActive] = useState(false);
  const [role, setRole] = useState(null); // State to store the user role

  const handelClick = () => {
    setActive(true);
  }

  const handelClose = () => {
    setActive(false);
  }

  return (
    <Router>
      <div className="bg-[#f5f5f5]">
        {active && <Model handelClick={handelClose} />}
        <NavBar handelClick={handelClick} />
        <Routes>
          <Route path='/' element={<Main handelClick={handelClick} />} />
          <Route path='/login' element={<Login setRole={setRole} />} />
          {role === "admin" && (
            <Route path='/admin' element={<Sidebar />} />
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
