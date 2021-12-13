import "../css/winPage.css";
import miniLogo from "../assets/logo-mini.png";
import emoji from "../assets/party.png"
import nextArrow from "../assets/next.png"
export default function Win({ setPage }) {
  return (
    <div className="win-page">
      <header>
        <img src={miniLogo} alt="" />
      </header>
        <h1>parabéns<img src={emoji} alt= ""/></h1> 
        <span>Você não esqueceu de nenhum flashcard!</span>
        <button onClick={() => setPage("home")}>Tentar Novamente! <img src = {nextArrow} alt = ""/></button>
    </div>
  );
}
