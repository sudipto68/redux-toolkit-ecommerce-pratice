import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./cart.module.scss";
import {
  removeFromCart,
  removeAll,
  reduceProduct,
  incrementProduct,
} from "../../Redux/features/Cart/CartSlice";
import EmptyCart from "../../Components/EmptyCart/EmptyCart";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  //calculate total price
  const totalPrice = products.cart.reduce(
    (a, c) => a + c.quantity * c.price,
    0
  );

  //remove product handler
  const removeProductHandler = (product) => {
    dispatch(removeFromCart(product));
    toast.warning(`${product.title.slice(0, 20)} is removed from cart`, {
      autoClose: 1000,
    });
  };

  //remove all product handler
  const removeAllProduct = () => {
    dispatch(removeAll());
    toast.error("Your Cart is now empty", {
      autoClose: 1000,
    });
  };

  if (products.cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="container py-5 mt-4">
      <h2 className="py-3 text-center">Cart Page</h2>
      {products?.cart?.map((product) => {
        return (
          <div key={product.id} className={styles.cartCard}>
            <div>
              <img src={product.image} alt="product" width="50px" />
            </div>
            <div>
              <h5 style={{ maxWidth: "180px" }}>
                {product.title.slice(0, 20)}
              </h5>
              <h6>${product.price}</h6>
            </div>
            <div className="cartBtns">
              <button
                className={`${styles.cartBtn} fw-bold`}
                onClick={() => dispatch(incrementProduct(product))}
              >
                +
              </button>
              <h6>{product.quantity}</h6>
              <button
                className={`${styles.cartBtn} fw-bold`}
                onClick={() => dispatch(reduceProduct(product))}
              >
                -
              </button>
            </div>
            <div>
              <h6>${(product.price * product.quantity).toFixed(2)}</h6>
              <button
                className="btn btn-danger"
                onClick={() => {
                  removeProductHandler(product);
                }}
              >
                remove
              </button>
            </div>
          </div>
        );
      })}

      <hr />
      <div className="mb-5 d-flex justify-content-between">
        <button className={styles.cartBtn} onClick={removeAllProduct}>
          Remove All items
        </button>
        <h5>
          Total Price: <b>${totalPrice.toFixed(2)}</b>
        </h5>
      </div>
    </div>
  );
};

export default Cart;
