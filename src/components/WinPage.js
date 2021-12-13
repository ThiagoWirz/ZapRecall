import "../css/winPage.css";
import miniLogo from "../assets/logo-mini.png";
import emoji from "../assets/party.png";
import nextArrow from "../assets/next.png";
export default function WinPage({
  setPage,
  setDeck,
  setWin,
  setCard,
  setGoal,
}) {
  return (
    <div className="win-page">
      <header>
        <img src={miniLogo} alt="" />
      </header>
      <h1>
        parabéns
        <img src={emoji} alt="" />
      </h1>
      <span>Você não esqueceu de nenhum flashcard!</span>
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
