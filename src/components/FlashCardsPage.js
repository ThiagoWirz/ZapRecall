import turn from "../assets/turn.png";
import miniLogo from "../assets/logo-mini.png";
import "../css/flashcardPage.css";

export default function FlashCardsPage() {
  return (
    <div className="flash-cards-page">
      <header>
        <img src={miniLogo} alt="" />
        <h1 className="title">React</h1>
      </header>
      <div className="card">
        <div className="front-face">
          <span>1/8</span>
          <h1>O que é JSX?</h1>
          <button>
            <img src={turn} alt="" />
          </button>
        </div>
        <div className="back-face">
          <span className="card-number">1/8</span>
          <h1>O que é JSX</h1>
          <p>Uma extensão de linguagem do JavaScript</p>
          <div className="buttons-box">
            <button className="button-1">
              <span>Aprendi agora</span>
            </button>
            <button className="button-2">
              <span>Não Lembrei</span>
            </button>
            <button className="button-3">
              <span>Lembrei com esforço</span>
            </button>
            <button className="button-4">
              <span>Zap!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
