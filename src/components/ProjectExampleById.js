//tailwind
import React, { useEffect, useState } from 'react'
import ProjectExampleService from '../services/ProjectExampleService'
import { useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';


import { faGit } from '@fortawesome/free-solid-svg-icons';

import NavbarProject from './NavbarProject';

import { Paper} from '@material-ui/core'

const ProjectExampleById = () => {

	const navigate = useNavigate();

	const { id } = useParams();

	const [projectExamples,setProjectExamples] = useState({
		id: id,
		titleProject:"",
		technologyProject:"",
		projectDescription:"",
	});

	const MainPage = (e) => {
		e.preventDefault();
		navigate('/');
	}

	const ProgressProject = (e, id) => {
		e.preventDefault();
		navigate(`/ProjectProgress/${id}`);
	 };

	 const CodeProject = (e, id) => {
		e.preventDefault();
		navigate(`/ProjectCode/${id}`);
	 };

	const HistoryProject = (e, id) => {
		e.preventDefault();
		navigate(`/ProjectHistory/${id}`);
	 };

	 const HelpProject = (e, id) => {
		e.preventDefault();
		navigate(`/ProjectHelp/${id}`);
	 };



	const handleChange = (e) => {
		const value = e.target.value;
		setProjectExamples({...projectExamples,[e.target.name]:value});
	};

	useEffect(() => {
		const fetchData = async () => {
			try{
				const response = await ProjectExampleService.getProjectExamplesById(projectExamples.id);
				setProjectExamples(response.data);
			} catch (error){
				console.log(error);
			}
		};
		fetchData();
	},[]);

  return (
	  <div>


<nav class="bg-white shadow dark:bg-gray-800 mb-5">
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    <a href="#" class="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-stone-500 mx-1.5 sm:mx-6">home</a>
                    <a onClick={() => navigate("/addEmployee")} href="" class="text-2xl font-bold border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-stone-500 mx-1.5 sm:mx-6">Add task</a>
                    
                    <a href="#" class="text-2xl font-bold border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-stone-500 mx-1.5 sm:mx-6">Blog</a>
                    <a href="#" class="text-2xl font-bold border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-stone-500 mx-1.5 sm:mx-6">user profile</a>
						  <a href="#" class="text-2xl font-bold border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-stone-500 mx-1.5 sm:mx-6">Log in</a>
                    <a href="#" class="text-2xl font-bold border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-stone-500 mx-1.5 sm:mx-6">Log out</a>
                </div>
            </nav>



				<nav aria-label="breadcrumb" className="w p-2 mx-5 bg-gray-100 rounded-lg mb-5 bg-opacity-40">
	<ol className="flex h-8 space-x-2">
		<li className="flex items-center">
			<a rel="noopener noreferrer" href="#" title="Back to homepage" className="hover:underline">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 pr-1 dark:text-coolGray-400">
					<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
				</svg>
			</a>
		</li>
		<li className="flex items-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-3 h-3 mt-1 transform rotate-90 fill-current dark:text-coolGray-600">
				<path d="M32 30.031h-32l16-28.061z"></path>
			</svg>
			<a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline text-lg font-normal">Home</a>
		</li>
		<li className="flex items-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-3 h-3 mt-1 transform rotate-90 fill-current dark:text-coolGray-600">
				<path d="M32 30.031h-32l16-28.061z"></path>
			</svg>
			<a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline text-lg font-normal">Project#</a>
		</li>

	</ol>
</nav>

				

	<nav aria-label="breadcrumb" className="w p-2 mx-5 bg-opacity-60">
	<div class="grid grid-cols-3 gap-4">
		
	<div class="col-span-2 bg-gray-100 rounded-lg bg-opacity-40">
		<div className='mb-5 text-4xl tracking-widest grid place-items-left p-5 '>
		<p className='text-3xl  text-gray-900 font-normal font-mono  text-left pb-4 '>Info about project </p>
				<p className='text-2xl  text-gray-900 font-normal font-mono  text-left pb-2 border-t-2 border-dashed'>Project name : <span className='font-bold text-xl'>{projectExamples.titleProject}</span></p>
				<p className='text-2xl  text-gray-900 font-normal font-mono  text-left pb-2'>Technology : <span className='font-bold text-xl'>{projectExamples.projectDescription}</span></p>
				<p className='text-2xl  text-gray-900 font-normal font-mono  text-left pb-2 border-b-2 border-dashed'>Description : 
					<span className='font-bold text-sm'>
						{projectExamples.projectDescription}
					</span>
				</p>
		</div>
	</div>
	<div class="bg-gray-100 rounded-lg bg-opacity-40">
	<div className='mb-5 text-4xl tracking-widest grid place-items-left p-5 '>
		<p className='text-3xl  text-gray-900 font-normal font-mono  text-left pb-4 '>Info status project </p>
				<p className='text-2xl  text-gray-900 font-normal font-mono  text-left pb-2 border-t-2 border-dashed'>Code status : <span className='font-bold text-xl text-green-600'>Done</span></p>
				<p className='text-2xl  text-gray-900 font-normal font-mono  text-left pb-2'>Admin check : <span className='font-bold text-xl text-green-600'>Done</span></p>
				<p className='text-2xl  text-gray-900 font-normal font-mono  text-left pb-3 border-b-2 border-dashed'>Client expectation :  <span className='font-bold text-xl text-green-600'>Done</span></p>
				<p className=' flex text-2xl  text-gray-900 font-normal font-mono  text-left pt-2 p-2'>Source code: 				
				<a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-coolGray-900">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-13 h-13 ">
						<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
					</svg>
				</a></p>
				<p className=' flex text-2xl  text-gray-900 font-normal font-mono  text-left pt-2 p-2 border-b-2 border-dashed'>Score project: 	
				<div className="flex items-center space-x-2 text-yellow-500">
				<span className="text-xl font-bold"> 4.5 </span>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>

		</div>
		</p> 
				
		</div>
	</div>
	</div>



	</nav>

	{/* <div class="grid grid-cols-3 gap-4"> */}
  {/* <div class="bg-gray-100">Info about projectInfo about projectInfo about projectInfo about projectInfo about projectInfo about project</div> */}

  {/* <div class="col-span-2 bg-gray-100">04Info about projectInfo about projectInfo about projectInfo about projectInfInfo about projectInfo about projectInfo about projectInfo about projectInfInfo about projectInfo about projectInfo about projectInfo about projectInfInfo about projectInfo about projectInfo about projectInfo about projectInf</div>
  <div class="...">05</div>

</div> */}


		  	{/* <div className='mt-5 text-7xl tracking-widest grid place-items-center font-bold my-3'>
				<p className='font-mono title border-b-4'>Content</p>
			</div> */}

{/* 
			<div class="grid md:grid-cols-2 p-5">
			<Paper className='grid bg-digit-img' elevation={5} style={{margin:'25px 20px',width:700,margin:'20px auto'}}>
  <div >

    <br></br>
    <div>   */}

  {/* <div className='grid place-items-center '>
    <div class=" px-4">
      <div class='relative m-2 shadow-lg flex bg-white border-4 opacity-95'>

        <div class='flex-1 card-block relative'>
          <div class="p-7">
			 <div className='py-2'>
            <h2 class='font-mono font-bold text-3xl mb-3 tracking-widest border-b-4'>{projectExamples.titleProject}</h2>
				</div>
				<div className='py-2'>
              <span className='font-mono font-bold text-2xl'>Technology :</span ><p> <span className='font-mono text-2xl'>{projectExamples.technologyProject}</span></p>
            </div>
            <div className='py-2'>
              <span className='font-mono font-bold text-2xl'>Description : </span> <span className='font-mono text-2xl'>{projectExamples.projectDescription}</span>
            </div>
            <div className='items-center justify-center h-10 w-full my-6 space-x-6'>
				<button className='font-mono rounded text-black font-semibold bg-gray-300 hover:bg-gray-500 hover:text-white py-2 px-6 border-2 border-gray-200'>
					   Change
				    </button>
					 <button className='font-mono rounded text-black font-semibold bg-red-300 hover:bg-red-500 hover:text-white py-2 px-6 border-2 border-gray-200'>
					   Delete
				    </button>

			</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
{/* <div><p>{projectExamples.titleProject} {projectExamples.technologyProject} {projectExamples.projectDescription}</p></div> */}



 
{/* <br></br>
  </div>
  
  </Paper> */}


  {/* <Paper className='grid bg-digit-img' elevation={5} style={{margin:'25px 20px',width:700,margin:'20px auto'}}>
  <div>

    <br></br>
    <div>  

  <div className='grid place-items-center '>
    <div class=" px-4">
      <div class='relative m-2 shadow-lg flex bg-white border-4 opacity-95'>

        <div class='flex-1 card-block relative'>
          <div class="p-7">
			 <div className='py-2'> */}
            {/* <h2 class='font-mono font-bold text-3xl mb-3 tracking-widest border-b-4'>{projectExamples.titleProject}</h2> */}
				{/* </div>
				<div className='py-2'>
              <span className='font-mono font-bold text-2xl'>Technology :</span ><p> <span className='font-mono text-2xl'>{projectExamples.technologyProject}</span></p>
            </div>
            <div className='py-2'>
              <span className='font-mono font-bold text-2xl'>Description : </span> <span className='font-mono text-2xl'>{projectExamples.projectDescription}</span>
            </div>
				<div className='py-2'>
              <span className='font-mono font-bold text-2xl'>Description : </span> <span className='font-mono text-2xl'>{projectExamples.projectDescription}</span>
            </div>
            <div className='items-center justify-center h-10 w-full my-6 space-x-6'>

			</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
{/* <div><p>{projectExamples.titleProject} {projectExamples.technologyProject} {projectExamples.projectDescription}</p></div> */}



 
{/* <br></br>
  </div>
  
  </Paper>
  </div> */}
		  {/* <div className='text-4xl'>
		  <FontAwesomeIcon className='text-green-600' icon={faLaptopCode} />
		  <FontAwesomeIcon className='text-red-600' icon={faLaptopCode} />
		  <FontAwesomeIcon className='text-yellow-400' icon={faLaptopCode} />
		  <FontAwesomeIcon className='text-black' icon={faLaptopCode} />
			</div>
			<br></br>
			<div className='text-4xl'>
		  <FontAwesomeIcon className='text-green-600' icon={faCheckToSlot} />
		  <FontAwesomeIcon className='text-red-600' icon={faCheckToSlot} />
		  <FontAwesomeIcon className='text-yellow-400' icon={faCheckToSlot} />
		  <FontAwesomeIcon className='text-black' icon={faCheckToSlot} />
			</div>

			<div className='text-4xl'>
		  <FontAwesomeIcon className='text-green-600 m-2' icon={faUserLarge} />
		  <FontAwesomeIcon className='text-red-600' icon={faUserLarge} />
		  <FontAwesomeIcon className='text-yellow-400' icon={faUserLarge} />
		  <FontAwesomeIcon className='text-black' icon={faUserLarge} />
			</div>

			<div className='flex text-4xl bg-slate-100'>
				<FontAwesomeIcon className='text-green-600 m-4' icon={faLaptopCode} />
				<FontAwesomeIcon className='text-yellow-400 m-4' icon={faWindowRestore} />
				<FontAwesomeIcon className='text-black m-4' icon={faUserLarge} />
				<FontAwesomeIcon className='text-red-600 m-4' icon={faSquareCheck} />
			</div>

			<br></br>

			<h2 className='text-4xl font-bold'>Legenda :</h2> */}
  {/* <footer class="text-center lg:text-left bg-zinc-700 opacity-90 text-gray-600">

<div class="text-center p-4 bg-zinc-800 border-t-2 font-mono">
  <span className='text-white'>© 2021 Copyright:</span>
  <a class="text-white font-semibold" href="https://tailwind-elements.com/">Tailwind Elements</a>
</div>
</footer>
			 */}
		  
	 </div>
  )
}

export default ProjectExampleById