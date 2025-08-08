// App.jsx
import React from "react";
import Navbar from "./component/navbar/navbar";
import Hero from "./component/Hero/Hero";
import Category from "./component/Category/Category";
import Category2 from "./component/Category/Category2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Category />
      <Category2/>
    </div>
  );
}

export default App;