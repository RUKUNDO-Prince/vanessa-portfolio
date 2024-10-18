import React from 'react';

const GalleryCard = ({ image, title }) => {
  return (
    <div className="relative w-[450px] h-[350px] overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center">
        <h3 className="py-2">{title}</h3>
      </div>
    </div>
  );
};

export default GalleryCard;
