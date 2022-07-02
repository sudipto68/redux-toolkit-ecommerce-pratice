import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../constants/Status";
import { fetchProduct } from "../../Redux/features/Product/ProductSlice";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./productlist.module.scss";
import Loader from "../Loader/Loader";

const ProductList = () => {
  const [limitProducts, setLimitProducts] = useState(true);

  const dispatch = useDispatch();

  const { products, status } = useSelector((state) => state.products);

  const productList = limitProducts ? products.slice(0, 6) : products;

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  if (status === STATUS.LOADING) {
    return <Loader />;
  }

  if (status !== STATUS.LOADING && status === STATUS.ERROR) {
    return <h2>{status}</h2>;
  }

  return (
    <div className={styles.productListWrapper} id="product-list">
      <Container>
        <h3>Shop by Collection</h3>
        <p>
          Each season, we collaborate with world class designers to create a
          collection inspired by natural world.
        </p>
        <div className={styles.productList}>
          {productList?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
        <div className="text-center py-5">
          <button
            className="btn loadBtn text-center"
            onClick={() => setLimitProducts(!limitProducts)}
          >
            {limitProducts ? "Load More Products" : "Load Limited Products"}
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
