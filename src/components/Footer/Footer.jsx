import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About Us",
    url: "#",
  },
  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Pages",
    url: "#",
  },
  {
    display: "LogIn",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy & Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },
  {
    display: "Purchase guide",
    url: "#",
  },
  {
    display: "Terms of Services",
    url: "#",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <h2 className="d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i>Learners.
            </h2>
            <div className="follows">
              <p className="mb-0">Follow us</p>
              <span>
                <a href="https://www.facebook.com/profile.php?id=100009076679068">
                  <i class="ri-facebook-fill"></i>
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/ankittkx/">
                  <i class="ri-instagram-fill"></i>
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/ankit-kumar-840ab5202/">
                  <i class="ri-linkedin-fill"></i>
                </a>
              </span>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="fw-bold">Explore</h5>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="link__item border-0 ps-0">
                  <a href={item.url}></a>
                  {item.display}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="fw-bold">Information</h5>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="link__item border-0 ps-0">
                  <a href={item.url}></a>
                  {item.display}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="fw-bold">Get In Touch</h5>
            <p>Address: 2023, Example Colony, Noida, India</p>
            <p>Phone: +91-9876543210</p>
            <p>Email: Ankitk96969@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
