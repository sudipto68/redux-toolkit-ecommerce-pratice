import React from "react";
import { useNavigate } from "react-router-dom";
import cart from "../../assests/cart.png";
import styles from "./emptycart.module.scss";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.emptyCart}>
        <img src={cart} alt="empty-cart-img" />
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Go Back to Add Some Products
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
