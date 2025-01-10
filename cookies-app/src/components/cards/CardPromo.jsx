import "./cardPromo.css";

const CardPromo = ({ image, title, price, label }) => {
  return (
    <div
      className="cardPromo"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="cardPromo-title">{title}</h2>
      <p className="cardPromo-price">{price}</p>
      <button className="cardPromo-button">{label}</button>
    </div>
  );
};

export default CardPromo;
