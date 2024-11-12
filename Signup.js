import React, { useState } from 'react';
import logo from '../images/Registerlogo.jpg';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!email.endsWith("@nitc.ac.in")) {
      newErrors.email = "Must be institute mail id";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    else if(password.length < 8){
      newErrors.password = "password must be atleast 8 characters"
    }

    if (Object.keys(newErrors).length === 0) {
       alert("Form submitted successfully");
       navigate('/')
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex flex-1 flex-col lg:flex-row md:flex-row justify-center items-center">
      <div className="flex justify-center align-center w-full md:w-[60%] lg:w-[60%]">
        <img className="hidden md:block ml-6 w-full min-h-screen" src={logo} alt="logo" />
      </div>
      <div className="flex-1 flex ml-6 lg:ml-0 md:ml-0 md:[40%] lg:w-[40%] min-h-screen w-full justify-center items-center bg-gradient-to-br from-orange-400 to-red-500">
        <div className="flex flex-col gap-4 justify-center items-center w-[400px] h-[500px] md:w-[350px] border-solid border-2 border-blue-500 rounded-lg bg-white p-4">
          <h1 className="text-2xl text-violet-600 font-bold">Sign up Here</h1>
          
          <input
            className="w-[300px] py-2 px-2 border-solid border-2 border-black rounded-sm"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          
          <input
            className="w-[300px] py-2 px-2 border-solid border-2 border-black rounded-sm"
            type="text"
            placeholder="mail id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          
          <div className="relative w-[300px]">
            <input
              className="w-full py-2 px-2 border-solid border-2 border-black rounded-sm pr-10"
              type={passwordVisible ? "text" : "password"}
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              {passwordVisible ? (
                <FaEyeSlash className="text-gray-600" />
              ) : (
                <FaEye className="text-gray-600" />
              )}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          
          <button 
            onClick={handleSignup} 
            className="px-[130px] py-2 bg-blue-400 rounded-sm hover:bg-blue-600 text-lg font-medium"
          >
            Signup
          </button>
          
          <div className="flex gap-7 items-center">
            <h1>Want to login?</h1>
            <button onClick={goToLogin} className="px-6 py-2 bg-gradient-to-r from-orange-400 to-red-400">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
