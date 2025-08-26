"use client";
import React from 'react';
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
    // Main container: Stacks vertically on mobile, becomes a row on large screens.
    <div className='w-full min-h-[90vh] flex flex-col lg:flex-row bg-black text-white'>
      
      {/* 3D Model Section */}
      {/* Full width on mobile with a fixed height, half width on large screens */}
      <div className="w-full h-[50vh] lg:w-[50%] lg:h-auto">
        <Spline scene="https://prod.spline.design/aqMBmIHz0BRAlVaz/scene.splinecode" />
      </div>
      
      {/* Text Content Section */}
      {/* Full width on mobile, half width on large screens. Padding and text alignment adjusted. */}
      <div className="w-full lg:w-[50%] h-auto flex flex-col justify-center p-6 lg:pl-[30px] text-center lg:text-left">
        {/* Responsive font size */}
        <h1 className='text-4xl md:text-5xl lg:text-[4rem] font-bold'>About Us</h1>
        <p className='text-gray-300 text-lg mt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit maxime aspernatur ea inventore velit itaque, facilis perferendis placeat. Sequi provident quas voluptatem neque debitis.
        </p>
        <p className='text-white text-lg mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur, illo perferendis natus nihil quos facilis vel aperiam atque repellendus nobis ratione error, quas rerum.
        </p>
      </div>
      
    </div>
  );
}

export default About;