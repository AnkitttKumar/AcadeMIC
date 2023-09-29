import React from "react";
import "./testimonial.css";
import Slider from "react-slick";
import user1Img from "../../Assests/images/raj2.png";
import { Container, Row, Col } from "react-bootstrap";
const Testimonial = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slideToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    SlideToScroll: 1,
  };
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="10" className="m-auto">
              <div className="testimonial__wrapper d-flex justify-items-between align-items-center">
                <div className="testimonial__img w-50">
                  <img src={user1Img} alt="" className="w-100" />
                </div>
                <div className="testimonial__content w-50">
                  <h2 className="testimonial__h2 mb-4">
                    Our Students Feedback
                  </h2>
                  <Slider {...settings}>
                    <div>
                      <div className="single__testimonial">
                        <h6 className="mb-3 fw-bold">
                          Excellent Course Materials
                        </h6>
                        <p>
                          The AcadeMIC course contents are amazing, well
                          organized, detail oriented modules made learning
                          easier and effective. Thankyou AcadeMIC!!!
                        </p>
                        <div className="student__info mt-4">
                          <h6 className="fw-bold">Raj Singhal</h6>
                          <p>Noida, INDIA</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="single__testimonial">
                        <h6 className="mb-3 fw-bold">
                          Exceptional learning opportunity
                        </h6>
                        <p>
                          Recently I have enrolled the Cloud Computing course
                          offered by AcadeMIC, And I must say It was exceptional
                          learning opportunity.
                        </p>
                        <div className="student__info mt-4">
                          <h6 className="fw-bold">Ritwik Singh</h6>
                          <p>Mumbai, INDIA</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="single__testimonial">
                        <h6 className="mb-3 fw-bold">Best course material</h6>
                        <p>
                          I have enrolled for the Machine Learning course on
                          AcadeMIC, and complete it with a great learning
                          experience with practical oriented. The Best Remote
                          learning source!
                        </p>
                        <div className="student__info mt-4">
                          <h6 className="fw-bold">Riza Hussain</h6>
                          <p>Bangalore, INDIA</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="single__testimonial">
                        <h6 className="mb-3 fw-bold">Best course material</h6>
                        <p>
                          One of the best remote accessible learning modules
                          provided by AcadeMIC.
                        </p>
                        <div className="student__info mt-4">
                          <h6 className="fw-bold">Asma </h6>
                          <p>Jaipur, INDIA</p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
