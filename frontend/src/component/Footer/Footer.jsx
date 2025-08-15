// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaHome, FaEnvelope, FaPhone, FaPrint } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white text-gray-600">
      <div className="container">
      {/* Top Social Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b border-gray-300">
        <div className="hidden md:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaGoogle /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaGithub /></a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="flex flex-col md:flex-row justify-between items-start py-8">
        {/* Company */}
        <div className="w-[300px] my-4 mr-8">
          <h6 className="text-4xl font-bold mb-4 flex items-center gap-2">
            iBox
          </h6>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-8 sm:mt-0">
        <div>
          <h6 className="uppercase font-bold mb-4">Products</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Iphone</a></li>
            <li><a href="#" className="hover:underline">Mac</a></li>
            <li><a href="#" className="hover:underline">Smart Watch</a></li>
            <li><a href="#" className="hover:underline">Ipad</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h6 className="uppercase font-bold mb-4">Quick Links</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Category</a></li>
            <li><a href="#" className="hover:underline">Product</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h6 className="uppercase font-bold mb-4">Contact</h6>
          <p className="flex items-center gap-2">
            <FaHome /> Surabaya, Indonesia
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope /> iBoxTio@gmail.com
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaPhone /> + 68 123 456 789
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaPrint /> + 68 234 567 89
          </p>
        </div>
        </div>
        {/* Bottom Bar */}
        </div>
      </div>
      <div className="bg-gray-200 text-center py-4 text-sm">
                © 2025 Copyright:
                <a href="https://yourwebsite.com" className="font-bold ml-1">
                IBox-Tio
                </a>
            </div>
    </div>
  );
};

export default Footer;
