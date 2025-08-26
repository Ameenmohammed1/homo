import React from 'react'

function Steps() {
  const steps = [
    {
      title: "Say Your Problem",
      desc: "Explain what struggles your company is facing. Share the problem in detail.",
      img: "s1.png"
    },
    {
      title: "We Build the Agent",
      desc: "Our team designs and trains a custom AI agent tailored to solve your business challenges.",
      img: "s2.png"
    },
    {
      title: "Deploy & Grow",
      desc: "We integrate the AI agent into your workflow, helping you scale efficiently and intelligently.",
      img: "s3.png"
    }
  ];

  return (
    <div className='w-full min-h-screen bg-[#070707] text-white px-10 py-16'>
      {/* Heading */}
      <div className='text-center max-w-3xl mx-auto mb-12'>
        <h1 className='text-5xl font-bold leading-tight'>
          Create AI <span className="text-[#913ffd]">Employee</span>
        </h1>
        <p className='text-gray-400 mt-4 text-lg'>
          From data collection to training and deployment, building AI involves 
          structured steps that transform raw information into intelligent systems.
        </p>
      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="bg-[#0e0e0e] rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">{step.title}</h2>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
            <div className="h-56">
              <img 
                src={step.img} 
                alt={step.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Steps
