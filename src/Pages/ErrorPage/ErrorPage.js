import React from "react";
import notfound from "../../assests/notfound.png";

const ErrorPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center pt-5">
      <img src={notfound} alt="Not found" />
    </div>
  );
};

export default ErrorPage;
