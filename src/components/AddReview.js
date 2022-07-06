import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

import './EmployeeList.css';

import ReviewService from '../services/ReviewService';

const AddReview = () => {
	const [review,setReview] = useState({
		id:"",
		userName:"",
		userRating:"",
		userComment:"",
	});

	const navigave = useNavigate();

	const handleChange = (e) => {
		const value = e.target.value;
		setReview({...review,[e.target.name]:value});
	};

	const saveReview = (e) => {
		e.preventDefault();
		ReviewService.saveReview(review).then((response) => {
			console.log(response);
			navigave("/employeeList");
		}).catch((error) => {
			console.log(error);
		})
	};

	const reset = (e) => {
		e.preventDefault();
		setReview({
			id:"",
			userName:"",
			userRating:"",
			userComment:"",
		});
	};

  return (
	  
	<section class="text-gray-600 body-font  bg-cover bg-img h-screen">
  <div class="container px-5 py-20 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-7xl text-4xl font-extrabold title-font mb-8 text-gray-900"> Conta<span className='text-white'>ct Us </span></h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-2xl font-semibold">Every opinion about out web site really important for us, thanks !</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-1xl font-semibold text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="userName"
              value={review.userName}
              onChange={(e) => handleChange(e)}
              class="w-full bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

            />
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-1xl font-semibold text-gray-600">Rating</label>
            <input
              name="userRating"
              value={review.userRating}
              onChange={(e) => handleChange(e)}
              type="number" id="email" class="w-full bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-1xl font-semibold text-gray-600">Message</label>
            <textarea
              name="userComment"
              value={review.userComment}
              onChange={(e) => handleChange(e)}
            id="message" class="w-full bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
		  <div className="relative px-10 xl:px-0 container mx-auto md:flex items-center gap-8">
                <div className="text-color w-full md:w-4/4 pt-12 lg:pt-32 xl:pt-12 px-5  text-center">
                    <button
                     onClick={saveReview}
                     class="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring " href="/download">
                        <span class="absolute inset-0 border border-stone-600 group-active:border-stone-500"></span>
                        <span class="tracking-widest text-2xl block px-10 py-3 transition-transform bg-stone-600 border border-stone-600 active:border-stone-500 active:bg-stone-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                            Submit
                        </span>
                    </button>
                </div>
            </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default AddReview