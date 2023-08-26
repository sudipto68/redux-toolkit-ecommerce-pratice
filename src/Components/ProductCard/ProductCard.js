import React, { memo } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/features/Cart/CartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./productCard.module.scss";

const ProductCard = ({ product }) => {
  const title = product?.title.slice(0, 20);
  const dispatch = useDispatch();
  //const cartItems = useSelector((state) => state.cart.cart);

  const navigate = useNavigate();

  //add product to cart handle
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
        {/* <AiOutlineStar size={22} style={{ marginLeft: "90%" }} /> */}
        <Card.Img
          onClick={() => navigate(`/products/${product?.id}`)}
          variant="top"
          src={product?.image}
          className={styles.cardImg}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>${product?.price}</Card.Text>
          {/* <Button className={styles.commonBtn} onClick={addProduct}>
            <AiOutlinePlus />
            ADD TO CART
          </Button> */}
          <AiOutlinePlusCircle size={22} onClick={addProduct} />
        </Card.Body>
        <AiOutlineStar
          size={22}
          style={{ marginLeft: "90%", marginBottom: "5px" }}
        />
      </Card>
    </div>
  );
};

export default memo(ProductCard);
