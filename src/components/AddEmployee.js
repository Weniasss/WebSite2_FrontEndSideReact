import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'
import Navbar from './organisms/Navbar';

const AddEmployee = () => {

	const [employee,setEmployee] = useState({
		id:"",
		firstName:"",
		lastName:"",
		emailId:"",
		technologyTask:"",
	});

	const navigave = useNavigate();

	const handleChange = (e) => {
		const value = e.target.value;
		setEmployee({...employee,[e.target.name]:value});
	};

	const saveEmployee = (e) => {
		e.preventDefault();
		EmployeeService.saveEmployee(employee).then((response) => {
			console.log(response);
			navigave("/employeeList");
		}).catch((error) => {
			console.log(error);
		})
	};

	const reset = (e) => {
		e.preventDefault();
		setEmployee({
		id:"",
		firstName:"",
		lastName:"",
		emailId:"",
		technologyTask:"",
	});
	};

  return (
	<section class="text-gray-600 body-font  bg-cover bg-img h-screen">
	<div class="container px-5 py-8 mx-auto">
	  <div class="flex flex-col text-center w-full mb-6">
		 <h1 class="sm:text-7xl text-4xl font-extrabold title-font mb-7 text-gray-900 tracking-widest">Create<span className='text-white'>Task </span></h1>
		 <p class="lg:w-2/3 mx-auto leading-relaxed text-2xl font-semibold">Create your project / task and we solve it !</p>
	  </div>
	  <div class="lg:w-1/2 md:w-2/3 mx-auto">
		 <div class="flex flex-wrap -m-2">
			<div class="p-1 w-1/2">
			  <div class="relative">
				 <label for="name" class="leading-7 text-1xl font-semibold text-gray-600">User name</label>
				 <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
			  </div>
			</div>
			<div class="p-1 w-1/2">
			  <div class="relative">
				 <label for="email" class="leading-7 text-1xl font-semibold text-gray-600">Title project</label>
				 <input type="text" id="email" name="email" class="w-full bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
			  </div>
			</div>
			<div class="p-1 w-full">
			  <div class="relative">
				 <label for="message" class="leading-7 text-1xl font-semibold text-gray-600">Technology</label>
				 <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
			  </div>
			</div>
			<div class="p-1 w-full">
			  <div class="relative">
				 <label for="message" class="leading-7 text-1xl font-semibold text-gray-600">Description</label>
				 <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
			  </div>
			</div>
			<div className="relative px-10 xl:px-0 container mx-auto md:flex items-center gap-8">
					  <div className="text-color w-full md:w-4/4 pt-12 lg:pt-32 xl:pt-5 px-5  text-center">
							<a class="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring " href="/download">
								 <span class="absolute inset-0 border border-stone-600 group-active:border-stone-500"></span>
								 <span class="tracking-widest text-2xl block px-10 py-3 transition-transform bg-stone-600 border border-stone-600 active:border-stone-500 active:bg-stone-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
									  Submit
								 </span>
							</a>
					  </div>
				 </div>

		 </div>
	  </div>
	</div>
 </section>



  )
}

export default AddEmployee