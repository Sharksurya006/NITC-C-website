import React, { useState } from 'react';
import logo from '../images/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  let navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogin = () => {
    navigate('/login')
    setEmail('user@nitc.ac.in');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="flex justify-around items-center py-3 bg-blue-500">
      <div>
        <img src={logo} className="h-[60px]" alt="logo" />
      </div>

   
      <div>
        <ul className="hidden lg:flex lg:justify-evenly lg:items-center lg:gap-4">
          <li className="font-semibold text-lg text-white hover:text-orange-500"><button onClick={() => navigate('/')}>Home</button></li>
          <li className="font-semibold text-lg text-white hover:text-orange-500"><button onClick={() => navigate('/contactus')}>Contact Us</button></li>
          <li className="font-semibold text-lg text-white hover:text-orange-500"><button onClick={() => navigate('/aboutus')}>About Us</button></li>
        </ul>
      </div>

      
      <div className="flex gap-4 items-center">
        <div className="lg:hidden md:order-2 flex items-center">
          
          {isLoggedIn && (
            <span className="text-white text-sm ml-2">{email}</span>
          )}
          <RxHamburgerMenu
            className="text-3xl text-white cursor-pointer md:ml-2 ml-2"
            onClick={toggleSidebar}
          />
        </div>

        
        <div className="hidden md:flex md:order-1 lg:order-2 items-center">
          <input className="py-2 px-2 rounded-l-lg focus:outline-none" type="text" placeholder="Search" />
          <div className="bg-white py-2 px-2 rounded-e-lg md:py-[7px] lg:py-[7px]">
            <button className="text-black text-xl"><CiSearch /></button>
          </div>
        </div>

        <div className="hidden lg:flex items-center lg:order-2 gap-4">
          {isLoggedIn ? (
            <>
              <span className="text-white font-semibold">{email}</span>
              <button onClick={handleLogout} className="bg-violet-950 rounded-md px-3 py-2 font-semibold text-white">Logout</button>
            </>
          ) : (
            <>
              <button onClick={handleLogin} className="bg-violet-950 rounded-md px-3 py-2 font-semibold text-white">Login</button>
              <button onClick={goToSignup} className="bg-violet-950 rounded-md px-3 py-2 font-semibold text-white">Sign up</button>
            </>
          )}
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleSidebar}>
          <div
            className="fixed top-0 right-0 w-2/3 md:w-1/2 h-full bg-gradient-to-l from-violet-900 to-indigo-700 z-30 p-5 transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <AiOutlineClose
              className="text-3xl text-white cursor-pointer mb-6"
              onClick={toggleSidebar}
            />
            <ul className="flex flex-col gap-6 items-center pt-10 text-white">
              <li className="font-semibold text-lg hover:text-blue-400"><button onClick={() => navigate('/')}>Home</button></li>
              <li className="font-semibold text-lg hover:text-blue-400"><button onClick={() => navigate('/contactus')}>Contact Us</button></li>
              <li className="font-semibold text-lg hover:text-blue-400"><button onClick={() => navigate('/aboutus')}>About Us</button></li>
              {isLoggedIn ? (
                <li className="font-semibold text-lg text-white">{email}</li>
              ) : (
                <>
                  <li className="font-semibold text-lg hover:bg-gradient-to-r from-orange-400 to-red-500 px-6 py-2"><button onClick={handleLogin}>Login</button></li>
                  <li className="font-semibold text-lg"><button className="hover:bg-gradient-to-r from-orange-400 to-red-500 px-6 py-2" onClick={goToSignup}>Sign up</button></li>
                </>
              )}
              {isLoggedIn && (
                <li className="font-semibold text-lg">
                  <button onClick={handleLogout} className="px-6 py-2 bg-gradient-to-r from-orange-400 to-red-500">Logout</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

