import React from 'react'
import Title from './Title'
import { skillsData } from '../constants/data'

const Skills = () => {
  return (
    <div className='bg-blue-primary flex flex-col items-center p-10'>
      <div className='xl:w-[15%] lg:w-[30%] md:w-[50%] w-full'>
        <Title name="My" surname="Skills" />
      </div>
      <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-10 gap-5 lg:m-10 my-2 mt-10'>
        {skillsData.map(skill => (
          <img src={skill.icon} alt={skill.desc} key={skill.icon} className='' />
        ))}
      </div>
    </div>
  )
}

export default Skills