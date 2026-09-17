import { useState,useRef } from "react";

import CategoryCard from "./CategoryCard";
import SubjectCard from "./SubjectCard";

import useCategories from "../../hooks/useCategories";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import useSubjects from "../../hooks/useSubjects";

const MajorCategories = () => {
  const { categories, error } = useCategories();
  const [selectedMajor, setSelectedMajor] = useState(null);
  const { subjects } = useSubjects(selectedMajor);

  const handleMajorClick = (category) => {
    setSelectedMajor(category.slug);
  };
 const wrapperRef = useRef(null);

useScrollAnimation(wrapperRef, [categories, selectedMajor]);

  const handleBack = () => {
    setSelectedMajor(null);
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (categories.length === 0) {
    return <p>در حال بارگیری...</p>;
  }

  return (
    <section className="categories-section">
      {selectedMajor && (
        <button className="back-button" onClick={handleBack}>
          ← برگشت به رشته‌ها
        </button>
      )}
      <div className="categories-wrapper" ref={wrapperRef}>
        {selectedMajor
          ? subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))
          : categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={handleMajorClick}
              />
            ))}
      </div>
    </section>
  );
};

export default MajorCategories;
