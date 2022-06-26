import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./naav.module.scss";

const Naav = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar expand="lg" className={styles.navBar}>
        <Container>
          <Navbar.Brand>
            <NavLink to="/" className={styles.navLink}>
              Redux Commerce
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                to="/"
                className={`${styles.navLink} ${styles.menuLink}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={`${styles.navLink} ${styles.menuLink}`}
              >
                About Us
              </NavLink>
              <NavLink
                to="/wishlist"
                className={`${styles.navLink} ${styles.menuLink}`}
              >
                Wishlist
              </NavLink>
              <NavLink
                to="/cart"
                className={`${styles.navLink} ${styles.menuLink}`}
              >
                Cart({cart?.length})
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Naav;
