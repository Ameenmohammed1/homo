'use client'
import React from 'react';
import './styles.css'; // Ensure you have this file for the .blur-gradient class

function Case() {
  return (
    <div id='feature' className='w-full min-h-screen bg-black text-white overflow-hidden'>
      {/* On mobile, we use a flex column with a significant gap to space out the feature cards.
        On desktop (lg), these styles are removed to allow the original stacking.
      */}
      <div className="flex flex-col gap-24 lg:gap-0">

        {/* Section 1: Customer Support */}
        {/* On desktop, lg:flex-row-reverse places the text on the left */}
        <div className="w-full h-auto lg:h-[80vh] bg-[#070707] flex flex-col lg:flex-row-reverse relative">
          {/* Video Container */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-full flex justify-center items-center p-6 lg:p-12 z-10">
            <video
              src="/vidoe1.mp4"
              muted loop autoPlay playsInline
              className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-[#913ffd]/20"
            />
          </div>
          {/* Text Content Card */}
          <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-0">
            <div className="relative w-full max-w-md bg-[#101010] lg:bg-transparent rounded-2xl p-8 -mt-20 lg:mt-0 border border-white/10 lg:border-none">
              <h1 className='text-3xl lg:text-[3rem] font-bold text-center lg:text-left'>
                <span className='text-[#913ffd]'>Human-like</span> <br /> Customer Support
              </h1>
              <p className='text-gray-400 mt-4 text-center lg:text-left'>
                Our AI agents understand context and respond like real humans, helping you deliver instant, effortless support.
              </p>
              <button     onClick={()=>window.location.href = "https://cal.com/zuvany/homo"} className='w-full lg:w-[150px] mt-6 bg-[#913ffd] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity'>
                Get Connect
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: Booking Assistant */}
        {/* On desktop, lg:flex-row places the video on the left */}
        <div className="w-full h-auto lg:h-[80vh] flex flex-col lg:flex-row relative">
          <div className="blur-gradient absolute top-[-130px] right-[-200px] w-[500px] h-[500px]"></div>
          {/* Video Container */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-full flex justify-center items-center p-6 lg:p-12 z-10">
            <video
              src="/video2.mp4"
              muted loop autoPlay playsInline
              className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-[#913ffd]/20"
            />
          </div>
          {/* Text Content Card */}
          <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-0">
            <div className="relative w-full max-w-md bg-[#101010] lg:bg-transparent rounded-2xl p-8 -mt-20 lg:mt-0 border border-white/10 lg:border-none">
              <h1 className='text-3xl lg:text-[3rem] font-bold text-center lg:text-left'>
                <span className='text-[#913ffd]'>Smart AI</span> <br /> Booking Assistant
              </h1>
              <p className='text-gray-400 mt-4 text-center lg:text-left'>
                Our AI handles scheduling, reminders, and confirmations just like a real assistant, making booking seamless.
              </p>
              <button     onClick={()=>window.location.href = "https://cal.com/zuvany/homo"} className='w-full lg:w-[150px] mt-6 bg-[#913ffd] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity'>
                Get Connect
              </button>
            </div>
          </div>
        </div>
        
        {/* Section 3: Automate Your Work */}
        {/* On desktop, lg:flex-row-reverse places the text on the left */}
        <div className="w-full h-auto lg:h-[80vh] bg-[#070707] flex flex-col lg:flex-row-reverse relative">
          {/* Video Container */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-full flex justify-center items-center p-6 lg:p-12 z-10">
            <video
              src="/video3.mp4"
              muted loop autoPlay playsInline
              className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-[#913ffd]/20"
            />
          </div>
          {/* Text Content Card */}
          <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-0">
            <div className="relative w-full max-w-md bg-[#101010] lg:bg-transparent rounded-2xl p-8 -mt-20 lg:mt-0 border border-white/10 lg:border-none">
              <h1 className='text-3xl lg:text-[3rem] font-bold text-center lg:text-left'>
                <span className='text-[#913ffd]'>Automate</span> <br /> Your Work with AI
              </h1>
              <p className='text-gray-400 mt-4 text-center lg:text-left'>
                Save hours of manual effort, streamline your workflow, and ship products faster—all powered by intelligent AI automation.
              </p>
              <button onClick={()=>window.location.href = "https://cal.com/zuvany/homo"} className='w-full lg:w-[150px] mt-6 bg-[#913ffd] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity'>
                Get Connect
              </button>
            </div>
          </div>
        </div>

        {/* Section 4: AI Agents That Act Like Humans */}
        {/* On desktop, lg:flex-row places the video on the left */}
        <div className="w-full h-auto lg:h-[80vh] flex flex-col lg:flex-row relative">
          <div className="blur-gradient absolute top-[-130px] right-[-200px] w-[500px] h-[500px]"></div>
          {/* Video Container */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-full flex justify-center items-center p-6 lg:p-12 z-10">
            <video
              src="/video4.mp4"
              muted loop autoPlay playsInline
              className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-[#913ffd]/20"
            />
          </div>
          {/* Text Content Card */}
          <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-0">
            <div className="relative w-full max-w-md bg-[#101010] lg:bg-transparent rounded-2xl p-8 -mt-20 lg:mt-0 border border-white/10 lg:border-none">
              <h1 className='text-3xl lg:text-[3rem] font-bold text-center lg:text-left'>
                <span className='text-[#913ffd]'>AI Agents</span> <br /> That Act Like Humans
              </h1>
              <p className='text-gray-400 mt-4 text-center lg:text-left'>
                From booking trips to automating workflows, our AI connects to your databases and executes functions seamlessly in real time.
              </p>
              <button     onClick={()=>window.location.href = "https://cal.com/zuvany/homo"}  className='w-full lg:w-[150px] mt-6 bg-[#913ffd] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity'>
                Get Connect
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Case;