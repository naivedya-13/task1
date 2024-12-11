import React from 'react'

import Contact from '../Componants/Contact';
import Survay from '../Componants/Survay';

function ProForm() {
  return (
    
    <div className='bg-slate-200'>
      {/* Header Section */}
      <div className='flex justify-between items-center mb-1 '>
        <h1 className='text-black text-xl m-1 font-bold'>Pro Form Layout</h1>
        <div>
          <h5 className='text-blue-900'>Dashboard / Pro Form Layout</h5>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex flex-row justify-between'>
        {/* Left Section */}
        <div className='w-1/2 border-r-2 border-gray-400 p-2 m-1 rounded-sm shadow-sm gap-3 bg-white'>
          {/* <h2 className='text-xl font-semibold'>Contact Form 2</h2>
          <p className='text-gray-600'>This section is for the contact form content.</p> */}
          {/* <ContactForm/> */}
          <Contact/>
        </div>

        {/* Right Section */}
        <div className='w-1/2 p-2 bg-white rounded-sm shadow-sm m-1'>
          {/* <h2 className='text-xl font-semibold'>Survey Form</h2>
          <p className='text-gray-600'>This section is for the survey form content.</p> */}
          {/* <SurvayForm/> */}
          <Survay/>
        </div>
      </div>
      </div>
   
  );
}

export default ProForm;
