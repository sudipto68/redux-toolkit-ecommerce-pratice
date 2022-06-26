import React, { memo } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

import styles from "./productCard.module.scss";
import { addToCart } from "../../Redux/features/Cart/CartSlice";

const ProductCard = ({ product }) => {
  const title = product?.title.slice(0, 20);
  const dispatch = useDispatch();
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
            onClick={() => dispatch(addToCart(product))}
          >
            ADD TO CART
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default memo(ProductCard);
