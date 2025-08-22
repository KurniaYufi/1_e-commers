import React from 'react'
import '../../App.css';
import Hero from '../Hero/Hero';
import Image4 from '../../assets/Products/Image4.png';
import Image5 from '../../assets/Products/Image5.png';
import Image6 from '../../assets/Products/Image6.png';

const Category = () => {
  return (
    <div className='pt-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Left Category */}
            <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-r from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div className='flex flex-col items-left'>
                    <h1 className='mb-[2px] text-white'>Enjoy</h1>
                    <h1 className='text-2xl font-semibold mb-[2px]'>This</h1>
                    <h1 className='text-4xl xl:text-5xl font-bold opacity-20 mb-4'>AirPods</h1>
                    <button className='bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 w-[110px]'>Browse</button>
                    <img 
                      src={Image4} 
                      alt="" 
                      className='w-[280px] absolute lg:bottom-2 lg:right-6 lg:-rotate-4 bottom-2 -right-6 -rotate-4'
                      data-aos="zoom-in"
                      data-aos-delay="0"
                    />
                </div>
            </div>

            {/* Middle Category */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div className='flex flex-col items-left'>
                    <h1 className='mb-[2px] text-white'>Enjoy</h1>
                    <h1 className='text-2xl font-semibold mb-[2px]'>This</h1>
                    <h1 className='text-4xl xl:text-5xl font-bold opacity-20 mb-4'>Imac</h1>
                    <button className='bg-white text-brandYellow cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 w-[110px]'>Browse</button>
                    <img 
                      src={Image5} 
                      alt="" 
                      className='w-[250px] absolute bottom-2 -right-8 -rotate-0'
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    />
                </div>
            </div>

            {/* Right Category */}
            <div className='py-10 pl-5 bg-gradient-to-br from-sky-300/90 to-sky-300/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div className='flex flex-col items-left'>
                    <h1 className='mb-[2px] text-white'>Enjoy</h1>
                    <h1 className='text-2xl font-semibold mb-[2px]'>This</h1>
                    <h1 className='text-4xl xl:text-5xl font-bold opacity-20 mb-4'>Ipad</h1>
                    <button className='bg-white text-sky-300 cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 w-[110px]'>Browse</button>
                    <img 
                      src={Image6} 
                      alt="" 
                      className='w-[230px] absolute bottom-2 -right-2 -rotate-2'
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
