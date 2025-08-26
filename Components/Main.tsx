"use client";
import React from 'react';
import { Particles } from './magicui/particles';
import { RainbowButton } from './magicui/rainbow-button';
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false, // avoid server-side render
  loading: () => (
    <div className="flex justify-center items-center w-full h-full">
      <p className="text-gray-400">Loading 3D...</p>
    </div>
  ),
});

function Main() {
  return (
    <div className='w-full relative h-auto md:h-[100vh] bg-black overflow-hidden'>
      
      {/* Header */}
      <div className="w-full h-[12vh] flex px-6 md:px-[40px] justify-between items-center">
        <img src="homo.png" className='h-[35px]' alt="Logo" />
        {/* Navigation links: Hidden on mobile, visible on medium screens and up */}
        <ul className='hidden md:flex text-white gap-3'>
          <li>Home</li>
          <li>Features</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Button: Hidden on mobile, visible on medium screens and up */}
        <div className="hidden md:block">
          <RainbowButton>Book Consulting</RainbowButton>
        </div>
      </div>

      {/* Main Content */}
      {/* Stacks vertically on mobile (flex-col), side-by-side on large screens (lg:flex-row) */}
      <div className="w-full min-h-[88vh] flex flex-col lg:flex-row px-6 lg:px-10">
        
        {/* Left Section - Text */}
        {/* Full width on mobile, half width on large screens */}
        <div className="w-full lg:w-1/2 h-full text-white flex flex-col justify-center items-center text-center lg:items-start lg:text-left py-10 lg:py-0 lg:pr-8">
          {/* Responsive font size and line height */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.7rem] leading-tight lg:leading-[1.4em]">
            Build Your <span className="text-[#913ffd]">Human</span>{" "}
            <span className="text-[#913ffd]">Employee</span> for Business Tasks
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-[90%]">
            Homo creates AI agents that work like real employees — handling tasks like
            customer support, appointment booking, trip planning, and more.
          </p>

          <RainbowButton
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, #913ffd 100%)",
              color: "#222",
              border: "none",
            }}
            className="mt-6 w-[220px] py-4 font-semibold rounded-xl shadow-lg"
          >
            Book Your AI Employee
          </RainbowButton>
        </div>

        {/* Right Section - Spline */}
        {/* Full width on mobile, half width on large screens. Fixed height on mobile. */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-full flex justify-center items-center">
          <div className="w-full h-full md:w-[90%] md:h-[90%]">
            <Spline className='w-full h-full' scene="https://prod.spline.design/gplPGaUuzOnkuDoj/scene.splinecode" />
          </div>
        </div>
      </div>

      <Particles
        className="absolute top-0 right-0 w-full h-full"
        quantity={150}
        ease={80}
        color={"#fff"}
        refresh
      />
    </div>
  )
}

export default Main;