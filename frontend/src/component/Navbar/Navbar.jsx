import React from 'react';
import '../../App.css'; 
import { IoMdSearch } from 'react-icons/io';
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";

const MenuLinks = [
  { id: 1, name: 'Home', link: '/#' },
  { id: 2, name: 'Shop', link: '/#shop' },
  { id: 3, name: 'About', link: '/#about' },
  { id: 4, name: 'Blogs', link: '/#blogs' },
];

const DropdownLinks = [
  { id: 1, name: 'Trending Products', link: '/#' },
  { id: 2, name: 'Best Selling', link: '/#' },  
  { id: 3, name: 'Top Rated', link: '/#' },
];

const Navbar = () => {
  return (
    <nav>
      <div className='bg-white duration-200 relative z-40'>
        <div className='py-4'>
          <div className='container flex justify-between items-center'>
            {/* Logo dan Menu */}
            <div className='flex items-center gap-4'>
              <a
                href='/'
                className='text-primary font-bold text-2xl sm:text-3xl'>
                iBox
              </a>

              {/* Menu Item */}
              <div className='hidden lg:block'>
                <ul className='flex items-center gap-4 text-base font-semibold'>
                  {MenuLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.link}
                        className='px-4 font-semibold text-gray-500 hover:text-black duration-200'>
                        {link.name}
                      </a>
                    </li>
                  ))}
                  {/* Dropdown */}
                  <li className='relative group cursor-pointer'>
                    <a href="" className='flex items-center px-4 font-semibold text-gray-500 hover:text-black  duration-200'>
                      Quick Links
                      <span>
                        <MdArrowDropDown className='group-hover:rotate-180 transition-all duration-300 
                        text-3xl text-gray-500 hover:text-black '/>
                    </span>
                    </a>
                    {/* Dropdown Links */}
                    <div>
                      <ul className='space-y-2 absolute z-[9999] hidden group-hover:block w-[200px] bg-white shadow-md rounded-md p-2'>
                        {DropdownLinks.map((dropdownLink) => (
                          <li key={dropdownLink.id}>
                            <a
                              href={dropdownLink.link}
                              className='block p-2 text-gray-500 duration-200 hover:bg-primary/20 rounded-md'>
                              {dropdownLink.name}
                            </a>
                          </li>
                        ))} 
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Navbar Right Section */}
            <div className='flex justify-between items-center gap-6'>
              {/* search bar section */}
              <div className='relative group hidden sm:block'>
                <input
                  type="text"
                  placeholder='Search'
                  className='search-bar'
                />
                <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary duration-300 absolute top-1/2 -translate-y-1/2 right-3' />
              </div>

              {/* order button section */}
              <button className='relative p-3'>
                <FaShoppingCart className='text-xl text-gray-600 hover:text-primary duration-200' />
                <div className='absolute w-4 h-4 bg-primary rounded-full text-white items-center top-0 right-0 flex justify-center text-xs'>
                  4
                </div>
              </button>

              {/* Acc */}
              <div>
                <MdAccountCircle className='text-gray-600 text-2xl cursor-pointer duration-200'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;