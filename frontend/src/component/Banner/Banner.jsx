import React from 'react';
import '../../App.css';

const Banner = ({ discount, title, dateRange, imgSrc, productName, promoTitle, description, buttonText, bgColor, buttonColor }) => {
  return (
    <div className='pt-4'>
      <div className='container'>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-8 ${bgColor} rounded-3xl p-8 text-white items-center`}>
          
          {/* Left Side */}
          <div className='flex flex-col'>
            <h1 
              data-aos="fade-right" 
              data-aos-delay="600"
            >
              {discount}
            </h1>
            <h1 
              className='text-4xl lg:text-7xl font-bold'
              data-aos="fade-right" 
              data-aos-delay="800"
            >
              {title}
            </h1>
            <h1 
              data-aos="fade-right" 
              data-aos-delay="1000"
            >
              {dateRange}
            </h1>
          </div>

          {/* Image */}
          <div>
            <img 
              src={imgSrc} 
              alt={productName} 
              className='scale-140 w-[250px] md:w-[340px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover'
              data-aos="zoom-in"
            />
          </div>

          {/* Right Side */}
          <div className='flex flex-col justify-center gap-4 lg:pl-6'>
            <h1 
              className='text-xl font-bold'
              data-aos="fade-up"
              data-aos-delay="0"
            >
              {productName}
            </h1>
            <h1 
              className='text-4xl lg:text-5xl font-bold'
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {promoTitle}
            </h1>
            <h1 
              className='text-sm'
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {description}
            </h1>
            <button 
              className={`${buttonColor} py-2 px-4 rounded-full w-[110px] hover:scale-105 transition-transform duration-300 cursor-pointer`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
