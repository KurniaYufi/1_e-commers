import React from 'react'
import '../../App.css';
import { FaCarSide } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";

const Serrvice = () => {
  return (
    <div className='my-22'>
      <div className='container'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='flex flex-col items-center justify-center'>
            <FaCarSide className='text-4xl lg:text-5xl text-primary mb-4' />
            <h2 className='text-xl font-semibold mb-2'>Free Shipping</h2>
            <p className='text-gray-600 text-center text-sm '>On all orders over $50</p>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <FaCheckCircle className='text-4xl lg:text-5xl text-primary mb-4' />
            <h2 className='text-xl font-semibold mb-2'>Quality Guarantee</h2>
            <p className='text-gray-600 text-center'>30 Days Money Back</p>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <FaWallet className='text-4xl lg:text-5xl text-primary mb-4' />
            <h2 className='text-xl font-semibold mb-2'>Secure Payment</h2>
            <p className='text-gray-600 text-center'>All Payment Secure</p>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <FaHeadset className='text-4xl lg:text-5xl text-primary mb-4' />
            <h2 className='text-xl font-semibold mb-2'>24/7 Support</h2>
            <p className='text-gray-600 text-center'>Technical support 24/7</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Serrvice
