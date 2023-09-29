import React, { useState } from "react";
import "./choose.css";
import { Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";
import chooseUsImg from "../../Assests/images/chooseUs.jpg";
const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <Container>
        <Row>
          <Col lg="6">
            <div className="choose__content">
              <h2>Why to Choose us?</h2>

              <p>
                We are not the biggest or largest but most affordable,
                efficient. <br /> Higher rating on courses by students. The
                reason we provide best offers, quality courses, learning modules
                and certificates. <br /> Industry level learning modules,
                practical approach & project based learning. And very less
                affordable prices for everyone.
                <br /> We believe in learn from anywhere, anytime on your own
                schedule.
              </p>
            </div>
          </Col>

          <Col lg="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/b9eMGE7QtTk?feature=shared"
                  controls
                  width="100%"
                  height="300px"
                />
              ) : (
                <img
                  src={chooseUsImg}
                  alt="Choose us image"
                  className="w-100"
                />
              )}
              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => {
                      setShowVideo(!showVideo);
                    }}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChooseUs;
