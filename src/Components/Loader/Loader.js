import React from "react";
import loader from "../../assests/loader.gif";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center text-center">
      <img src={loader} alt="loading" />
    </div>
  );
};

export default Loader;
