import "./cards.css";

const Card = ({ image, title, price, className, onClick }) => {
  return (
    <div className={`card ${className || ""}`} onClick={onClick}>
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-price">${price}</p>
    </div>
  );
};

export default Card;
