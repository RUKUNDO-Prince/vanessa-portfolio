import React from 'react'
import { arrow } from '../assets'

const ProjectCard = ({ icon, name, link }) => {
  return (
    <div className='flex flex-col lg:gap-0 gap-1'>
        <img src={icon} alt={name} />
        <h1 className='text-white lg:text-[1.75em] text-[1em] font-inter'>{name}</h1>
        <p className='text-primary flex items-center justify-start lg:text-[1.25em] text-[1em] font-inter gap-2 hover:opacity-[80%]'><a href={link} target='_blank'>See Project</a><img src={arrow} alt="" /></p>
    </div>
  )
}

export default ProjectCard