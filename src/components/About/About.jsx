import React from "react";
import "./about.css";
import CountUp from "react-countup";
import { Container, Row, Col } from "reactstrap";
import counterImg from "../../Assests/images/counter.jpg";
const About = () => {
  return (
    <>
      <section id="About">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="about__img">
                <img src={counterImg} alt="About" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="about__content">
                <h2>About us</h2>
                <p>
                  We are providing students, tech enthusiastic a platform to get
                  skilled in Modern Technologies, Skills, Stack. We believe in
                  practical knowledge not just theories.
                </p>
                <div className="about__counter">
                  <div className="d-flex gap-5 align-items-center">
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={20} duration={2} suffix="K" />
                      </span>
                      <p className="counter__title">Completed Projects</p>
                    </div>
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={18} duration={2} suffix="K" />
                      </span>
                      <p className="counter__title">Students Around World</p>
                    </div>
                  </div>
                  <div className="d-flex gap-5 align-items-center">
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={75} duration={2} suffix="M" />
                      </span>
                      <p className="counter__title"> Ideas Raised Fund</p>
                    </div>
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={3} duration={2} suffix="K" />
                      </span>
                      <p className="counter__title">Categories Served</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
