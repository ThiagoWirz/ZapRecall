import miniLogo from "../assets/logo-mini.png";
import "../css/flashcardPage.css";
import Card from "./Card";
import { useState } from "react";

 

export default function FlashCardsPage({setPage}) {

  const [card, setCard] = useState(0)
  const [win, setWin] = useState(true)
  
  const deck = [{question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"},
  {question:"O React é __", answer:"uma biblioteca JavaScript para construção de interfaces"},
  {question:"Componentes devem iniciar com __", answer:"letra maiúscula"},
  {question:"Podemos colocar __ dentro do JSX", answer:"expressões"},
  {question:"O ReactDOM nos ajuda __", answer:"interagindo com a DOM para colocar componentes React na mesma"},
  {question:"Usamos o npm para __", answer:"gerenciar os pacotes necessários e pendencias"},
  {question:"Usamos props para __", answer:"passar diferentes informações para componentes"},
  {question:"Usamos estado (State) para __", answer:"dizer para o react quais informações atualizadas devem renderizar a tela novamente"},
]

  return (
    <div className="flash-cards-page">
      <header>
        <img src={miniLogo} alt="" />
        <h1 className="title">React</h1>
      </header>
      <Card question = {deck[card].question} answer = {deck[card].answer} card = {card+1} length = {deck.length} setCard = {setCard} setPage = {setPage} setWin = {setWin} win = {win} />
    </div>
  );
}
