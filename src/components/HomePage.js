import logo from "../assets/logo.png"
import nextImg from "../assets/next.png"
import "../css/homePage.css"

export default function HomePage() {
  return (
    <div className="home-page">
      <img className="logo" src={logo} alt="" />
      <input type="number" placeholder="Sua meta de zaps" />
      <div className="deck-buttons">
        <button>
          Praticar JavaScript
          <img src={nextImg} alt="" />
        </button>
        <button>
          Praticar React
          <img src={nextImg} alt="" />
        </button>
      </div>
    </div>
  );
}
