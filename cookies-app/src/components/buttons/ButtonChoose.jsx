import "./ButtonChoose.css";

function ButtonChoose({ label, onClick }) {
  return (
    <button className="buttonChoose" onClick={onClick}>
      {label}
    </button>
  );
}
export default ButtonChoose;
