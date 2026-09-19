const CourseCard = ({ image, title, content, price }) => {
  return (
    <article className="course-card">
      <div className="course-image">
        <img src={image} alt={title} />

        <div className="course-overlay">
          <span>دوره آموزشی</span>
        </div>
      </div>

      <div className="course-body">
        <h3>{title}</h3>

        <p>{content}</p>

        <div className="course-details">
          <span>⏱ ۳۰ ساعت</span>

          <span>🎓 کنکور</span>
        </div>

        <div className="course-bottom">
          <strong>{price} تومان</strong>

          <button>مشاهده</button>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
