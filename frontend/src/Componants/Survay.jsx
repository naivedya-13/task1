import React, { useState } from 'react';
import axios from 'axios'; // Install axios if you don't have it: npm install axios

function SurveyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    description: '',
    recommend: '',
    languages: '',
    categoryId: '', // categoryId will be set dynamically from localStorage
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Get categoryId from localStorage
      const categoryId = localStorage.getItem('categoryId');
      if (!categoryId) {
        alert('Category ID is missing!');
        return;
      }

      // Add categoryId to the formData
      const surveyData = { ...formData, categoryId };

      // Submit the survey data along with the categoryId
      const response = await axios.post('http://localhost:5000/api/survayDetails', surveyData);
      console.log('Survey submitted successfully:', response.data);
      alert(' Survey Form submitted successfully!');

      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        age: '',
        description: '',
        recommend: '',
        languages: '',
        categoryId: '', // reset categoryId
      });
    } catch (error) {
      console.error('Error submitting survey:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p className='text-xl font-bold mb-2'>Survey Form</p>
        <hr />
        <p className='m-2 font-bold'>Name</p>
        <div className='border border-b-gray-300 p-2 m-2'>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter your full name'
            className='w-full focus:outline-none'
          />
        </div>

        <p className='m-2 font-bold'>Email</p>
        <div className='border border-b-gray-300 p-2 m-2'>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email address'
            className='w-full focus:outline-none'
          />
        </div>

        <p className='m-2 font-bold'>Age</p>
        <div className='border border-b-gray-300 p-2 m-2'>
          <input
            type='number'
            name='age'
            value={formData.age}
            onChange={handleChange}
            placeholder='Enter your age'
            className='w-full focus:outline-none'
          />
        </div>

        <p className='m-2 font-bold'>Which option best describes you?</p>
        <div className='border border-b-gray-300 p-2 m-2'>
          <select
            name='description'
            value={formData.description}
            onChange={handleChange}
            className='w-full focus:outline-none'
          >
            <option value='' disabled>Select your subject</option>
            <option value='MERN Stack'>MERN Stack</option>
            <option value='Java'>Java</option>
            <option value='Python'>Python</option>
            <option value='.NET'>.NET</option>
          </select>
        </div>

        <p className='m-2 font-bold'>Would you recommend our site to a friend?</p>
        <div className='border border-b-gray-300 p-2 m-2 flex flex-col gap-2'>
          <div className='flex items-center'>
            <input
              type='radio'
              id='yes'
              name='recommend'
              value='yes'
              checked={formData.recommend === 'yes'}
              onChange={handleChange}
              className='mr-2'
            />
            <label htmlFor='yes' className='text-gray-800'>Yes</label>
          </div>
          <div className='flex items-center'>
            <input
              type='radio'
              id='no'
              name='recommend'
              value='no'
              checked={formData.recommend === 'no'}
              onChange={handleChange}
              className='mr-2'
            />
            <label htmlFor='no' className='text-gray-800'>No</label>
          </div>
          <div className='flex items-center'>
            <input
              type='radio'
              id='maybe'
              name='recommend'
              value='maybe'
              checked={formData.recommend === 'maybe'}
              onChange={handleChange}
              className='mr-2'
            />
            <label htmlFor='maybe' className='text-gray-800'>Maybe</label>
          </div>
        </div>

        <p className='m-2 font-bold'>Which languages & frameworks do you know?</p>
        <div className='border border-b-gray-300 p-2 m-2 flex flex-col gap-2'>
          <div className='flex items-center'>
            <input
              type='radio'
              id='Dotnet'
              name='languages'
              value='C# & Dotnet'
              checked={formData.languages === 'C# & Dotnet'}
              onChange={handleChange}
              className='mr-2'
            />
            <label htmlFor='Dotnet' className='text-gray-800'>C# & DotNet</label>
          </div>
          <div className='flex items-center'>
            <input
              type='radio'
              id='java'
              name='languages'
              value='Java & Django'
              checked={formData.languages === 'Java & Django'}
              onChange={handleChange}
              className='mr-2'
            />
            <label htmlFor='java' className='text-gray-800'>Java & Django</label>
          </div>
          <div className='flex items-center'>
            <input
              type='radio'
              id='dontknow'
              name='languages'
              value='Dontknow'
              checked={formData.languages === 'Dontknow'}
              onChange={handleChange}
              className='mr-2'
            />
            <label htmlFor='dontknow' className='text-gray-800'>Don't Know</label>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <button type='submit' className='px-6 py-2 text-white rounded-md bg-blue-500 w-full'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default SurveyForm;
