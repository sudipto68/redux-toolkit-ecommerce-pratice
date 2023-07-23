import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../constants/Status";
import { fetchProducts } from "../../Redux/features/Product/ProductSlice";
import {
  setCategory,
  setSearchProduct,
} from "../../Redux/features/ProductFilter/FilterSlice";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./productlist.module.scss";
import Loader from "../Loader/Loader";

import { BiSearch } from "react-icons/bi";

const ProductList = () => {
  const [showSearch, setShowSearch] = useState(false);

  const dispatch = useDispatch();

  const { products, status } = useSelector((state) => state.products);
  const { searchedProduct, category } = useSelector(
    (state) => state.productFilter
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  let productsData;

  const categories = [
    {
      value: "all",
      name: "Find Product By Category",
    },
    {
      value: "jewelery",
      name: "Jewelery",
    },
    {
      value: "electronics",
      name: "Electronics",
    },
    {
      value: "men's clothing",
      name: "Men's Clothing",
    },
    {
      value: "women's clothing",
      name: "Women's Clothing",
    },
  ];

  if (searchedProduct) {
    productsData = products?.filter((item) =>
      item.title.toLowerCase().includes(searchedProduct.toLowerCase())
    );
  } else if (category.length > 0) {
    if (category.toLowerCase() === "all") {
      productsData = products;
    } else {
      productsData = products?.filter((item) =>
        item.category.toLowerCase().includes(category.toLowerCase())
      );
    }
  } else {
    productsData = products;
  }

  if (status === STATUS.LOADING) {
    return <Loader />;
  }

  if (status !== STATUS.LOADING && status === STATUS.ERROR) {
    return <h2>{status}</h2>;
  }

  return (
    <div className={styles.productListWrapper} id="product-list">
      <Container>
        <div className={styles.searchWrapper}>
          <div>
            <h3>Shop by Collection</h3>
            <p>
              Each season, we collaborate with world class designers to create a
              collection inspired by natural world.
            </p>
          </div>
          <div>
            {showSearch && (
              <input
                type="text"
                className={styles.searchBar}
                value={searchedProduct}
                onChange={(e) => dispatch(setSearchProduct(e.target.value))}
                placeholder="Search Product"
              />
            )}
            <BiSearch
              size={25}
              onClick={() => setShowSearch(!showSearch)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className={styles.categorySelector}>
          <select
            className="form-select"
            aria-label="Default select example"
            defaultValue={category}
            onChange={(e) => dispatch(setCategory(e.target.value))}
          >
            {categories.map((option) => (
              <option value={option.value} key={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.productList}>
          {productsData?.map((product) => {
            return <ProductCard key={product?.id} product={product} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
