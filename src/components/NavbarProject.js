import React, { useEffect, useState } from 'react'

import { faCube } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

const NavbarProject = () => {
  
  const navigate = useNavigate();

  const [projectExample,setProjectExamples] = useState(null);

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/ProjectProgress/${id}`);
  };

  
   
  return (
<nav class="container flex justify-around py-2 mx-auto bg-zinc-700 opacity-80">
  <div class="flex items-center">
    <h3 class="text-4xl font-medium text-white"><FontAwesomeIcon icon={faCube} /></h3>
  </div>

  <div class="font-mono font-bold text-1xl items-center hidden space-x-14 lg:flex text-white">
    <a onClick={() => navigate("/addReview")} href="" className='tracking-wide'>Content</a>
    <a href="" className='tracking-wide'>Code / Files</a>
	 <a onClick={() => navigate("/addReview")}  href="/a" className='tracking-wide'>Progress</a>
    <a href="" className='tracking-wide'>History</a>
	 <a href="" className='tracking-wide'>Help</a>
  </div>

  <div class="font-mono font-bold flex text-1xl items-center space-x-4 text-white">
  	<a href="" className='tracking-wide'>Usefull info</a>
  </div>

</nav>
  )
}

export default NavbarProject