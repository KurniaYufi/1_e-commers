// App.jsx
import React from "react";
import Navbar from "./component/navbar/navbar";
import Hero from "./component/Hero/Hero";
import Category from "./component/Category/Category";
import Category2 from "./component/Category/Category2";
import Services from "./component/Services/Services";
import Banner from "./component/Banner/Banner";
import Product from "./component/Product/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Category />
      <Category2/>
      <Services />
      <Banner />
      <Product />
      <Banner />
      {/* Add other components as needed */}
    </div>
  );
}

export default App;