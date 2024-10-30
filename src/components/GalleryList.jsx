import React from 'react';
import { galleryData } from '../constants/data';
import GalleryCard from './GalleryCard';

const GalleryList = ({ limit }) => {
  const limitedData = limit ? galleryData.slice(0, limit) : galleryData;

  return (
    <div className='grid md:grid-cols-3 grid-cols-2 gap-5'>
      {limitedData.map((item) => (
        <GalleryCard key={item.id} image={item.image} title={item.title} />
      ))}
    </div>
  );
};

export default GalleryList;
