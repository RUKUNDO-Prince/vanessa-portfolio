import React from 'react';
import { galleryData } from '../constants/data'; // Import your gallery data
import GalleryCard from './GalleryCard'; // Component to display individual gallery items

const GalleryList = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
      {galleryData.map((item) => (
        <GalleryCard key={item.id} image={item.image} title={item.title} />
      ))}
    </div>
  );
};

export default GalleryList;
