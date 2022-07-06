import React, { Component } from 'react'

export default class LogIn extends Component {

	constructor(props){
		super(props);
		this.state = this.i
	}

	initialState = {
		email:'' , password:''
	};

	creadentialChange = event => {
		this.setState ({
			[event.target.name] : event.target.value
		})
	}

  render() {
	const{email , password} = this.state;
	 return (
		<section class="text-gray-600 body-font  bg-cover bg-img h-screen">
		<div class="container px-5 py-20 mx-auto">
		  <div class="flex flex-col text-center w-full mb-6">
			 <h1 class="sm:text-7xl text-4xl font-extrabold title-font mb-8 text-gray-900 tracking-widest">Log<span className='text-white'>In </span></h1>
			 <p class="lg:w-2/3 mx-auto leading-relaxed text-2xl font-semibold pb-3">Create your account !</p>
		  </div>
		  <div class="lg:w-1/2 md:w-2/3 mx-auto ">
			 <div class="grid items-center justify-center">
				<div class="p-4  w-2/2">
				  <div class="relative">
					 <label for="name" class="leading-7 text-1xl font-semibold text-gray-600">User name</label>
					 <input
						type="text" 
						id="email" 
						name="email"
						value={email}
						onChange={this.creadentialChange} 
						class="w-full bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
				  
				  </div>
				</div>
				<div class="p-4 w-2/2">
				  <div class="relative">
					 <label for="name" class="leading-7 text-1xl font-semibold text-gray-600">Password</label>
					 <input 
					 	type="password" 
						id="password" 
						name="password"
						value={password}
						onChange={this.creadentialChange} 
						class="w-full bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
				  
				  </div>
				</div>
	
				
				
				<div className="relative px-10 xl:px-0 container mx-auto md:flex items-center gap-8 pb-3">
						  <div className="text-color w-full md:w-4/4 pt-12 lg:pt-32 xl:pt-5 px-5  text-center">
								<a class="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring " href="/download">
									 <span class="absolute inset-0 border border-stone-600 group-active:border-stone-500"></span>
									 <span class="tracking-widest text-2xl block px-10 py-3 transition-transform bg-stone-600 border border-stone-600 active:border-stone-500 active:bg-stone-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
										  Submit
									 </span>
								</a>
						  </div>
					 </div>
					 {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-xl font-semibold pb-3 text-center">You haven't account? <a href='' onClick={() => navigate("/regIn")} className='font-mono text-red-800 text-2xl'>Register </a></p> */}
			 </div>
			 
		  </div>
		</div>
	 </section>
	 )
  }
}



// import { ConstructionRounded } from '@mui/icons-material';
// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const LogIn = (props) => {

	
// 	const navigate = useNavigate();

// 	initialState = {
// 		email:'' , passowrd:''
// 	}

//   return (

//   )
// }

// export default LogIn