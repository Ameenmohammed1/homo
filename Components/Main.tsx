"use client";
import React from 'react'
import { Particles } from './magicui/particles'
import { RainbowButton } from './magicui/rainbow-button'
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
    <div className='w-[100%] relative  h-[100vh] bg-black overflow-hidden'>
     
        <div className="w-[100%] h-[12vh] flex px-[40px] justify-between items-center">
            <img src="homo.png" className='h-[35px]' alt="" />
            <ul className=' text-white flex gap-3'>
                <li>Home</li>
                <li>Features</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <RainbowButton>Book Consulting</RainbowButton>
        </div>
     <div className="w-full h-[88vh] flex px-10">
  {/* Left Section - Text */}
  <div className="w-1/2 h-full text-white flex flex-col justify-center pr-8">
    <h1 className="text-[3.7rem] leading-[1.4em] ">
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
  <div className="w-1/2 h-full flex justify-center items-center">
    <div className="w-[90%] h-[90%]">
      <Spline className='w-[100%] h-[100%]' scene="https://prod.spline.design/gplPGaUuzOnkuDoj/scene.splinecode" />
    </div>
  </div>
</div>

      <Particles
        className="absolute top-0 right-0 w-[100%] h-[100%]"
        quantity={150}
        ease={80}
        color={"#fff"}
        refresh
      />
    </div>
  )
}

export default Main