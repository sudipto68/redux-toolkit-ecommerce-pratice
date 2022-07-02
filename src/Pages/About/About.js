import React from "react";
import { Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div
      className="py-4 d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", textAlign: "center" }}
    >
      <Container>
        <Row>
          <h1 className="py-4">About Us</h1>
          <p>
            Redux Commerce Limited is a leading Ecommerce company established in
            June 2022. Main focus of this company is to develop product as a
            Product, by maintaining the security and global standard of
            New-Ecommerce-Era. The main products of the company include Exchange
            Broker/TREC holder's Back-Office Management System, Cloud based
            Point of Sale and Enterprise Resource Planning solution, e-Commerce
            Solution and Hotel Owners' Property Management System etc. The
            management team of this company are the ICT Industry leaders having
            more than 25 years experience in ICT arena.
          </p>
          <p>
            The main products of the company include Exchange Broker/TREC
            holder's Back-Office Management System, Cloud based Point of Sale
            and Enterprise Resource Planning solution, e-Commerce Solution and
            Hotel Owners' Property Management System etc. The management team of
            this company are the ICT Industry leaders having more than 25 years
            experience in ICT arena.
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default About;
