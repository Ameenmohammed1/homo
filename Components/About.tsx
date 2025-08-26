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
    <div id='about' className='w-full min-h-[90vh] flex flex-col lg:flex-row bg-black text-white'>
      
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
  Homo is a sub-project of Zuvany focused on building AI employees that work like humans — but faster, smarter, and available 24/7. 
  Businesses can share their challenges, and Homo creates custom AI agents to solve them.
</p>
<p className='text-white text-lg mt-2'>
  From customer support and appointment booking to trip planning and workflow automation, Homo helps companies save time, reduce costs, and scale effortlessly. 
  It’s not just automation — it’s the future of work.
</p>

      </div>
      
    </div>
  );
}

export default About;