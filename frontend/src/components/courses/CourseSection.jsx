import React from "react";
import useCourses from "../../hooks/useCourses";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  const { courses, loading, error } = useCourses();

  return (
    <section className="py-5 bg-light position-relative">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark mb-2">
            جدیدترین دوره‌های کنکورینو <span>.</span>
          </h2>
          <p className="text-muted fs-6">
            دسترسی به بهترین دوره‌های آموزشی با اساتید برجسته کشور
          </p>
        </div>

        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">در حال دریافت دوره‌ها...</span>
            </div>
            <p className="text-muted mt-2 fs-6">
              در حال دریافت دوره‌ها از دیتابیس...
            </p>
          </div>
        )}

        {error && !loading && (
          <div
            className="alert alert-danger text-center max-w-md mx-auto py-3"
            role="alert"
          >
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="row g-4">
            {courses && courses.length > 0 ? (
              courses.map((course) => (
                <div
                  key={course.id || course._id}
                  className="col-12 col-md-6 col-lg-4"
                >
                  <CourseCard course={course} />
                </div>
              ))
            ) : (
              <div className="text-center py-5 text-muted col-12">
                هیچ دوره‌ای در دیتابیس یافت نشد.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseSection;
