import "./cardRelleno.css";

const CardRelleno = ({ image, title, price, label, backgroundPosition }) => {
  return (
    <div
      className="cardRelleno"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: backgroundPosition || "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="cardRelleno-title">{title}</h2>
      <p className="cardRelleno-price">{price}</p>
    </div>
  );
};

export default CardRelleno;
