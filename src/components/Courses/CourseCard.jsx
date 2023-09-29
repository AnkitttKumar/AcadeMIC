import React from "react";

const CourseCard = (props) => {
  const { imgUrl, title, students, lesson, rating } = props.item;
  return (
    <div>
      <div className="single__course__item">
        <div className="course__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>
        <div className="course__detail">
          <h5 className="course__title mb-4">{title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <p className="lesson d-flex align-items-center gap-1">
              <i class="ri-book-read-line"></i> {lesson} Sections
            </p>
            <p className="students d-flex align-items-center gap-1">
              <i class="ri-user-follow-line"></i>
              {students} Enrolled
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="rating d-flex align-items-center gap-1">
              <i class="ri-star-fill"></i>
              {rating}k
            </p>
            <p className="enroll d-flex align-items-center gap-1">
              <a href="#"> Enroll Now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
