import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./wishlist.module.scss";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { removeAll } from "../../Redux/features/wishlist/WishListSlice";

const WishList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.wishlist);
  const content =
    products?.wishList?.length > 0 ? (
      products?.wishList?.map((product) => {
        return <ProductCard key={product?.id} product={product} />;
      })
    ) : (
      <p style={{ fontSize: "24px" }}>You have no products in Wishlist</p>
    );

  return (
    <div className="container">
      <div className={styles.wishListWrapper}>
        <h2 className="text-center py-3">My WishList</h2>
        <div
          className={`d-flex justify-content-center align-items-center ${styles.wishListItemWrapper}`}
        >
          {content}
        </div>
        {products?.wishList?.length > 0 && (
          <button
            className={`${styles.wishListBtn}`}
            onClick={() => dispatch(removeAll())}
          >
            Remove all from Wishlist
          </button>
        )}
      </div>
    </div>
  );
};

export default WishList;
