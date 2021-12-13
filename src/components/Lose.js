import "../css/losePage.css"
import miniLogo from "../assets/logo-mini.png"
import emoji from "../assets/sad.png"
import nextArrow from "../assets/next.png"
export default function Lose({setPage}){
    return(
            <div className="lose-page">
              <header>
                <img src={miniLogo} alt="" />
              </header>
                <h1>Putz..<img src={emoji} alt= ""/></h1> 
                <span>Você esqueceu 2 flashcards..<br/>Não desanime! Na próxima você consegue!</span>
                <button onClick={() => setPage("home")}>Tentar Novamente! <img src = {nextArrow} alt = ""/></button>
            </div>
          );
        }

