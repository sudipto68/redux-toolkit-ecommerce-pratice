import React, { useLayoutEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import Loader from "../Loader/Loader";
import useFetch from "../../Services/useFetch";
import ProductCard from "../ProductCard/ProductCard";

const ProductSlider = ({ category }) => {
  // const [isMobile, setIsMobile] = useState(false);

  // //choose the screen size
  // const handleResize = () => {
  //   if (window.innerWidth <= 767) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // };

  // // create an event listener
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  // });

  const [size, setSize] = useState("");
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  //fetch slider data according to category
  const { data, error, loading } = useFetch(`/category/${category}`);

  if (!error && loading) {
    return <Loader />;
  }
  if (!loading && error) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div className="container py-3">
      <Carousel itemsToShow={size <= 767 ? 1 : 3}>
        {data?.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </Carousel>
    </div>
  );
};

export default React.memo(ProductSlider);
