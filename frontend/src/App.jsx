// App.jsx
import React from "react";
import Navbar from "./component/navbar/navbar";
import Hero from "./component/Hero/Hero";
import Category from "./component/Category/Category";
import Category2 from "./component/Category/Category2";
import Services from "./component/Services/Services";
import Banner from "./component/Banner/Banner";
import Product from "./component/Product/Product";
import News from "./component/Blog/Blog";
import Partner from "./component/Partner/Partner";
import Footer from "./component/Footer/Footer";

import Macbook from './assets/products/Image2.png';
import Headphone from './assets/products/Image7.png';

const BannerData1 = {
  discount: "30% OFF",
  title: "FINE SMILE",
  dateRange: "10 Jan to 28 Jan",
  imgSrc: Macbook,
  productName: "Macbook Pro",
  promoTitle: "SUMMER SALE",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  buttonText: "Shop Now",
  bgColor: "bg-primary",
  buttonColor: "bg-white text-primary"
};

const BannerData2 = {
  discount: "50% OFF",
  title: "BIG DEAL",
  dateRange: "1 Feb to 15 Feb",
  imgSrc: Headphone,
  productName: "AirPods Max",
  promoTitle: "SUMMER SALE",
  description: "Nikmati diskon besar untuk produk pilihan. Eaque reiciendis",
  buttonText: "Buy Now",
  bgColor: "bg-gradient-to-br from-gray-400 to-gray-200",
  buttonColor: "text-white bg-primary"
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Category />
      <Category2/>
      <Services />
      <Banner {...BannerData1} />
      <Product />
      <Banner {...BannerData2} />
      <News />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
