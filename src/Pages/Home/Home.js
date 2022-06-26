import React from "react";
import Caterogry from "../../Components/Category/Caterogry";
import ProductList from "../../Components/ProductList/ProductList";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Caterogry />
      <ProductList />
    </div>
  );
};

export default Home;
