import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../carousel/carousel.css";

// Importación de imágenes
import fotoCardCinco from "../../assets/images/cookie-cardCinco.jpg";
import fotoCardSeis from "../../assets/images/cookie-cardSeis.jpg";
import fotoCardOcho from "../../assets/images/cookie-cardOcho.jpg";
import fotoCookieHoney from "../../assets/images/cookie-honey.jpg";
import fotoCookieStrawberry from "../../assets/images/cookie-strawberry.jpg";
import fotoCookieCoconut from "../../assets/images/cookie-coconut.jpg";
import fotoCookieHalf from "../../assets/images/cookie-half.jpg";
import fotoCookieNut from "../../assets/images/cookie-nut.jpg";
import fotoCookieMyMClassic from "../../assets/images/cookie-mymClassic.jpg";
import fotoCookieSauce from "../../assets/images/cookie-caramelSauce.jpg";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const data = [
    {
      tile: `Cookie Half`,
      img: fotoCookieHalf,
      price: `$29,99`,
    },
    {
      tile: `Cookie Nut`,
      img: fotoCookieNut,
      price: `$29,99`,
    },
    {
      tile: `Cookie MyM Classic`,
      img: fotoCookieMyMClassic,
      price: `$29,99`,
    },

    {
      tile: `Cookie Lemon`,
      img: fotoCardOcho,
      price: `$29,99`,
    },
    {
      tile: `Cookie Coconut`,
      img: fotoCookieCoconut,
      price: `$29,99`,
    },
    {
      tile: `Cookie Strawberry`,
      img: fotoCookieStrawberry,
      price: `$29,99`,
    },
    {
      tile: `Cookie Lemon`,
      img: fotoCardCinco,
      price: `$29,99`,
    },
    {
      tile: `Chocolate Chips`,
      img: fotoCardSeis,
      price: `$29,99`,
    },
    {
      tile: `Cookie Honey`,
      img: fotoCookieHoney,
      price: `$29,99`,
    },
    {
      tile: `Cookie Sauce`,
      img: fotoCookieSauce,
      price: `$29,99`,
    },
  ];

  // Flechas para el carousel
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "white",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="carousel-container">
      <div
        id="popular"
        style={{
          width: "41rem",
        }}
      >
        <div className="carousel-h2-p">
          <h2 className="carousel-title">Cookies Popular </h2>
          <p className="carousel-p">
            Las galletas favoritas de todos, con el mejor sabor y textura
            perfecta. ¡Ideales para cualquier ocasión!
          </p>
        </div>
        <Slider {...settings}>
          {data.map((d) => (
            <div style={{ width: "5rem" }}>
              <div
                style={{
                  borderTopLeftRadius: "0.75rem",
                  borderTopRightRadius: "0.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "0rem",
                }}
              >
                <img
                  src={d.img}
                  alt=""
                  style={{
                    height: "7rem",
                    width: "7rem",
                    padding: "0.5rem",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "black",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    marginBottom: "0px",
                    marginTop: "0.2rem",
                  }}
                >
                  {d.tile}
                </h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    marginTop: "0px",
                  }}
                >
                  {d.price}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
