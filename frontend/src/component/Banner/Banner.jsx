import React from 'react'
import '../../App.css';
import Image1 from '../../assets/products/Image2.png';

const Banner = () => {
  return (
    <div className='pt-12'>
      <div  className='container'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-8 bg-primary rounded-3xl p-8 text-white items-center'>
          <div className='flex flex-col'>
            <h1>30% OFF</h1>
            <h1 className='text-4xl lg:text-7xl font-bold'>FINE SMILE</h1>
            <h1>10 Jan to 28 Jan</h1>
          </div>
          <div>
            <img src={Image1} alt="" className='scale-140 w-[250px] md:w-[340px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover'/>
          </div>
          <div className='flex flex-col justify-center gap-4 lg:pl-6'>
            <h1 className='text-xl font-bold'>Macbook Pro</h1>
            <h1 className='text-4xl lg:text-5xl font-bold'>SUMMER SALE</h1>
            <h1 className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sequi consectetur.</h1>
            <button className='bg-white py-2 px-4 rounded-full text-primary w-[110px]'>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
