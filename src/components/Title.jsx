import React from 'react'

const Title = ({ name, surname }) => {
  return (
    <div className='border-b-2 border-white flex justify-center'>
        <h1 className='text-white font-semibold font-exo2 text-[2.5em]'>{name} <span className='text-primary'>{surname}</span></h1>
    </div>
  )
}

export default Title