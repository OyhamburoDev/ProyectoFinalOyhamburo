import "./cardClassic.css";

const CardClassic = ({ image }) => {
  return (
    <div
      className="cardClassic"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default CardClassic;
