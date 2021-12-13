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

  const decks = [
    {
      title: "React",
      cards: [
        {
          question: "O que é JSX?",
          answer: "Uma extensão de linguagem do JavaScript",
        },
        {
          question: "O React é __",
          answer: "uma biblioteca JavaScript para construção de interfaces",
        },
        {
          question: "Componentes devem iniciar com __",
          answer: "letra maiúscula",
        },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        {
          question: "O ReactDOM nos ajuda __",
          answer:
            "interagindo com a DOM para colocar componentes React na mesma",
        },
        {
          question: "Usamos o npm para __",
          answer: "gerenciar os pacotes necessários e pendencias",
        },
        {
          question: "Usamos props para __",
          answer: "passar diferentes informações para componentes",
        },
        {
          question: "Usamos estado (State) para __",
          answer:
            "dizer para o react quais informações atualizadas devem renderizar a tela novamente",
        },
      ],
    },
    {
      title: "Pokemon Radio Tower",
      cards: [
        {
          question: "O Pokegear pode mostrar o mapa da cidade?",
          answer: "Sim",
        },
        { question: "Nidorina só pode ser femenino?", answer: "Sim" },
        {
          question: "Kurt, o fabricante de PokeBall usa Aprikorn",
          answer: "Não",
        },
        { question: "Magikarp não aprende nenhum TM?", answer: "Sim" },
        {
          question:
            "O programa Pokemon Talk do Professor Oak é muito popular. Marie é a co-host do programa?",
          answer: "Não",
        },
      ],
    },
  ];

  return (
    <>
      {page === "home" ? (
        <HomePage
          setPage={setPage}
          setDeck={setDeck}
          setGoal={setGoal}
          goal={goal}
          decks={decks}
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
          win={win}
          goal={goal}
        />
      ) : (
        ""
      )}
    </>
  );
}
