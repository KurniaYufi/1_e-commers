import React from 'react';
import '../../App.css';
import Marquee from "react-fast-marquee";
import Partner1 from "../../assets/Products/Partner1.png";
import Partner2 from "../../assets/Products/Partner2.png";
import Partner3 from "../../assets/Products/Partner3.png";
import Partner4 from "../../assets/Products/Partner4.png";

const Partner = () => {
  return (
    <div className='mt-8'>
      <Marquee autoFill={true} pauseOnHover={true} speed={50} className='bg-gray-200 py-8'>
        <img src={Partner1} alt="Partner 1" className='w-[150px] h-[50px] object-contain mx-8 filter grayscale hover:grayscale-0 transition duration-300' />
        <img src={Partner2} alt="Partner 2" className='w-[150px] h-[50px] object-contain mx-8 filter grayscale hover:grayscale-0 transition duration-300' />
        <img src={Partner3} alt="Partner 3" className='w-[150px] h-[50px] object-contain mx-8 filter grayscale hover:grayscale-0 transition duration-300' />
        <img src={Partner4} alt="Partner 4" className='w-[150px] h-[50px] object-contain mx-8 filter grayscale hover:grayscale-0 transition duration-300' />
      </Marquee>
    </div>
  )
}

export default Partner;
