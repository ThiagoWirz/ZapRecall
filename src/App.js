import { useState } from "react";
import HomePage from "./components/HomePage";
import FlashCardsPage from "./components/FlashCardsPage";
import WinPage from "./components/WinPage";
import LosePage from "./components/LosePage";
import "./css/reset.css";
import "./css/style.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [deck, setDeck] = useState("none");
  const [card, setCard] = useState(0);
  const [win, setWin] = useState(0);
  const [goal, setGoal] = useState("");

  return (
    <>
      {page === "home" ? (
        <HomePage
          setPage={setPage}
          setDeck={setDeck}
          setGoal={setGoal}
          goal={goal}
        />
      ) : (
        ""
      )}
      {page === "card" ? (
        <FlashCardsPage
          deck={deck}
          setPage={setPage}
          card={card}
          setCard={setCard}
          win={win}
          setWin={setWin}
          goal={goal}
        />
      ) : (
        ""
      )}
      {page === "win" ? (
        <WinPage
          setPage={setPage}
          setDeck={setDeck}
          setCard={setCard}
          setWin={setWin}
          setGoal={setGoal}
        />
      ) : (
        ""
      )}
      {page === "lose" ? (
        <LosePage
          setPage={setPage}
          setDeck={setDeck}
          setCard={setCard}
          setWin={setWin}
          setGoal={setGoal}
        />
      ) : (
        ""
      )}
    </>
  );
}
