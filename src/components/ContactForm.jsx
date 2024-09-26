import React from 'react'

const ContactForm = () => {
  return (
    <form className='flex flex-col gap-5 lg:w-[50%] w-full'>
        <input className='text-[1em] font-semibold font-exo2 text-white bg-blue-secondary p-3 rounded-2xl outline-none' type="text" placeholder='Full Name' />
        <input className='text-[1em] font-semibold font-exo2 text-white bg-blue-secondary p-3 rounded-2xl outline-none' type="text" placeholder='Email Address' />
        <div className='flex gap-5 w-full'>
          <input className='text-[1em] font-semibold font-exo2 text-white bg-blue-secondary p-3 rounded-2xl outline-none w-full' type="number" name="" id="" placeholder='Phone Number' />
          <input className='text-[1em] font-semibold font-exo2 text-white bg-blue-secondary p-3 rounded-2xl outline-none w-full' type="text" placeholder='Subject' />
        </div>
        <textarea className='text-[1em] font-semibold font-exo2 text-white bg-blue-secondary p-3 rounded-2xl outline-none h-52' placeholder='Your Message'></textarea>
        <button className='text-[1em] font-semibold font-exo2 text-white bg-blue-secondary p-3 rounded-2xl outline-none border-2 border-blue-secondary hover:bg-blue-primary'>Send</button>
    </form>
  )
}

export default ContactForm