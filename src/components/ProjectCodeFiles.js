import React, { useEffect, useState } from 'react'

const ProjectCodeFiles = () => {
  const [menu, setMenu] = useState(false);
  return (
      <>
          <div className="relative h-screen ">
            <div className="absolute bg-cover bg-center w-full h-full inset-0 hidden md:block bg-img">
            </div>
            <nav class="bg-white shadow dark:bg-gray-800 mb-10">
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    <a href="#" class="text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-stone-500 mx-1.5 sm:mx-6">home</a>
                    <a href="#" class="text-2xl font-semibold border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-stone-500 mx-1.5 sm:mx-6">features</a>
                    <a href="#" class="text-2xl font-semibold border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-stone-500 mx-1.5 sm:mx-6">pricing</a>
                    <a href="#" class="text-2xl font-semibold border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-stone-500 mx-1.5 sm:mx-6">blog</a>
                    <a href="#" class="text-2xl font-semibold border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-stone-500 mx-1.5 sm:mx-6">user profile</a>
                </div>
            </nav>

             
            <div className="relative px-10 xl:px-0 container mx-auto md:flex items-center gap-8">
                <div className="text-color w-full md:w-1/4 pt-12 lg:pt-32 xl:pt-12 px-12 mb-8">
                    <h1 className="text-8xl md:text-6xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-9xl text-gray-900 font-extrabold f-f-l text-center tracking-widest">HELLSTONE</h1>
                </div>
                <div className="text-color w-full md:w-1/4 pt-12 lg:pt-32 xl:pt-12 px-5"></div>
                <div className="text-color w-full md:w-2/4 pt-12 lg:pt-32 xl:pt-12 px-5  text-center"></div>
            </div>
            <div className="relative px-10 xl:px-0 container mx-auto md:flex items-center gap-8">
                <div className="text-color w-full md:w-4/4 pt-12 lg:pt-32 xl:pt-12 px-5  text-center mb-8">
                    <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-extrabold f-f-l"> We'll can solve <span className='text-white'>your problem</span></h1>
                </div>
            </div>
            <div className="relative px-10 xl:px-0 container mx-auto md:flex items-center gap-8">
                <div className="text-color w-full md:w-4/4 pt-12 lg:pt-32 xl:pt-12 px-5  text-center">
                    <a class="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring " href="/download">
                        <span class="absolute inset-0 border border-stone-600 group-active:border-stone-500"></span>
                        <span class="tracking-widest text-3xl block px-12 py-4 transition-transform bg-stone-600 border border-stone-600 active:border-stone-500 active:bg-stone-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                            Let's start
                        </span>
                    </a>
                </div>
            </div>
        </div>


        <style>{`
 
      .top-100 {
          animation: slideDown .5s ease-in-out;
      }

      @keyframes slideDown {
          0% {
              top: -50%;
          }

          100% {
              top: 0;
          }
      }

      * {
          outline: none !important;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-tap-highlight-color: transparent;
      } `}</style>
      </>
  );
}

export default ProjectCodeFiles