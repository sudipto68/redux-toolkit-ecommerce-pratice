import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <>
        <div>
          <h2
            style={{ textAlign: "center", paddingTop: "15px", color: "white" }}
          >
            CHANEL
          </h2>
          {/* Grid container */}
          <div className="container p-4">
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">explore chanel.com</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-light">
                      Watches
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-light">
                      Eyewear
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-light">
                      Fragrance
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-light">
                      Skincare
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0">boutique services</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-light">
                      Store Locator
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">the house of chanel</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#" className="text-light">
                      Report to Society
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-light">
                      Fighting Counterfeits
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-light">
                      Financial Results
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0">online services</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-light">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-light">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-light">
                      Legal
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-light">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-light">
                      Care & Services
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-light">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
          {/* Grid container */}
        </div>
        <div style={{ borderTop: "1px solid grey" }}>
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div className="me-5 d-none d-lg-block">
              <span>Get in touch with us by:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-youtube" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
        </div>
      </>
    </div>
  );
};

export default Footer;
