import React from "react";
import ProductCard from "../../component/ProductCard/ProductCard";
import Iphone1 from "../../assets/Products/Iphone1.png";
import Iphone2 from "../../assets/Products/Iphone2.png";
import Iphone3 from "../../assets/Products/Iphone3.png";
import Iphone4 from "../../assets/Products/Iphone4.png";
import Iphone5 from "../../assets/Products/Iphone5.png";
import Iphone6 from "../../assets/Products/Iphone6.png";
import Iphone7 from "../../assets/Products/Iphone7.png";
import Iphone8 from "../../assets/Products/Iphone8.png";

const Product = () => {
  const products = [
  {
    imgSrc: Iphone1,
    title: "iPhone 14 256 GB - Red",
    price: 9700000, 
    rating: 5,
  },
  {
    imgSrc: Iphone2,
    title: "iPhone 16 Pro Max 512 GB - Gold",
    price: 27499000, 
    rating: 5,
  },
  {
    imgSrc: Iphone3,
    title: "iPhone SE 128 GB - White",
    price: 13999000,
    rating: 4,
  },
  {
    imgSrc: Iphone4,
    title: "iPhone 16 256 GB - Purple",
    price: 13999000,
    rating: 4,
  },
  {
    imgSrc: Iphone5,
    title: "iPhone 16 Pro 128 GB - Platinum",
    price: 17999000, 
    rating: 4,
  },
  {
    imgSrc: Iphone6,
    title: "iPhone 14 128 GB - Black",
    price: 9699000,
    rating: 4,
  },
  {
    imgSrc: Iphone7,
    title: "iPhone 15 256 GB - Blue",
    price: 13999000,
    rating: 5,
  },
  {
    imgSrc: Iphone8,
    title: "iPhone 14 128 GB - Yellow",
    price: 9699000, 
    rating: 3,
  },
];


  return (
    <div className="pt-8 pb-8">
      <div className="container px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Our Products</h1>
          <p className="text-sm text-gray-500">Explore Our Product</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 place-items-center">
          {products.map((product, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="w-full"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;