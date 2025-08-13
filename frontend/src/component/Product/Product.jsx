import React from "react";
import ProductCard from "../../component/ProductCard/ProductCard";
import Iphone1 from "../../assets/products/Iphone1.png";
import Iphone2 from "../../assets/products/Iphone2.png";
import Iphone3 from "../../assets/products/Iphone3.png";
import Iphone4 from "../../assets/products/Iphone4.png";

const Product = () => {
  const products = [
    {
      imgSrc: Iphone1,
      title: "iPhone 14 256 GB - Red",
      price: 1199,
      rating: 5,
    },
    {
      imgSrc: Iphone2,
      title: "iPhone 16 Pro Max 512 GB - Gold",
      price: 999,
      rating: 4,
    },
    {
      imgSrc: Iphone3,
      title: "iPhone 12",
      price: 799,
      rating: 4,
    },
    {
      imgSrc: Iphone4,
      title: "iPhone SE",
      price: 399,
      rating: 3,
    },
  ];

  return (
    <div className="pt-8">
      <div className="container">
        <div className='text-center my-8'>
            <h1 className='text-3xl lg:text-4xl font-bold '>Our Products</h1>
            <h1 className='text-sm text-gray-500'>Explre Our Product</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center my-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
