import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//Hero image
import "./hero-section.css";
import "../../index.css";
import heroImg from "../../Assests/images/heroImg.avif";
const HeroSection = () => {
  return (
    <section id="Home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4">
                Anytime Anywhere Anything <br /> On Your Device
              </h2>
              <p className="mb-4">
                Choose from over 100+ online courses with new additions
                published <br /> every month. Take AcadeMIC's range of
                Development courses and <br /> learn how to code, develop,
                compete. Instructors from around the <br /> world teaches
                thousands of students on AcadeMIC. We provide tools <br /> and
                skills to teach what you love.
              </p>
              <div className="search">
                <input type="text" placeholder="Search" />
                <button
                  className="btn"
                  style={{ background: "#17bf9de5", borderRadius: "45px" }}
                >
                  Search
                </button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <img
              src={heroImg}
              alt=""
              className="w-100"
              style={{ borderRadius: "15px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
