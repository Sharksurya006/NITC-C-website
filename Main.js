import React from 'react';
import { motion } from 'framer-motion';
import logo from '../images/bodylogo.jpg';
import { CiSearch } from "react-icons/ci";
const Main = () => {
  return (
    <div>
      <div className="flex flex-col pt-9 lg:pt-6 lg:flex-row">
        <div className="flex flex-1 order-2 justify-center pt-[50px]">
          <img
            className="bg-cover max-width-full"
            src={logo}
            alt="Logo"
          />
        </div>
		<div className="flex lg:hidden md:hidden justify-center items-center">
		<div className="lg:hidden md:hidden flex justify-center items-center md:order-1 lg:order-1">
				<input className="py-2 px-2 rounded-l-lg w-[280px] mb-6 border-solid border-black border-2" placeholder="Search"/>
		</div>
		<div className="bg-white py-2 px-2 rounded-e-lg flex justify-center items-center mb-6 border-solid border-black border-2">
				<button className="text-black text-xl"><CiSearch className="text-black text-2xl" /></button>
				</div>
		</div>
        <motion.div
          className="flex-1 flex flex-col justify-center items-center order-1"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
          }}
        >
          <motion.h1
            className="text-3xl lg:text-6xl font-semibold text-blue-500"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 , transition: { duration: 6}} }}
          >
            NIT-C Searching
          </motion.h1>
          <br />
          <motion.h1
            className="text-3xl lg:text-6xl font-semibold"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 , transition: { duration: 6 }} }}
          >
            team is here to help!!
          </motion.h1>
        </motion.div>
      </div>

      <div className="flex mt-11 flex-col gap-5 lg:flex-row md:flex-row">
        <div className="flex-1 flex justify-center items-center">
          <button className="px-[40px] py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-lg transition-transform transition-colors duration-500 ease-in-out hover:bg-orange-300 hover:scale-105">
            I have found something
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <button className="px-[48px] py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-lg hover:scale-105 duration-500 ease-in-out hover:bg-orange-300">
            I have lost something
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;