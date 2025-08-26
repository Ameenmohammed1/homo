'use client'
import React from 'react'
import dynamic from "next/dynamic";
import './styles.css'
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false, 
  loading: () => (
    <div className="flex justify-center items-center w-full h-full">
      <p className="text-gray-400">Loading 3D...</p>
    </div>
  ),
});

function Contact() {
  return (
    <div className="w-full h-[90vh] bg-black text-white flex relative overflow-hidden">
      <div className="blur-gradient absolute bottom-[-130px] left-[-200px] w-[500px] h-[500px]"></div>
      {/* Left Section */}
 <div className="w-1/2 h-full flex flex-col justify-center p-10  rounded-2xl shadow-2xl">
  <h1 className="text-4xl md:text-5xl mb-6 leading-snug">
    Book a <span className="text-[#913ffd]">Free Consultation</span> <br />
    Build Your <span className="text-[#913ffd]">Agent Today</span>
  </h1>

  <p className="text-lg text-gray-400 leading-relaxed mb-8">
    Get a <span className="text-[#913ffd] font-semibold">free consultation</span> and we’ll 
    <span className="text-[#913ffd] font-semibold"> build a custom bot</span> to solve your problem.  
    You only pay a <span className="text-[#913ffd] font-semibold">monthly subscription</span> — 
    <span className="text-[#913ffd] font-semibold"> no development fee</span>.
  </p>

  <button className="w-[180px] py-3 rounded-xl text-white font-medium 
    bg-gradient-to-r from-[#913ffd] to-purple-600 
    shadow-lg shadow-purple-900/40 
    hover:scale-105 hover:shadow-purple-800/60 
    transition-all duration-300">
    Book Consulting
  </button>
</div>


      {/* Right Section (3D model) */}
      <div className="w-1/2 h-full relative">
        <Spline 
          scene="https://prod.spline.design/uOESZ7Jl0WdVEB0F/scene.splinecode"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Contact
