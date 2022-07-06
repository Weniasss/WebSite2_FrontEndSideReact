import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import "./EmployeeList.css";
import Employee from "./Employee";

import img from "../components/image2.jpg";
import ProjectExampleService from "../services/ProjectExampleService";
import StatsSection from "./organisms/Stats/StatsSection";
import ReviewService from "../services/ReviewService";
import Hero from "./organisms/Hero";
import Title from "./atoms/Title";
import StepSection from "./organisms/StepSection";
import ServiceSection from "./organisms/ServiceSection";
import ProjectCardsSection from "./organisms/ProjectCardsSection";
import ButtonAddReview from "./atoms/Reviews/ButtonAddReview";
import ReviewSection from "./organisms/ReviewSection";
import FooterSection from "./organisms/FooterSection";

import Paper from '@mui/material/Paper';


const EmployeeList = () => {
  const navigave = useNavigate();

  const paperStyle = { padding: "50px 20px", width: 900, margin: "20px auto" };

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [projectExamples, setProjectExamples] = useState(null);

  const [reviewExamples, setReviewExamples] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProjectExampleService.getProjectExamples();
        const response2 = await ReviewService.getReviews();
        setProjectExamples(response.data);
        setReviewExamples(response2.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/ProjectExample/${id}`);
  };

  // const deleteEmployee = (e,id) => {
  // 	e.preventDefault();
  // 	EmployeeService.deleteEmployee(id)
  // 	.then ((res) => {
  // 		if(employees){
  // 			setEmployees((prevElement) =>{
  // 				return prevElement.filter((employee) => employee.id != id);
  // 			})
  // 		}
  // 	})
  // };

  return (
    <div>
      <Hero />

      <Title text="Services" />

      <ServiceSection />

      <Title text="Steps" />

      <StepSection />

      <Title text="Example Projects" />

      <ProjectCardsSection />

      <StatsSection />

      {/* <div>
    {projectExamples.map((projectExample) => (

                <p>{projectExample.id}
                {projectExample.titleProject}</p>
              ))}
    </div> */}

      {/* <Paper elevation={5} style={{margin:'25px 20px',width:1200,margin:'20px auto'}}>
  <div className='grid bg-digit-img'>

    <br></br>
    {!loading && (
    <div>  
      {projectExamples.map((projectExample) => (
  <div className='grid place-items-center '>
    <div class=" px-4">
      <div class='relative m-2 shadow-lg flex bg-white border-4 opacity-95'>
        <div class=''>
          <img alt='' class='border-r-4 w-96 h-96 block mx-auto' src={img}/>
        </div>
        <div class='flex-1 card-block relative'>
          <div class="p-7">
            <h2 class='font-mono font-bold text-3xl mb-3 tracking-widest '>{projectExample.titleProject}</h2>
            <div className='py-1'>
              <span className='font-mono font-bold text-2xl border-t-4'>Technology :</span > <span className='font-mono text-2xl'>{projectExample.projectDescription}</span>
            </div>
            <div className='py-1'>
              <span className='font-mono font-bold text-2xl'>Description : </span> <span className='font-mono text-2xl'>{projectExample.projectDescription}</span>
            </div>
            <div className='items-center justify-center h-10 w-full my-4 space-x-6'>
				    <button onClick={(e, id) => editEmployee(e, projectExample.id)}  className='font-mono rounded text-black font-semibold bg-gray-300 hover:bg-gray-500 hover:text-white py-2 px-6 border-2 border-gray-200'>
					    Read more
				    </button>

			</div>
          </div>
        </div>
      </div>
    </div>
  </div>
))}
</div>
    )}

      </div>
  </Paper>
  <br></br> */}

      <Title text="Reviews" />

      <ButtonAddReview />

      <ReviewSection />

      <FooterSection />
    </div>
  );
};

export default EmployeeList;
