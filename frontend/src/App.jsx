// App.jsx
import React, { useEffect } from "react";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Category from "./component/Category/Category";
import Category2 from "./component/Category/Category2";
import Services from "./component/Services/Services";
import Banner from "./component/Banner/Banner";
import Product from "./component/Product/Product";
import News from "./component/Blog/Blog";
import Partner from "./component/Partner/Partner";
import Footer from "./component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import Macbook from './assets/Products/Image2.png';
import Headphone from './assets/Products/Image7.png';

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
  // Init AOS sekali di root
  useEffect(() => {
    AOS.init({
    duration: 800,
    offset: 50,
    easing: "ease-in-sine",
    once: false,
    mirror: true,
    delay: 100,
  });
  AOS.refresh();
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
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