import React from "react";
import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaArrowLeft } from "react-icons/fa";

export const CourseCard = ({ course }) => {
  if (!course) return null;

  const { id, _id, title, description, price, instructor, image, category } =
    course;

  const courseId = id || _id;

  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden course-card transition-all">
      
      <div
        className="position-relative overflow-hidden"
        style={{ height: "200px" }}
      >
        <img
          src={image || "/images/course-placeholder.jpg"}
          alt={title ||'دوره آموزشی'}
          className="w-100 h-100 object-fit-cover"
        />
        <span className="position-absolute top-0 end-0 bg-primary text-white text-xs px-3 py-1 m-3 rounded-pill fw-bold">
         {category?.title ||category ||'ویژه کنکور'}
        </span>
      </div>

     
      <div className="card-body d-flex flex-column p-4">
        <h5
          className="card-title fw-bold text-dark mb-2 text-truncate"
          title={title}
        >
          {title}
        </h5>

        <p className="card-text text-muted small mb-3 flex-grow-1 line-clamp-2">
          {description || "آموزش جامع و مفهومی به همراه تست‌های سال‌های اخیر."}
        </p>

        
        {instructor && (
          <div className="d-flex align-items-center gap-2 text-muted small mb-3">
            <FaChalkboardTeacher className="text-primary" />
            <span>مدرس: {instructor}</span>
          </div>
        )}

        <div className="d-flex align-items-center justify-content-between pt-3 border-top mt-auto">
          <div className="d-flex flex-column">
            <span className="text-muted text-xs">قیمت دوره:</span>
            <span className="fw-bold text-success fs-6">
              {price
                ? Number(price).toLocaleString("fa-IR") + " تومان"
                : "رایگان"}
            </span>
          </div>

          <Link
            to={`/courses/${courseId}`}
            className="btn btn-outline-primary btn-sm rounded-pill px-3 d-flex align-items-center gap-1"
          >
            مشاهده دوره <FaArrowLeft className="fs-xs" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
