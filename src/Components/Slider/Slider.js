import React from "react";
import styles from "./slider.module.scss";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";

const Slider = () => {
  const sliderItems = [
    {
      id: 1,
      caption: "FRAGRANCE",
      img: "https://puls-img.chanel.com/c_limit,w_3200/q_auto:best,dpr_auto/1682427316836-herojpg_1600x2880.jpg",
    },
    {
      id: 2,
      caption: "FRAGRANCE",
      img: "https://puls-img.chanel.com/c_limit,w_1920/q_auto:best,dpr_auto/1682427316836-behindthescenes6jpg_944x1742.jpg",
    },
    {
      id: 3,
      caption: "FRAGRANCE",
      img: "https://puls-img.chanel.com/c_limit,w_1920/q_auto:best,dpr_auto/1682427316894-behindthescenes1jpg_944x1740.jpg",
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
                    fontSize: "18px",
                    lineHeight: "18px",
                  }}
                >
                  {item.caption}
                </h1>
                <p style={{ fontSize: "50px" }}>BLEU DE CHANEL</p>
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
