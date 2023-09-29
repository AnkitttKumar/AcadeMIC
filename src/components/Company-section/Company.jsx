import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./company.css";
const Company = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="2" md="3">
              <h3 className="d-flex align-content-center gap-1">
                <i class="ri-vimeo-line"></i> vimeo
              </h3>
            </Col>
            <Col lg="2" md="3">
              <h3 className="d-flex align-content-center gap-1">
                <i class="ri-pinterest-line"></i> Pinterest
              </h3>
            </Col>
            <Col lg="2" md="3">
              <h3 className="d-flex align-content-center gap-1">
                <i class="ri-dribbble-line"></i>Dribble
              </h3>
            </Col>
            <Col lg="2" md="3">
              <h3 className="d-flex align-content-center gap-1">
                <i class="ri-apple-line"></i>Apple
              </h3>
            </Col>
            <Col lg="2" md="3">
              <h3 className="d-flex align-content-center gap-1">
                <i class="ri-google-line"></i> Google
              </h3>
            </Col>
            <Col lg="2" md="3">
              <h3 className="d-flex align-content-center gap-1">
                <i class="ri-finder-line"></i>Finder
              </h3>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Company;
