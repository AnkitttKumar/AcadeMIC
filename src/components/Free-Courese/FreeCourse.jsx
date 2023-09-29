import React from "react";
import "./freeCourses.css";
import { Container, Row, Col } from "reactstrap";

import iotImg from "../../Assests/images/iot.jpg";
import mlImg from "../../Assests/images/ml3.png";
import bigDataImg from "../../Assests/images/bigData.jfif";

import pythonImg from "../../Assests/images/python.jfif";
import cloudImg from "../../Assests/images/cloud.jpg";
import AiImg from "../../Assests/images/ai2.jfif";
import FreeCourseCard from "./FreeCourseCard";

const freeCourseData = [
  {
    id: "01",

    title: "Internet of Things by Stanford",
    imgUrl: iotImg,
    students: 7.8,
    rating: 4.6,
    links:
      "https://online.stanford.edu/courses/xee100-introduction-internet-things",
  },
  {
    id: "02",
    imgUrl: mlImg,
    title: "Machine Learning by Harvard",
    students: 12.9,
    rating: 8.1,
    links:
      "https://pll.harvard.edu/course/data-science-machine-learning/2023-10",
  },
  {
    id: "03",
    imgUrl: bigDataImg,
    title: "Big Data Analytics",
    students: 8.6,
    rating: 5.9,
    links:
      "https://www.mygreatlearning.com/academy/learn-for-free/courses/mastering-big-data-analytics",
  },
  {
    id: "04",
    imgUrl: pythonImg,
    title: "Python Programming",
    students: 500,
    rating: 2.3,
    links:
      "https://www.mygreatlearning.com/academy/learn-for-free/courses/python-fundamentals-for-beginners",
  },
  {
    id: "05",
    imgUrl: cloudImg,
    title: "Cloud Computing Foundation",
    students: 155,
    rating: 4.6,
    links:
      "https://www.mygreatlearning.com/academy/learn-for-free/courses/cloud-foundations",
  },
  {
    id: "06",
    imgUrl: AiImg,
    title: "Introduction to Artificial Intelligence",
    students: 47.8,
    rating: 4.4,
    links:
      "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-artificial-intelligence",
  },
];
const FreeCourse = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2 className="fw-bold">
                Our Free courses from Big Industry experts with certificates
              </h2>
            </Col>

            {freeCourseData.map((item) => (
              <Col lg="4" className="free_course_col mb-4" key={item.id}>
                <FreeCourseCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FreeCourse;
