import React from "react";
import "./freeCourses.css";

const FreeCourseCard = (props) => {
  const { imgUrl, title, rating, students, links } = props.item;
  const handleButtonClick = () => {
    window.location.href = links;
  };
  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100 " />
        <a href={links}>
          <button
            className="btn free__btn"
            onClick={handleButtonClick}
            style={{
              backgroundColor: "#17bf9e",
              borderRadius: "20px",
              padding: "5px 15px",
            }}
          >
            Free
          </button>
        </a>
      </div>
      <div className="free__course__details ">
        <h6>{title}</h6>
        <div className="d-flex align-items-center gap-5">
          <span className="d-flex align-items-center gap-2">
            <i class="ri-user-3-line"></i> {students}k
          </span>
          <span className="d-flex align-items-center gap-2">
            <i class="ri-star-fill"></i>
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
