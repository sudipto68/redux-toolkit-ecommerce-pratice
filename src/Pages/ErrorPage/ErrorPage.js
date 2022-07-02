import React from "react";
import notfound from "../../assests/notfound.png";
import styles from "./errorpage.module.scss";

const ErrorPage = () => {
  return (
    <div
      className={`${styles.errorPage} d-flex justify-content-center align-items-center pt-5`}
    >
      <img src={notfound} alt="Not found" />
    </div>
  );
};

export default ErrorPage;
