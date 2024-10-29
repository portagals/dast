import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import dip from "../../assets/mid.png";

function Login({ setRole }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = async () => {
        
        if (username === "admin@example.com" && password === "admin123") {
            setRole("admin"); 
            navigate('/admin'); 
        } else {
            alert('Invalid username or password');
        }
    }

    return (
        <div className="flex justify-center pt-20 bg-gray-100 w-full h-full ">
            <div className="bg-white shadow-md p-10 rounded-lg">
                <div className="flex justify-center bg-cover"><img src={dip} alt="" /></div>
                <div className="flex text-2xl font-medium justify-center pt-5"><h1>Admin Login</h1></div>
                <div>
                    <h1 className="relative text-left font-bold pt-3">Username/Email</h1>
                    <input
                        className="pl-3 pt-2 pb-2 w-96 shadow-lg border-solid border-gray-300 border rounded-md"
                        type="text"
                        placeholder="Username"
                        onChange={handleUsernameChange}
                    />
                    <h1 className="relative text-left font-bold pt-6">Password</h1>
                    <input
                        className="pl-3 pt-2 pb-2 w-96 shadow-lg border-solid border-gray-300 border rounded-md"
                        type="password"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                    />
                    <div className="flex">
                        <input type="checkbox" /><h1 className="font-bold text-green-600 pl-1">Remember Me</h1>
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <button onClick={handleLogin} className="bg-green-600 p-2  pl-5 pr-5 text-white rounded-lg">Sign in</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
