import React from "react";
// import cat1 from "../../assests/cat1.webp";
// import cat2 from "../../assests/cat2.webp";
// import cat3 from "../../assests/cat3.webp";
// import cat4 from "../../assests/cat4.webp";
import styles from "./category.module.scss";

const Caterogry = () => {
  const categories = [
    {
      img: "https://www.chanel.com/images//t_one/t_fashion9//b_rgb:F7F7F7,e_brightness:-3/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_1680/butterfly-sunglasses-black-gold-acetate-metal-acetate-metal-packshot-default-a71553x06081s2216-9524096401438.jpg",
      name: "eyewear",
      id: 1,
    },
    {
      img: "https://blog.fashionphile.com/wp-content/uploads/2022/05/Blog_AuthvsFakeChanelJ12Watch_Hero.jpg",
      name: "watches",
      id: 2,
    },
    {
      img: "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_1680/bleu-de-chanel-eau-de-parfum-twist-and-spray-3x0-7fl-oz--packshot-default-107300-8822024011806.jpg",
      name: "men's",
      id: 3,
    },
    {
      img: "https://www.chanel.com/images//t_one//w_0.55,h_0.55,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_1680/chance-deodorant-spray-3-4fl-oz--packshot-default-126900-8824196038686.jpg",
      name: "women's",
      id: 4,
    },
  ];
  return (
    <div className="pt-5 container">
      <h3 className="py-2">Caterogry</h3>
      <div className={`${styles.categoryWrapper}`}>
        {categories.map((Category) => {
          return (
            <div key={Category.id}>
              <div
                className="category"
                style={{
                  background: `linear-gradient(rgba(20,20,20, 0.3),rgba(20,20,20, .3)), url(${Category.img}) no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h5 className="text-white px-3">
                  {Category.name.toUpperCase()}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Caterogry;
