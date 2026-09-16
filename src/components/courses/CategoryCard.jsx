const CategoryCard = ({ category, onClick }) => {
  return (
    <div className="major-card" onClick={() => onClick(category)}>
      <div className="category-icon">{category.icon}</div>

      <h3>{category.title}</h3>
    </div>
  );
};

export default CategoryCard;
