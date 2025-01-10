import "./cardDesc.css";

const CardDesc = ({ image, title, price, label }) => {
  return (
    <div
      className="cardDesc"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="cardDesc-content">
        <h2 className="cardDesc-title">{title}</h2>
        <p className="cardDesc-price">{price}</p>
        <button className="cardDesc-button">{label}</button>
      </div>
    </div>
  );
};

export default CardDesc;
