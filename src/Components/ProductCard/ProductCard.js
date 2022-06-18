import React, { memo } from "react";
import { Button, Card } from "react-bootstrap";

import styles from "./productCard.module.scss";

const ProductCard = ({ product }) => {
  const title = product?.title.slice(0, 20);
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
          <Button className={styles.commonBtn}>ADD TO CART</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default memo(ProductCard);
