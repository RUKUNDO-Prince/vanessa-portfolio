import React from 'react'
import { banner, download, email } from '../assets'
import { socialLinks } from '../constants/data'

const Hero = () => {
  return (
    <div className='flex items-center gap-40 bg-purple-primary px-20'>
      <div className='flex flex-col items-start justify-center m-auto'>
        <p className='text-primary font-semibold font-exo2 text-[1.875em]'>Hi, it's me</p>
        <h1 className='text-white font-bold font-exo2 text-[3.75em]'>UWASE S. Vanessa</h1>
        <h3 className='text-white font-semibold font-exo2 text-[2.188em]'>And I'm a <span className='text-primary'>Software Engineer</span></h3>
        <p className='text-white font-semibold font-exo2 text-[1.063em]'>I’m from  Rwanda and I have been working as a Software Developer for more than 3 years. I’ve worked for a Hanziree company Pabloo as a Product Designer and Front-end Developer for 3 years.</p>
        <div className='flex gap-5 my-9'>
          {socialLinks.map(link => (
            <a className='border-white border-2 p-1 rounded-full' key={link.icon} href={link.link} target='_blank'>
              <img src={link.icon} alt="" />
            </a>
          ))}
        </div>
        <div className='flex gap-5'>
          <button className='border-primary border-2 bg-primary py-2 px-4 rounded-3xl text-white hover:bg-purple-primary flex gap-2 items-center'><img src={download} alt="" className='w-5' />Download CV</button>
          <button className='border-primary border-2 py-2 px-4 rounded-3xl text-white hover:bg-primary flex gap-2 items-center'><img src={email} alt="" className='w-5' />Email Me</button>
        </div>
      </div>
      <div>
        <img src={banner} width={1000} alt="" />
      </div>
    </div>
  )
}

export default Hero