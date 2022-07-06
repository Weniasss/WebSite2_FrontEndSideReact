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


import NavbarProject from './NavbarProject';

import { Paper} from '@material-ui/core'

const ProjectProgress = () => {
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

	const ContentProject = (e, id) => {
		e.preventDefault();
		navigate(`/ProjectExample/${id}`);
	 };

   const CodeProject = (e, id) => {
		e.preventDefault();
		navigate(`/ProjectCode/${id}`);
	 };



	const ProgressProject = (e, id) => {
		e.preventDefault();
		navigate(`/ProjectProgress/${id}`);
	 };

	const HistoryProject = (e, id) => {
		e.preventDefault();
		navigate(`/ProjectHistory/${id}`);
	 };

	 const HelpProject = (e, id) => {
		e.preventDefault();
		navigate(`/ProjectHelp/${id}`);
	 };

  return (
	 <div>
     		<nav class="container flex justify-around py-2 mx-auto bg-zinc-700 opacity-80 ">
  			  <div class="flex items-center">
    			  <h3 class="text-4xl font-medium text-white"><FontAwesomeIcon icon={faCube} /></h3>
  			  </div>

  			  <div class="font-mono font-bold text-1xl items-center hidden space-x-14 lg:flex text-white">
    			  <a onClick={(e, id) => ContentProject(e, projectExamples.id)} href="" className='tracking-wide'>Content</a>
    			  <a onClick={(e, id) => CodeProject(e, projectExamples.id)} href="" className='tracking-wide'>Code / Files</a>
				    <a onClick={(e, id) => ProgressProject(e, projectExamples.id)}  href="" className='tracking-wide'>Progress</a>
    			  <a onClick={(e, id) => HistoryProject(e, projectExamples.id)}   href="" className='tracking-wide'>History</a>
	 			    {/* <a onClick={(e, id) => HelpProject(e, projectExamples.id)}   href="" className='tracking-wide'>Help</a> */}
  			  </div>

          <div class="font-mono font-bold flex text-2xl items-center space-x-4 text-white  ">
  	        <a onClick={(e) => MainPage(e)} href="" className='tracking-wide'>Home</a>
          </div>
        </nav>


        <div className='mt-5 text-7xl tracking-widest grid place-items-center font-bold my-3'>
				  <p className='font-mono title border-b-4'>Progress</p>
			  </div>
        
  

<div class="grid grid-rows-3 grid-flow-col m-10">

<div class="col-span-1">
  <Paper elevation={5} style={{width:310,margin:'20px auto'}}>
  <div className='text-4xl bg-slate-100 items-center '>
				<FontAwesomeIcon className='text-green-600 m-5' icon={faLaptopCode} />
				<FontAwesomeIcon className='text-green-600 m-5' icon={faWindowRestore} />
				<FontAwesomeIcon className='text-green-600 m-5' icon={faUserLarge} />
				<FontAwesomeIcon className='text-green-600 m-5' icon={faSquareCheck} />
			</div>
          </Paper>

  </div>

  <div class="row-span-2 col-span-1">
  {/* <div className='mt-5 text-5xl tracking-widest grid place-items-center font-bold my-3'>
				  <p className='font-mono title border-b-4'>Programm status</p>
			  </div> */}
  <Paper elevation={5} style={{width:500,height:170,margin:'20px auto'}}>
    <div className='bg-slate-100 border-4'>
    <div className='text-3xl tracking-widest grid place-items-center font-bold'>
			<p className='font-mono title border-b-4 m-5'>Status Project :</p>
		</div>  
    </div>
    <div className='text-4xl tracking-widest grid place-items-center font-bold'>
			<p className='font-mono title border-b-4 m-5 text-green-600'>DONE</p>
		</div>     
  </Paper>

  </div>
  <div class="row-span-3">

  <Paper elevation={5} style={{width:800,margin:'20px auto'}}>
  <div className='bg-slate-100 border-4'>
    <div className='text-4xl tracking-widest grid place-items-center font-bold'>
			<p className='font-mono title border-b-4 m-5'>Description :</p>
		</div>  
    </div>
    <div className='text-2xl m-4 font-bold font-mono '>
        <div className='mx-8 m-5'>

        <ul class="list-none">
        
          <li >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
           of Lorem Ipsum.
          </li>

          </ul>
      </div>


    </div>
          </Paper>

  </div>


</div>
{/* <div className='mt-5 text-6xl tracking-widest grid place-items-center font-bold my-3'>
				  <p className='font-mono title border-b-4'>Gallery</p>
			  </div>

<div class="grid grid-rows-1 grid-flow-col gap-1 ">
  
<Paper elevation={5} style={{margin:'25px 20px',width:1000,height:640,margin:'20px auto'}}>
            <div className='grid bg-digit-img'>
              <div>  
                <div className='grid place-items-center '>
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
              </div>
            </div>
          </Paper>
</div>
         */}

        
   </div>
  )
}

export default ProjectProgress