import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./naav.module.scss";

import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import Image from "react-bootstrap/Image";

const Naav = () => {
  const { cart } = useSelector((state) => state.cart);

  const menus = [
    {
      name: "Home",
      id: 1,
      path: "/",
    },
    {
      name: "About Us",
      id: 2,
      path: "/about",
    },
    {
      // name: "WishList",
      name: (
        <>
          WishList <AiOutlineStar size={23} style={{ marginBottom: "5px" }} />
        </>
      ),
      id: 3,
      path: "/wishlist",
    },
  ];
  return (
    <div>
      <Navbar expand="lg" className={`${styles.navBar} fixed-top`}>
        <Container>
          <Navbar.Brand>
            <NavLink to="/" className={`${styles.navLink} text-uppercase`}>
              {/* <img src="https://www.freepnglogos.com/uploads/chanel-logo-vector-19.jpg" alt="abc" width="500" height="600"> */}
              <Image
                src="https://freepngimg.com/thumb/chanel/61032-fashion-ai-collection-perfume-cruise-logo-chanel-thumb.png"
                style={{ width: "30px", height: "30px", marginBottom: "2px" }}
              />
              <b>CHANEL</b>
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {menus.map((menu) => (
                <NavLink
                  to={menu.path}
                  key={menu.id}
                  className={`${styles.navLink} ${styles.menuLink}`}
                >
                  {menu.name}
                </NavLink>
              ))}

              <NavLink
                to="/cart"
                className={`${styles.navLink} ${styles.cartIcon}`}
              >
                <AiOutlineShopping size={23} />{" "}
                <div className={styles.cartLength}>
                  <h6>{cart?.length}</h6>
                </div>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Naav;

// <NavLink
//                 to="/about"
//                 className={`${styles.navLink} ${styles.menuLink}`}
//               >
//                 About Us
//               </NavLink>
//               <NavLink
//                 to="/wishlist"
//                 className={`${styles.navLink} ${styles.menuLink}`}
//               >
//                 Wishlist
//               </NavLink>
