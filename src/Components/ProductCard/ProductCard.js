import React, { memo } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import styles from "./productCard.module.scss";
import { addToCart } from "../../Redux/features/Cart/CartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const title = product?.title.slice(0, 20);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div>
      <Card
        style={{ width: "18rem", textAlign: "center" }}
        className={styles.productCard}
      >
        <Card.Img
          variant="top"
          src={product?.image}
          className={styles.cardImg}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Button
            className={styles.commonBtn}
            onClick={() => {
              dispatch(addToCart(product));
              toast.success(`${product.title.slice(0, 20)} is added to cart`, {
                autoClose: 2000,
              });
            }}
          >
            ADD TO CART
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default memo(ProductCard);
