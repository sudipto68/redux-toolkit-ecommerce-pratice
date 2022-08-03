import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import Loader from "../Loader/Loader";
import useFetch from "../../Services/useFetch";
import ProductCard from "../ProductCard/ProductCard";

const ProductSlider = ({ category }) => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  //fetch slider data
  const { data, error, loading } = useFetch(`/category/${category}`);

  if (!error && loading) {
    return <Loader />;
  }
  if (!loading && error) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div className="container py-2">
      <Carousel itemsToShow={isMobile ? 1 : 3}>
        {data?.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </Carousel>
    </div>
  );
};

export default React.memo(ProductSlider);
