import "./cards.css";

const Card = ({ image, title, price, className }) => {
  return (
    <div className={`card ${className || ""}`}>
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-price">${price}</p>
    </div>
  );
};

export default Card;
