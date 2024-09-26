import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to EmailJS
    emailjs.send(
      'service_uf62uuj', // Replace with your EmailJS service ID
      'template_wa6el2n', // Replace with your EmailJS template ID
      formData,
      'O3OgpIeP3YtY5i4WO' // Replace with your EmailJS user ID
    )
    .then((response) => {
      toast.success("Message sent successfully, wait for the reply!");
      console.log('SUCCESS!');
      setFormData({ fullName: '', email: '', phoneNumber: '', subject: '', message: '' });
    })
    .catch((error) => {
      toast.error("Message failed to send, try again later!");
      console.log('FAILED...', error.text);
    });
  };

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 lg:w-[50%] w-full'>
        <input 
          className='text-[1em] font-semibold font-exo2 text-white bg-blue-secondary p-3 rounded-2xl outline-none' 
          type="text" 
          name="fullName" 
          placeholder='Full Name' 
          value={formData.fullName} 
          onChange={handleChange} 
          required
        />
        <input 
          className='text-[1em] font-semibold font-exo2 text-white bg-blue-secondary p-3 rounded-2xl outline-none' 
          type="email" 
          name="email" 
          placeholder='Email Address' 
          value={formData.email} 
          onChange={handleChange} 
          required
        />
        <div className='flex gap-5 w-full'>
          <input 
            className='text-[1em] font-semibold font-exo2 text-white bg-blue-secondary p-3 rounded-2xl outline-none w-full' 
            type="number" 
            name="phoneNumber" 
            placeholder='Phone Number' 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            required
          />
          <input 
            className='text-[1em] font-semibold font-exo2 text-white bg-blue-secondary p-3 rounded-2xl outline-none w-full' 
            type="text" 
            name="subject" 
            placeholder='Subject' 
            value={formData.subject} 
            onChange={handleChange} 
            required
          />
        </div>
        <textarea 
          className='text-[1em] font-semibold font-exo2 text-white bg-blue-secondary p-3 rounded-2xl outline-none h-52' 
          name="message" 
          placeholder='Your Message' 
          value={formData.message} 
          onChange={handleChange} 
          required
        />
        <button 
          type="submit" 
          className='text-[1em] font-semibold font-exo2 text-white bg-blue-secondary p-3 rounded-2xl outline-none border-2 border-blue-secondary hover:bg-blue-primary'
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
