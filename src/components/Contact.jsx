import React from 'react'
import Title from './Title'
import { email, location, phone } from '../assets'
import ContactForm from './ContactForm'
 
const Contact = () => {
  return (
    <div className='bg-blue-primary flex flex-col items-center p-5'>
      <div className='xl:w-[15%] lg:w-[30%] md:w-[50%] w-full'>
        <Title name="Contact" surname="Me" />
      </div>
      <div className='text-white flex lg:flex-row flex-col items-start justify-between w-full lg:p-20 md:p-10 gap-10 lg:gap-0'>
        <div className='flex flex-col gap-10'>
          <div>
            <h1 className='font-bold font-exo2 lg:text-[2.375em] text-[2em]'>Have any project in mind?</h1>
            <p className='text-[1em] font-exo2'>Feel free to contact me or just say friendly hello!</p>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='text-[1.25em] font-semibold font-exo2 flex items-center gap-3'><img src={phone} alt="phone" />+250739401403 <br /> +250993878783</p>
            <p className='text-[1.25em] font-semibold font-exo2 flex items-center gap-3'><img src={email} alt="email" />vanessauwase121@gmail.com</p>
            <p className='text-[1.25em] font-semibold font-exo2 flex items-center gap-3'><img src={location} alt="location" />Kigali , Rwanda</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact