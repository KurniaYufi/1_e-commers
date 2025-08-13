import React from 'react'
import '../../App.css';
import Image1 from '../../assets/Products/Image1.png';
import Image2 from '../../assets/Products/Image2.png';
import Image3 from '../../assets/Products/Image3.png';

const CategoryData = [
  { 
      id: 1, 
      img: Image1,
      capt1: 'Enjoy',
      capt2: 'With',
      name: 'Iphone',
    },
    { 
      id: 2, 
      img: Image2,
      capt1: 'Enjoy',
      capt2: 'With',
      name: 'Macbook',
    },
    { 
      id: 3, 
      img: Image3,
      capt1: 'Enjoy',
      capt2: 'With',
      name: 'Watch',
    }
  ];

const Category = () => {
  return (
    <div className='pt-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Left Category */}
            <div className='py-10 pl-5 bg-gradient-to-br from-fuchsia-300/90 to-fuchsia-300/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div className='flex flex-col items-left'>
                    <h1 className='mb-[2px] text-white'>Enjoy</h1>
                    <h1 className='text-2xl font-semibold mb-[2px]'>This</h1>
                    <h1 className='text-4xl xl:text-5xl font-bold opacity-20 mb-4'>Iphone</h1>
                    <button className='bg-white text-fuchsia-300 cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 w-[110px]'>Browse</button>
                    <img src={Image1} alt="" className='w-[240px] absolute bottom-2 -right-6 -rotate-4'/>
                </div>
            </div>
            <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div className='flex flex-col items-left'>
                    <h1 className='mb-[2px] text-gray-400'>Enjoy</h1>
                    <h1 className='text-2xl font-semibold mb-[2px]'>This</h1>
                    <h1 className='text-4xl xl:text-5xl font-bold opacity-20 mb-4'>Macbook</h1>
                    <button className='bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 w-[110px]'>Browse</button>
                    <img src={Image2} alt="" className='w-[230px] absolute bottom-2 -right-6 -rotate-4'/>
                </div>
            </div>
            <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div className='flex flex-col items-left'>
                    <h1 className='mb-[2px] text-white'>Enjoy</h1>
                    <h1 className='text-2xl font-semibold mb-[2px]'>This</h1>
                    <h1 className='text-4xl xl:text-5xl font-bold opacity-20 mb-4'>Smart Watch</h1>
                    <button className='bg-white text-primary cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 w-[110px]'>Browse</button>
                    <img src={Image3} alt="" className='w-[280px] absolute lg:bottom-2 lg:right-6 lg:-rotate-4 bottom-2 -right-6 -rotate-4'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
