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


import NavbarProject from './NavbarProject';

import { Paper} from '@material-ui/core'

const ProjectHistory = () => {

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

	const CodeProject = (e, id) => {
		e.preventDefault();
		navigate(`/ProjectCode/${id}`);
	 };


	const ContentProject = (e, id) => {
		e.preventDefault();
		navigate(`/ProjectExample/${id}`);
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
		      		<nav class="container flex justify-around py-2 mx-auto bg-zinc-700 opacity-80">
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
  	        <a onClick={(e) => MainPage(e)} href="./" className='tracking-wide'>Home</a>
          </div>
        </nav>

		  <div className='mt-5 text-7xl tracking-widest grid place-items-center font-bold my-3'>
				  <p className='font-mono title border-b-4'>History work</p>
			  </div>

			  <div class="grid grid-rows-1 grid-flow-col gap-1 ">
  
<Paper elevation={5} className="" style={{margin:'25px 20px',width:1000,margin:'20px auto'}}>
<ol class="relative border-l border-gray-200 dark:border-gray-700 m-10 ">                  
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-700">February 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
        <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li class="ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li>
</ol>
          </Paper>
</div>

	 </div>
  )
}

export default ProjectHistory