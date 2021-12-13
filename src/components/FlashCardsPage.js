import miniLogo from "../assets/logo-mini.png";
import "../css/flashcardPage.css";
import Card from "./Card";

export default function FlashCardsPage({
  setPage,
  deck,
  card,
  setCard,
  win,
  setWin,
  goal,
}) {
  return (
    <div className="flash-cards-page">
      <header>
        <img src={miniLogo} alt="" />
        <h1 className="title">{deck.title}</h1>
      </header>
      <Card
        question={deck.cards[card].question}
        answer={deck.cards[card].answer}
        card={card + 1}
        length={deck.cards.length}
        setCard={setCard}
        setPage={setPage}
        setWin={setWin}
        win={win}
        goal={goal}
      />
    </div>
  );
}
