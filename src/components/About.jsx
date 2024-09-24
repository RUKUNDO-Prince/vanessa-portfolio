import React from 'react'
import Title from './Title'
import { profile } from '../assets'

const About = () => {
  return (
    <div className='bg-blue-primary flex items-center justify-center flex-col gap-10 sm:p-12 p-2'>
      <div className='xl:w-[15%] lg:w-[30%] md:w-[50%] w-full'>
        <Title name="About" surname="Me" />
      </div>
      <div className='flex flex-col lg:flex-row gap-20 sm:px-10 px-4'>
        <img src={profile} alt="img" />
        <div className='text-white flex flex-col gap-5 lg:w-[50%]'>
          <h1 className='text-[1.875em] font-semibold font-exo2'>Backend Developer & UI Designer</h1>
          <p className='font-semibold font-exo2 text-[1.1em]'>I am a skilled software engineer based in Kigali,Rwanda, with a three-year background in developing user-friendly solutions for government, institution, startups, and personal endeavors. My analytical problem-solving expertise drives me to construct robust platforms that amplify competitiveness and revenue streams.</p>
          <p className='font-semibold font-exo2 text-[1.1em]'> I consistently maintain a professional attitude through challenges and turn them into opportunities. My interpersonal skills strongly contribute to my journey as a lifelong learner and leader...</p>
          <button className='bg-white border-white border-2 text-black rounded-3xl xl:w-[20%] md:w-[30%] p-2 hover:bg-blue-primary'>Read More ...</button>
        </div>
      </div>
    </div>
  )
}

export default About