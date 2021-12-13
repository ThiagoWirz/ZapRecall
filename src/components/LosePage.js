import "../css/losePage.css";
import miniLogo from "../assets/logo-mini.png";
import emoji from "../assets/sad.png";
import nextArrow from "../assets/next.png";
export default function LosePage({
  setPage,
  setDeck,
  setWin,
  setCard,
  setGoal,
  win,
  goal,
}) {
  return (
    <div className="lose-page">
      <header>
        <img src={miniLogo} alt="" />
      </header>
      <h1>
        Putz..
        <img src={emoji} alt="" />
      </h1>
      <span>
        Você acertou apenas {win} da sua meta de {goal}
        <br />
        Não desanime! Na próxima você consegue!
      </span>
      <button
        onClick={() => restartGame(setPage, setDeck, setWin, setCard, setGoal)}
      >
        Tentar Novamente! <img src={nextArrow} alt="" />
      </button>
    </div>
  );
}

function restartGame(setPage, setDeck, setWin, setCard, setGoal) {
  setPage("home");
  setDeck("none");
  setCard(0);
  setWin(0);
  setGoal("");
}
