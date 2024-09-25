import React from 'react'

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className='flex flex-col gap-5 text-blue-primary bg-white items-center rounded-lg p-5'>
        <img src={icon} alt="" />
        <h1 className='xl:text-[1.563em] md:text-[1.3em] font-exo2 font-bold'>{title}</h1>
        <p className='xl:text-[1.125em] md:text-[1.1em] font-exo2'>{desc}</p>
    </div>
  )
}

export default ServiceCard