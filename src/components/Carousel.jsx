import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { carouselData } from '../constants/data';

const NextArrow = ({ onClick }) => (
  <div className='absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer text-primary' onClick={onClick}>
    <FaChevronRight size={24} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className='absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer text-primary' onClick={onClick}>
    <FaChevronLeft size={24} />
  </div>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ],
    appendDots: dots => (
      <ul className="custom-dots"> {dots} </ul>
    )
  };
  

  

  return (
    <div className='relative w-full max-w-5xl m-12'>
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div key={item.index} className='flex flex-col lg:p-10 text-white'>
            <div className='lg:w-[70%] w-full p-5 lg:p-0 m-auto'>
              <p className='mt-4 text-center lg:text-[1.125em] text-[1em] font-semibold font-exo2'>{item.desc}</p>
              <div className='flex items-start justify-center gap-5 mt-10'>
                <img src={item.img} alt={item.name} className='w-16 h-16 rounded-full object-cover mb-4' />
                <div className='flex flex-col justify-start gap-1'>
                  <p className='text-[1.25em] font-exo2 font-semibold'>{item.name}</p>
                  <p className='font-inter'>{item.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
