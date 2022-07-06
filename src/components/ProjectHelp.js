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

const ProjectHelp = () => {

	const navigate = useNavigate();

	const { id } = useParams();

	const [projectExamples,setProjectExamples] = useState({
		id: id,
		titleProject:"",
		technologyProject:"",
		projectDescription:"",
	});

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
    			  <a href="" className='tracking-wide'>Content</a>
    			  <a href="" className='tracking-wide'>Code / Files</a>
				    <a onClick={(e, id) => ProgressProject(e, projectExamples.id)}  href="" className='tracking-wide'>Progress</a>
    			  <a onClick={(e, id) => HistoryProject(e, projectExamples.id)}   href="" className='tracking-wide'>History</a>
	 			    <a onClick={(e, id) => HelpProject(e, projectExamples.id)}   href="" className='tracking-wide'>Help</a>
  			  </div>

          <div class="font-mono font-bold flex text-1xl items-center space-x-4 text-white">
  	        <a href="" className='tracking-wide'>Usefull info</a>
          </div>
        </nav>

		  <div className='mt-5 text-7xl tracking-widest grid place-items-center font-bold my-3'>
				  <p className='font-mono title border-b-4'>Help</p>
			  </div>
	 </div>
  )
}

export default ProjectHelp