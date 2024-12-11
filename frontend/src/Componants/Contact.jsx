import React, { useState } from 'react';
import axios from 'axios';  // Import Axios

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    option: '',
    otherOption: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    try {
        // Make API call to the backend
        const response = await axios.post('http://localhost:5000/api/category', formData);
        console.log('Response from API:', response.data);

        // Store the category ID in localStorage
        if (response.data && response.data.data) {
            localStorage.setItem('categoryId', response.data.data);
            console.log('Category ID stored in localStorage:', response.data.data);
        }

        // Optionally, you can reset the form after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            option: '',
            otherOption: '',
            message: ''
        });

        alert('Form submitted successfully!');
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div>
      <p className='text-xl font-bold mb-2'>Contact Form</p>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='sm:flex sm:gap-3'>
          <div>
            <p className='text-md font-bold m-2'>First name</p>
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              placeholder='Enter Your First Name'
              className='border-2 border-gray-200 w-full sm:w-60 rounded-sm p-2 focus:outline-none'
            />
          </div>
          <div>
            <p className='text-md font-bold m-2'>Last Name</p>
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              placeholder='Enter Your Last Name'
              className='border-2 border-gray-200 w-full sm:w-60 rounded-sm p-2 focus:outline-none'
            />
          </div>
        </div>

        <div className='sm:flex sm:gap-3'>
          <div>
            <p className='text-md font-bold m-2'>Email</p>
            <input
              type='text'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter Your Email'
              className='border-2 border-gray-200 w-full sm:w-60 rounded-sm p-2 focus:outline-none'
            />
          </div>
          <div>
            <p className='text-md font-bold m-2'>Phone</p>
            <input
              type='text'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Enter Your Phone'
              className='border-2 border-gray-200 w-full sm:w-60 rounded-sm p-2 focus:outline-none'
            />
          </div>
        </div>

        <p className='font-bold text-md m-2'>Select option</p>
        <div>
          <input
            type='radio'
            id='Graphic'
            name='option'
            value='Graphic'
            checked={formData.option === 'Graphic'}
            onChange={handleChange}
            className='m-2 ml-7'
          />
          <label htmlFor='Graphic'>Graphic Design</label>

          <input
            type='radio'
            id='Web'
            name='option'
            value='Web'
            checked={formData.option === 'Web'}
            onChange={handleChange}
            className='m-2 ml-7'
          />
          <label htmlFor='Web'>Web Development</label>

          <input
            type='radio'
            id='Logo'
            name='option'
            value='Logo'
            checked={formData.option === 'Logo'}
            onChange={handleChange}
            className='m-2 ml-7'
          />
          <label htmlFor='Logo'>Logo Design</label>

          <input
            type='radio'
            id='Others'
            name='option'
            value='Others'
            checked={formData.option === 'Others'}
            onChange={handleChange}
            className='m-2 ml-9'
          />
          <label htmlFor='Others'>Others</label>

          {formData.option === 'Others' && (
            <div className='mt-2'>
              <input
                type='text'
                name='otherOption'
                value={formData.otherOption}
                onChange={handleChange}
                placeholder='Specify Other Option'
                className='border-2 border-gray-200 w-full sm:w-60 rounded-sm p-2 focus:outline-none ml-7'
              />
            </div>
          )}
        </div>

        <h1 className='text-md font-bold m-2'>Message</h1>
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          className='w-full h-24 focus:outline-none'
          placeholder='Type your message'
        ></textarea>

        <button type='submit' className='w-full h-10 mt-4 bg-blue-500 text-white rounded-sm'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
