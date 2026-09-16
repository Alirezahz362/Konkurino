const SubjectCard = ({ subject, onClick }) => {
  return (
    <div className="subject-card" onClick={() => onClick(subject)}>
      <div className="category-icon">{subject.icon}</div>

      <h3>{subject.title}</h3>
    </div>
  );
};

export default SubjectCard;
