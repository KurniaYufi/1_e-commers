import React from 'react';
import '../../App.css';
import News1 from "../../assets/Products/News1.jpg";
import News2 from '../../assets/Products/News2.jpg';
import News3 from '../../assets/Products/News3.jpg';

const Blog = () => {
  return (
    <div className="pt-8">
      <div className="container mb-25">
        <div className='text-center my-10'>
          <h1 className='text-3xl lg:text-4xl font-bold'>Recent News</h1>
          <h1 className='text-sm text-gray-500'>Explre Our Blogs</h1>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Card 1 */}
          <div 
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img src={News1} alt="News 1" className='w-full h-[250px] object-cover rounded-2xl mb-2' />
            <p className='text-sm mb-4'>Jan 20, 2024 by Dilshad</p>
            <h1 className='text-lg font-semibold'>New Product Launch</h1>
            <p className='text-gray-600 text-sm'>
              Find a smartwatch that matches your lifestyle and needs. Learn the key features to look for before buying.
            </p>
          </div>

          {/* Card 2 */}
          <div 
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <img src={News2} alt="News 2" className='w-full h-[250px] object-cover rounded-2xl mb-2' />
            <p className='text-sm mb-4'>Jan 20, 2024 by Dilshad</p>
            <h1 className='text-lg font-semibold'>How to choose perfect gadget</h1>
            <p className='text-gray-600 text-sm'>
              Not every gadget is worth your money or time. Discover quick tips to find the perfect device that truly fits your needs and lifestyle.
            </p>
          </div>

          {/* Card 3 */}
          <div 
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <img src={News3} alt="News 3" className='w-full h-[250px] object-cover rounded-2xl mb-2' />
            <p className='text-sm mb-4'>Jan 20, 2024 by Dilshad</p>
            <h1 className='text-lg font-semibold'>Introduces AppleCare One</h1>
            <p className='text-gray-600 text-sm'>
              AppleCare One offers all-in-one protection, repairs, and support. Enjoy peace of mind for every Apple device you own.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;
