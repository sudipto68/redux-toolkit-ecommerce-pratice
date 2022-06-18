import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../Redux/features/Product/ProductSlice";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./productlist.module.scss";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div className={styles.productListWrapper}>
      <Container>
        <h2>Our Products</h2>
        <div className={styles.productList}>
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
