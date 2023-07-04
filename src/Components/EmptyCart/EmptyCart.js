import React from "react";
import { useNavigate } from "react-router-dom";
// import cart from "../../assests/cart.png";
import styles from "./emptycart.module.scss";
import { AiOutlineShopping } from "react-icons/ai";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.emptyCart}>
        {/* <img src={cart} alt="empty-cart-img" /> */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjh_hXkwU9ZXSSn68DM3AmAtz8gdSYz4KxiQ&usqp=CAU"
          alt="empty-cart-img"
          style={{ width: "330px", height: "300px", marginTop: "100px" }}
        />
        <h1>
          Your Cart is <span style={{ color: "red" }}>Empty</span>!
        </h1>
        You don’t have any items in your cart.{" "}
        <p>Must add items on the cart before you proceed to check out.</p>
        <button
          className="btn btn-danger"
          style={{ marginTop: "20px", borderRadius: "40px", fontSize: "18px" }}
          onClick={() => navigate("/")}
        >
          <AiOutlineShopping style={{ marginBottom: "5px" }} />
          RETURN TO SHOP
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
