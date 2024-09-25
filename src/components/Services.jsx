import React from 'react'
import Title from './Title'
import { servicesData } from '../constants/data'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='flex flex-col bg-purple-primary items-center xl:p-20 lg:p-10 md:p-5'>
      <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-full p-4 lg:p-0'>
        <Title name="My" surname="Services" />
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-2 xl:gap-10 lg:gap-5 md:gap-10 gap-5 m-10'>
        {servicesData.map(service => (
          <ServiceCard icon={service.icon} title={service.title} desc={service.desc} />
        ))}
      </div>
    </div>
  )
}

export default Services