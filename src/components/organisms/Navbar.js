import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
  return (
	 <div>
		<nav class="bg-white shadow dark:bg-gray-800 mb-10">
			<div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
				<a href="#" class="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-stone-500 mx-1.5 sm:mx-6">home</a>
				<a onClick={() => navigate("/addEmployee")} href="" class="text-2xl font-bold border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-stone-500 mx-1.5 sm:mx-6">Add task</a>
							
				<a onClick={() => navigate("/privacyPolicy")} href="#" class="text-2xl font-bold border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-stone-500 mx-1.5 sm:mx-6">Privacy policy</a>
				<a onClick={() => navigate("/userProfile")} href="#" class="text-2xl font-bold border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-stone-500 mx-1.5 sm:mx-6">User profile</a>
				<a onClick={() => navigate("/logIn")} class="text-2xl font-bold border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-stone-500 mx-1.5 sm:mx-6">Log in</a>
				<a href="#" class="text-2xl font-bold border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-stone-500 mx-1.5 sm:mx-6">Log out</a>
			</div>
		</nav>
	 </div>
  )
}

export default Navbar