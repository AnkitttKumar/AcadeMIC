import React from "react";
import "./features.css";
import { Container, Row, Col } from "reactstrap";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Pre recorded lectures made learning easier, flexible time, remotely accessibility from any devices",

    icon: "ri-draft-line",
  },
  {
    title: "Doubt Solving",
    desc: "Here we provide doubt solving in few minutes, quick doubt solving make learning efficient and fast.",
    icon: "ri-discuss-line",
  },
  {
    title: "Completion Certificate",
    desc: "After completing all the modules and projects get your name the certificates for recognition, you can share on LinkedIn.",
    icon: "ri-user-star-line",
  },
];
const Features = () => {
  return (
    <>
      <section id="Pages">
        <Container>
          <Row>
            {FeatureData.map((item, index) => (
              <Col lg="4" md="6" key={index}>
                <div className="single__feature text-center">
                  <h2 className="mb-40">
                    <i class={item.icon}></i>
                  </h2>
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;
