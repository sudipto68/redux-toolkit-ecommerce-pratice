import React from "react";
import styles from "./about.module.scss";
import { Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className={styles.container}>
        <Row>
          <i className="py-3 text-center" style={{ fontSize: "30px" }}>
            About Us
          </i>
          <div
            style={{
              textAlign: "center",
              width: "500px",
              height: "650px",
              margin: "0 auto",
            }}
          >
            <p>
              <h2>
                “MAY MY LEGEND PROSPER AND THRIVE. I WISH IT A LONG AND HAPPY
                LIFE!”*
              </h2>
              <p>*The Allure of Chanel by Paul Morand, Hermann, 1996</p>
              <p>© Man Ray Trust / ADAGP Paris 2016.</p>
              <br></br>
            </p>
            <p>
              Gabrielle Chanel lived her life as she alone intended. The trials
              of a childhood as an orphan and the successes of an accomplished
              businesswoman gave birth to an extraordinary character; daring,
              free, and ahead of her time. Faithful friendships and passionate
              love affairs, as well as a thirst for culture, discovery and
              travel helped shaped her personality. A wardrobe freed from
              constraints and superfluity, tweaked with masculine accents,
              created a visionary allure that has become timeless and yet wildly
              modern. Pearls and diamonds casually paired with iconic perfumes
              have created a signature style... That of an avant-garde woman, a
              pioneer whose lifestyle and multiple facets forged the values of
              the House she founded, and who remains an inspiration for all
              women.
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default About;
