import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./cart.module.scss";
import { removeFromCart, removeAll } from "../../Redux/features/Cart/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const totalPrice = products.cart.reduce(
    (a, c) => a + c.quantity * c.price,
    0
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products.cart)); //adding cart data to lcoal storaage
  }, [products.cart]);

  return (
    <div className="container" style={{ minHeight: "100vh" }}>
      <h2 className="py-3 text-center">Cart Page</h2>
      {products?.cart?.map((product) => {
        return (
          <div key={product.id} className={styles.cartCard}>
            <div>
              <img src={product.image} alt="product" width="40px" />
            </div>
            <div>
              <h5 style={{ maxWidth: "180px" }}>
                {product.title.slice(0, 20)}
              </h5>
              <h6>${product.price}</h6>
            </div>
            <div className="cartBtns">
              <button>+</button>
              <h6>{product.quantity}</h6>
              <button>-</button>
            </div>
            <div>
              <h6>${product.price * product.quantity}</h6>
              <button onClick={() => dispatch(removeAll())}>remove</button>
            </div>
          </div>
        );
      })}

      <hr />
      <div className="mb-5 d-flex justify-content-end">
        <h5>
          Total Price: <b>${totalPrice.toFixed(2)}</b>
        </h5>
      </div>
    </div>
  );
};

export default Cart;
