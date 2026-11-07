import React, { useState, useRef } from "react";
import useCategories from "../../hooks/useCategories";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import CategoryCard from "./CategoryCard";
import SubjectCard from "./SubjectCard";

const MajorCategories = () => {
  const { categories =[], loading, error } = useCategories() ||{};
  
  const [selectedMajor, setSelectedMajor] = useState(null);
  const wrapperRef = useRef(null);

  useScrollAnimation(wrapperRef, [categories, selectedMajor]);

  const handleMajorClick = (category) => {
    setSelectedMajor(category.slug || category.id);
  };

  const handleBack = () => {
    setSelectedMajor(null);
  };

  if (error) {
    return <div className="alert alert-warning text-center my-4">{error}</div>;
  }

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">درحال بارگیری...</span>
        </div>
      </div>
    );
  }
  const currentCategory = categories?.find(
    (cat) => (cat.slug || cat.id) === selectedMajor,
  );
  const displaySubject =
    currentCategory?.subjects || currentCategory?.courses || [];

  return (
    <section className="categories-section py-5">
      <div className="container">
        {selectedMajor && (
          <button
            className=" btn btn-outline-secondary btn-sm mb-4 back-button"
            onClick={handleBack}
          >
            ← برگشت به رشته‌ها
          </button>
        )}
        <div className="categories-wrapper" ref={wrapperRef}>
          {selectedMajor
            ? displaySubject.map((subject) => (
                <SubjectCard
                  key={subject.id || subject._id}
                  subject={subject}
                  onClick={(sub)=>{
                    console.log('درس انتخاب شده',sub)
                  }}
                />
              ))
            : categories.map((category) => (
                <CategoryCard
                  key={category.id || category._id}
                  category={category}
                  onClick={() => handleMajorClick(category)}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default MajorCategories;
