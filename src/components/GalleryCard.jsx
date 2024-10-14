import React from 'react';

const GalleryCard = ({ image, title }) => {
  return (
    <div className='relative'>
      <img src={image} alt={title} className='w-full h-auto object-cover' />
      <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3'>
        <h3 className='text-lg font-bold'>{title}</h3>
      </div>
    </div>
  );
};

export default GalleryCard;
