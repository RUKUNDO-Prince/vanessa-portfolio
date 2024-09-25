import React from 'react'
import { projectsData } from '../constants/data'
import ProjectCard from './ProjectCard'

const ProjectsList = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
        {projectsData.map(project => (
            <ProjectCard key={project.icon} icon={project.icon} name={project.name} link={project.link} />
        ))}
    </div>
  )
}

export default ProjectsList