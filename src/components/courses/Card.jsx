
const Card = (props) => (
  <div className="card-custom border border-3 border-black rounded-4">
    <img src={props.image} alt={props.title} className="card-image rounded-4" />
    <h3 className="card-title h-100">{props.title}</h3>
    <p className="card-text h-100">{props.content}</p>
  </div>
);

export default Card;
