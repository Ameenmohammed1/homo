"use client"
import React from 'react'
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false, // avoid server-side render
  loading: () => (
    <div className="flex justify-center items-center w-full h-full">
      <p className="text-gray-400">Loading 3D...</p>
    </div>
  ),
});
function About() {
  return (
    <div className='w-[100%] h-[90vh] flex  bg-black text-white'>
           <div className="w-[50%] h-[100%]  ">
        <Spline scene="https://prod.spline.design/aqMBmIHz0BRAlVaz/scene.splinecode" />
     </div>
     <div className="w-[50%] h-[100%] flex flex-col justify-center pl-[30px] ">
       <h1 className='text-[4rem]'>About Us</h1>
      <p className='text-gray-300 text-[1.1rem]  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit maxime aspernatur ea inventore velit itaque, facilis perferendis placeat. Sequi provident quas voluptatem neque debitis.</p>
      <p className='text-white text-[1.1rem] mt-2  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur, illo perferendis natus nihil quos facilis vel aperiam atque repellendus nobis ratione error, quas rerum.</p>
 
     </div>
     

    </div>
  )
}

export default About