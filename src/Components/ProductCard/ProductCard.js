import React, { memo } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/features/Cart/CartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import styles from "./productCard.module.scss";

const ProductCard = ({ product }) => {
  const title = product?.title.slice(0, 20);
  const dispatch = useDispatch();
  //const cartItems = useSelector((state) => state.cart.cart);

  const navigate = useNavigate();

  //add product to cart handler
  const addProduct = () => {
    dispatch(addToCart(product));
    toast.success(`${product?.title.slice(0, 20)} is added to cart`, {
      autoClose: 1000,
    });
  };

  return (
    <div>
      <Card
        style={{ width: "18rem", textAlign: "center" }}
        className={styles.productCard}
      >
        <Card.Img
          onClick={() => navigate(`/products/${product?.id}`)}
          variant="top"
          src={product?.image}
          className={styles.cardImg}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>${product?.price}</Card.Text>
          <Button className={styles.commonBtn} onClick={addProduct}>
            ADD TO CART
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default memo(ProductCard);
