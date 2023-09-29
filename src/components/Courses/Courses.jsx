import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./courses.css";
//import 5 course imgs
import CourseCard from "./CourseCard";
import course1Img from "../../Assests/images/frontend2.jfif";
import course2Img from "../../Assests/images/course1.png";
import course3Img from "../../Assests/images/course2.png";
import course4Img from "../../Assests/images/course4.png";
import course5Img from "../../Assests/images/course5.jpg";
import course6Img from "../../Assests/images/course6.png";
import course7Img from "../../Assests/images/course7.jpg";
import course8Img from "../../Assests/images/course8.jfif";
import course9Img from "../../Assests/images/course9.jpg";
import "../../index.css";
const coursesData = [
  {
    id: "01",
    title: "Web Front End Development",
    lesson: 12,
    students: "12.5k",
    rating: 5.9,
    imgUrl: course1Img,
  },
  {
    id: "02",
    title: "Intro To Front-End Web Development",
    lesson: 12,
    students: "12.5k",
    rating: 5.9,
    imgUrl: course2Img,
  },
  {
    id: "03",
    title: "Python for Beginners(2023)",
    lesson: 7,
    students: "8.3k",
    rating: 7.8,
    imgUrl: course3Img,
  },
  {
    id: "04",
    title: "Java Tutorial from Basics",
    lesson: 8,
    students: " 13.5k",
    rating: 9.1,
    imgUrl: course4Img,
  },
  {
    id: "05",
    title: "JS: Basic to Advance",
    lesson: 5,
    students: "7.1k",
    rating: 8.2,
    imgUrl: course5Img,
  },
  {
    id: "06",
    title: "React JS Development",
    lesson: 7,
    students: "5.3k",
    rating: 8.7,
    imgUrl: course6Img,
  },
  {
    id: "07",
    title: "Learn Material UI: Responsive",
    lesson: 3,
    students: "4.9k",
    rating: 6.3,
    imgUrl: course7Img,
  },
  {
    id: "08",
    title: "Create a Node JS backend app and host it on AWS",
    lesson: 4,
    students: " 5.2k",
    rating: 6.6,
    imgUrl: course8Img,
  },
  {
    id: "09",
    title: "MySQL database basics",
    lesson: 10,
    students: "9.1k",
    rating: 7.6,
    imgUrl: course9Img,
  },
];

const Courses = () => {
  return (
    <>
      <section id="courses">
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="course__top d-flex justify-content-between align-items-center">
                <div className="course__top__left w-50">
                  <h2>Our Popular Courses</h2>
                  <p>
                    AcadeMIC is an online training provider with the most
                    effective learning system in the world. We help
                    professionals learn trending technologies for career ...
                  </p>
                </div>
                <div className="w-50 text-end">
                  <button
                    className="btn"
                    style={{
                      background: "#17bf9e",
                      color: "white",
                      padding: "7px 15px",
                      borderRadius: "50px",
                    }}
                  >
                    See All
                  </button>
                </div>
              </div>
            </Col>
            {coursesData.map((item) => (
              <Col lg="4" md="6" style={{ border: "1px solid #17bf9e" }}>
                <CourseCard key={item.id} item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Courses;
