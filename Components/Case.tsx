import React from 'react'
import './styles.css'
function Case() {
  return (
    <div className='w-[100%] h-auto min-h-[100vh] bg-black overflow-hidden text-white '>
      <div className="w-[100%] bg-[#070707] relative  h-[80vh] flex">
        {/* <div className="blur-gradient absolute top-5 right-[-50px] w-[500px] h-[500px]"></div> */}
        <div className="w-[50%] h-[100%] flex flex-col px-[40px] justify-center gap-6">
          <h1 className='text-[3rem]'>
            <span className='text-[#913ffd]'>Human-like</span> <br /> Customer Support
          </h1>
          <p className='text-gray-400'>
            We built AI agents that understand context and respond like real humans,
            helping your customers get accurate answers instantly and effortlessly.
          </p>

          <button className='w-[150px] border py-[5px] rounded-full'>Get Connect</button>
        </div>
        <div className="w-[50%] flex justify-center p-[40px] h-[100%]">
          <video
            src="/vidoe1.mp4"
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-full z-20"
          />
        </div>

      </div>

      <div className="w-[100%] h-[80vh] px-[40px] overflow-hidden relative flex">
  <div className="blur-gradient absolute top-[-130px] right-[-200px] w-[500px] h-[500px]"></div>
        <div className="w-[50%] flex justify-center p-[40px] h-[100%]">
          <video
            src="/video2.mp4"
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-full"
          />
        </div>

        <div className="w-[50%] h-[100%] flex flex-col justify-center gap-6">
          <h1 className='text-[3rem]'>
            <span className='text-[#913ffd]'>Smart AI</span> <br /> Booking Assistant
          </h1>
          <p className='text-gray-400'>
            From trips to consulting sessions and business meetings — our AI agent
            makes scheduling seamless, handling availability, reminders, and
            confirmations just like a real assistant.
          </p>


          <button className='w-[150px] border py-[5px] rounded-full'>Get Connect</button>
        </div>


      </div>

      <div className="w-[100%] h-[80vh] px-[40px] bg-[#070707] flex">
        <div className="w-[50%] h-[100%] flex flex-col justify-center gap-6">
          <h1 className='text-[3rem]'>
            <span className='text-[#913ffd]'>Automate</span> <br /> Your Work with AI
          </h1>
          <p className='text-gray-400'>
            Save hours of manual effort, streamline your workflow, and ship products
            faster — all powered by intelligent AI automation.
          </p>


          <button className='w-[150px] border py-[5px] rounded-full'>Get Connect</button>
        </div>
        <div className="w-[50%] flex justify-center p-[40px] h-[100%]">
          <video
            src="/video3.mp4"
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-full"
          />
        </div>

      </div>

      <div className="w-[100%] relative  px-[40px] h-[80vh] overflow-hidden flex">
  <div className="blur-gradient absolute top-[-130px] right-[-200px] w-[500px] h-[500px]"></div>

        <div className="w-[50%] flex justify-center p-[40px] h-[100%]">
          <video
            src="/video4.mp4"
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-full z-20"
          />
        </div>

        <div className="w-[50%] h-[100%] flex flex-col justify-center gap-6">
          <h1 className='text-[3rem]'>
            <span className='text-[#913ffd]'>AI Agents</span> <br /> That Act Like Humans
          </h1>
          <p className='text-gray-400'>
            Our chat-based AI doesn’t just talk — it connects directly to your databases
            and executes functions just like a human would. From booking trips and
            scheduling meetings to running queries and automating workflows,
            everything happens seamlessly in real time.
          </p>



          <button className='w-[150px] border py-[5px] rounded-full'>Get Connect</button>
        </div>


      </div>


    </div>
  )
}

export default Case