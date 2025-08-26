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
    // FIX: Restored the fixed h-[90vh] for desktop (lg:) view. Mobile remains flexible with h-auto.
    <div id='contact' className="w-full h-auto lg:h-[90vh] bg-black text-white flex flex-col lg:flex-row relative overflow-hidden">
      <div className="blur-gradient absolute bottom-[-130px] left-[-200px] w-[500px] h-[500px]"></div>

      {/* Left Section (Text) */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center text-center lg:items-start lg:text-left p-6 lg:p-10 order-2 lg:order-1">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight lg:leading-snug font-bold">
          Book a <span className="text-[#913ffd]">Free Consultation</span> <br />
          Build Your <span className="text-[#913ffd]">Agent Today</span>
        </h1>

        <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
          Get a <span className="text-[#913ffd] font-semibold">free consultation</span> and we’ll
          <span className="text-[#913ffd] font-semibold"> build a custom bot</span> to solve your problem.
          You only pay a <span className="text-[#913ffd] font-semibold">monthly subscription</span> —
          <span className="text-[#913ffd] font-semibold"> no development fee</span>.
        </p>

        <button     onClick={()=>window.location.href = "https://cal.com/zuvany/homo"} className="w-[180px] py-3 rounded-xl text-white font-medium
          bg-gradient-to-r from-[#913ffd] to-purple-600
          shadow-lg shadow-purple-900/40
          hover:scale-105 hover:shadow-purple-800/60
          transition-all duration-300">
          Book Consulting
        </button>
      </div>

      {/* Right Section (3D model) */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative order-1 lg:order-2">
        <Spline
          scene="https://prod.spline.design/uOESZ7Jl0WdVEB0F/scene.splinecode"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Contact