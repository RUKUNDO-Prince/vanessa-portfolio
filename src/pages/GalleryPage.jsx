import React from 'react';
import GalleryList from '../components/GalleryList';
import Title from '../components/Title';

const GalleryPage = () => {
  return (
    <div className='bg-purple-primary flex flex-col items-center md:p-10 p-5 mt-20 border-b-2 border-blue-primary shadow-2xl'>
      <div className='xl:w-[15%] lg:w-[30%] md:w-[50%] w-full'>
        <Title name="My" surname="Gallery" />
      </div>
      <div className='w-full md:p-5'>
        <div className='flex flex-col justify-start items-start p-5 mb-5'>
          <div className='flex items-center gap-2'>
            <div className='w-[50px] h-[1.5px] bg-primary'></div>
            <p className='text-primary text-[1.25em] font-exo2 font-bold'>Recent Works</p>
          </div>
          <div className='text-white flex flex-col gap-5 md:flex-row justify-between lg:items-center w-full'>
            <h1 className='xl:text-[2.875em] lg:text-[2.6em] md:text-[2.4em] text-[2em] font-bold font-exo2 xl:w-[40%] lg:leading-11 leading-9'>
              Explore all the artwork.
            </h1>
          </div>
        </div>
        <div>
          <GalleryList /> {/* Displays the full gallery */}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
