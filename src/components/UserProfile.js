import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {

	const navigate = useNavigate();

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
			<a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline text-lg font-normal">Profile#</a>
		</li>

	</ol>
</nav>

<nav aria-label="breadcrumb" className="w p-2 mx-5 bg-opacity-60">

	
	<div class="grid grid-cols-3 gap-x-10">
		
	<div class="col-span-1  bg-gray-100 rounded-lg bg-opacity-40 max-h-80 ml-5">
		<div className='mb-5 text-4xl tracking-widest grid place-items-center p-5 '>
		<p className='text-3xl  text-gray-900 font-normal font-mono  text-left  flex'> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>User</p>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-36 w-36 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
		</div>
	</div>


	<div class="col-span-2 row-span-1 bg-gray-100 rounded-lg bg-opacity-40 mr-5">
	<div className='mb-5 text-4xl tracking-widest grid place-items-left p-5 '>
		<p className='text-3xl  text-gray-900 font-normal font-mono  text-left pb-4 flex'><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg> About</p>
				<p className='text-2xl  text-gray-900 font-normal font-mono  text-left pb-2 border-t-2 border-dashed'>User Name : <span className='font-bold text-xl '>Weniasss</span></p>
				<p className='text-2xl  text-gray-900 font-normal font-mono  text-left pb-2'>User Email : <span className='font-bold text-xl '>233299@edu.p.lodz.pl</span></p>
				<p className='text-2xl  text-gray-900 font-normal font-mono  text-left pb-3 border-b-2 border-dashed'>User Password :  <span className='font-bold text-xl '>22112001</span></p>
		
		
				
		</div>
	</div>
	
	</div>
	



	</nav>

	<div class="col-span-2 row-span-2 bg-gray-100 rounded-lg bg-opacity-40 max-h-64 mx-12">
	<div className='mb-5 text-4xl tracking-widest grid place-items-left p-5 '>
		<p className='text-3xl  text-gray-900 font-normal font-mono  text-left pb-4 flex '> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
</svg>Projects </p>
<div class="overflow-x-auto">
  <table class="min-w-full text-sm divide-y divide-gray-200">
    <thead>
      <tr>
        <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
          <div class="flex items-center">
            Name
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 ml-1.5 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </th>
        <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
          <div class="flex items-center">
            Title
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 ml-1.5 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </th>
        <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
          <div class="flex items-center">
            Status
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 ml-1.5 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </th>

		  <th class="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
          <div class="flex items-center">
            Action
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 ml-1.5 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </th>
        
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-100">
      <tr>
        <td class="p-4 font-medium text-gray-900 whitespace-nowrap">
          John Doe
        </td>
        <td class="p-4 text-gray-700 whitespace-nowrap">Web App</td>
        <td class="p-4 text-gray-700 whitespace-nowrap">
          <strong
            class="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium"
          >
            Cancelled
          </strong>
        </td>
		  <td class="p-4 whitespace-nowrap space-x-5">
			  <strong className='bg-purple-100 text-purple-700 px-3 py-1.5 rounded text-xs font-medium"'>
			  Read more
			  </strong>
			  <strong className='bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium"'>
			  Delete
			  </strong>
        
        </td>

      </tr>


      <tr>

        <td class="p-4 font-medium whitespace-nowrap">Jane Doe</td>
        <td class="p-4 text-gray-700 whitespace-nowrap">Application for work</td>
        <td class="p-4 whitespace-nowrap">
          <strong
            class="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium"
          >
            Paid
          </strong>
        </td>
		  <td class="p-4 whitespace-nowrap space-x-5">
			  <strong className='bg-purple-100 text-purple-700 px-3 py-1.5 rounded text-xs font-medium"'>
			  Read more
			  </strong>
			  <strong className='bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium"'>
			  Delete
			  </strong>
        
        </td>
        
      </tr>
    </tbody>
  </table>
</div> 
	
				
		 </div> 
	 </div>

	 </div>
  )
}

export default UserProfile