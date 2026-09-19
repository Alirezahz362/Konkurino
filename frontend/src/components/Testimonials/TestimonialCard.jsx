
import { FaStar, FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({item}) => {

  return (
    <>
      <div className="testimonial-card">
        <div className="card-top">
          <div className="user-info">
            <img src={item.avatar} alt={item.name} className="user-avatar" />
          </div>
          <div>
            <h4 className="user-name">{item.name}</h4>
            <span className="user-rank">
              {item.field} | رتبه {item.rank}
            </span>
          </div>
        </div>
        <FaQuoteRight className="qoute-icon" />
      </div>

      <p className="comment-text">{item.comment}</p>
      <div className="card-bottom">
        <span className="course-badge">{item.course}</span>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < item.rating ? "star-active" : "star-inactive"}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default TestimonialCard;
