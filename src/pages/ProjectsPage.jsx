import React from 'react'
import ProjectsList from '../components/ProjectsList'
import Title from '../components/Title'

const ProjectsPage = () => {
  return (
    <div className='bg-purple-primary flex flex-col items-center md:p-10 p-5 mt-20 border-b-2 border-blue-primary shadow-2xl'>
      <div className='xl:w-[15%] lg:w-[30%] md:w-[50%] w-full'>
        <Title name="My" surname="Projects" />
      </div>
      <div className='w-full md:p-5'>
        <div className='flex flex-col justify-start items-start p-5'>
          <div className='flex items-center gap-2'>
            <div className='w-[50px] h-[1.5px] bg-primary'></div><p className='text-primary text-[1.25em] font-exo2 font-bold'>Recent work</p>
          </div>
          <div className='text-white flex flex-col gap-5 md:flex-row justify-between lg:items-center w-full'>
            <h1 className='xl:text-[2.875em] lg:text-[2.6em] md:text-[2.4em] text-[2em] font-bold font-exo2 xl:w-[40%] lg:leading-11 leading-9'>Some of my favorite projects.</h1>
            <button className='text-[0.875em] font-bold font-exo2 p-2 h-fit border-2 border-primary'>View My Gallery</button>
          </div>
        </div>
        <div>
          <ProjectsList />
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage