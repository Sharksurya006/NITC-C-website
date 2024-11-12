import React from 'react'

const Footer = () => {
  return (
	<div className="flex flex-col gap-11 md:flex-row md:justify-between md:px-5 lg:flex-row lg:justify-around justify-center items-center mt-6 lg:mt-11 bg-violet-950 lg:h-[150px] h-[350px]">
		<div className="flex justify-center items-center font-semibold">
               <a href="https://nitc.ac.in/"><button className="px-[80px] bg-gradient-to-r from-orange-400 to-red-500 py-4 rounded-lg">Visit Nit-C Website</button></a>
		</div>
		<div className="flex flex-col text-2xl text-white lg:text-3xl lg:gap-3 md:gap-3">
            <h2>National Institute of</h2>
			<h2>technology Calicut</h2>
		</div>
		<div className="flex flex-col text-white">
			<h1>Address</h1>
			<h3>National Institute of Technology Calicut</h3>
			<h3>NIT Campus P.O 673601</h3>
			<h3>Kozhikode,India</h3>
		</div>
	</div>
  )
}

export default Footer