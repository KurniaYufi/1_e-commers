import React from 'react';
import '../../App.css';
import Slider from "react-slick";
import Image1 from '../../assets/Products/Image1.png';
import Image2 from '../../assets/Products/Image2.png';
import Image3 from '../../assets/Products/Image3.png';

// Data untuk Hero Slider
const HeroData = [
  { 
    id: 1, 
    img: Image1,
    subtitle: 'Best Products',
    title1: 'Iphone 16 Pro',
    title2: 'Iphone',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  { 
    id: 2, 
    img: Image2,
    subtitle: 'New Arrivals',
    title1: 'Macbook Pro',
    title2: 'Macbook',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  { 
    id: 3, 
    img: Image3,
    subtitle: 'Best Deals',
    title1: 'Apple Watch',
    title2: 'Smart Watch',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container ">
        <div className='overflow-hidden rounded-3xl min-h-[550px] md:min-h-[650px] bg-gray-200 flex items-center justify-center'>
            <div className='container py-5'>
            {/* Hero Section */}
            <Slider {...settings} className=''>
                {HeroData.map((item) => (
                <div key={item.id} className=''>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      {/* Text Section */}
                      <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center md:text-left order-2 md:order-1 relative z-10 '>
                          <h1 className='text-2xl font-bold'>{item.subtitle}</h1>
                          <h1 className='text-5xl lg:text-7xl font-bold whitespace-nowrap'>{item.title1}</h1>
                          <h1 className='text-5xl uppercase text-white dark:text-white/5 md:text-[70px] xl:text-[150px] font-bold whitespace-nowrap'>{item.title2}</h1>
                          <div>
                              <button className='bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 mb-4 rounded-full relative z-10'>Shop By Category</button>
                          </div>
                      </div>
                      {/* Image Section */}
                      <div className='order-1 md:order-2'>
                        <div>
                          <img 
                              src={item.img} 
                              alt={`Hero Image ${item.id}`} 
                              className='w-[300px] h-[300px] md:h-[450px] lg:scale-140 object-contain 
                              mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.2)] relative z-40' 
                              />
                        </div>
                      </div>
                    </div>
                </div>
                ))}
            </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
