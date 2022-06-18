import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return <div className={styles.footer}>Copyright © {year} - Triplo LLC</div>;
};

export default Footer;
