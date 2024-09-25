import React from 'react'
import Title from './Title'
import Carousel from './Carousel'

const Clients = () => {
  return (
    <div className='bg-purple-primary flex flex-col items-center justify-center gap-5'>
      <div className='flex justify-center items-center gap-2'>
        <div className='w-[50px] h-[1.5px] bg-primary'></div><p className='text-primary text-[1.25em] font-exo2 font-bold'>Testimonials</p>
      </div>
      <div className='xl:w-[15%] lg:w-[30%] md:w-[50%] w-full'>
        <Title name="My" surname="Clients" />
      </div>
      <Carousel />
    </div>
  )
}

export default Clients