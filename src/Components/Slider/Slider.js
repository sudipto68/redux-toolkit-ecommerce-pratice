import React from "react";
import img1 from "../../assests/img1.webp";
import img2 from "../../assests/img2.webp";
import img3 from "../../assests/img3.webp";
import styles from "./slider.module.scss";

import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";

const Slider = () => {
  const sliderItems = [
    {
      id: 1,
      caption: "All the Lastest Product In One Place",
      img: img1,
    },
    {
      id: 2,
      caption: "Grab the Lastest Product",
      img: img2,
    },
    {
      id: 3,
      caption: "Find All Your Needs In One Place",
      img: img3,
    },
  ];
  return (
    <div>
      <Carousel fade>
        {sliderItems.map((item) => {
          return (
            <Carousel.Item key={item.id} className={styles.sliderItem}>
              <img className="d-block w-100" src={item.img} alt="First slide" />
              <Carousel.Caption>
                <h1
                  style={{
                    color: "aliceblue",
                    fontSize: "48px",
                    lineHeight: "48px",
                  }}
                >
                  {item.caption}
                </h1>
                <p>
                  A single place for all your products. Discover more products
                  on our products secion
                </p>
                <Button className={styles.sliderBtn}>
                  <a href="#product-list">Discover More</a>
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
