import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { STATUS } from "../../constants/Status";
import { fetchProducts } from "../../Redux/features/Product/ProductSlice";
import Loader from "../Loader/Loader";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const product = products.find((p) => p.id === parseInt(id));
  console.log(product);

  if (status === STATUS.LOADING) {
    return <Loader />;
  }

  if (status !== STATUS.LOADING && status === STATUS.ERROR) {
    return <h2>{status}</h2>;
  }

  return (
    <div className="container my-5 pt-5">
      <h1>ProductDetail</h1>
    </div>
  );
};

export default ProductDetail;
