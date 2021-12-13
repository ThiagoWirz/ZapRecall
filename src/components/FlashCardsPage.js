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

  const selectedDeck = decks.find((selected) => selected.title === deck);

  return (
    <div className="flash-cards-page">
      <header>
        <img src={miniLogo} alt="" />
        <h1 className="title">{deck}</h1>
      </header>
      <Card
        question={selectedDeck.cards[card].question}
        answer={selectedDeck.cards[card].answer}
        card={card + 1}
        length={selectedDeck.cards.length}
        setCard={setCard}
        setPage={setPage}
        setWin={setWin}
        win={win}
        goal={goal}
      />
    </div>
  );
}
