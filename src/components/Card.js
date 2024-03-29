import turn from "../assets/turn.png";
import FrontFace from "./FrontFace";
import BackFace from "./BackFace";
import ResultCard from "./ResultCard";
import { useState } from "react";

export default function Card({
  question,
  answer,
  card,
  length,
  setCard,
  setPage,
  setWin,
  win,
  goal,
}) {
  const [border, setBorder] = useState("none");
  const [faceCard, setFaceCard] = useState("front");

  return (
    <div data-identifier="flashcard" className={`card ${border}`}>
      {faceCard === "front" ? (
        <FrontFace
          question={question}
          card={card}
          length={length}
          img={turn}
          setFaceCard={setFaceCard}
        />
      ) : (
        ""
      )}
      {faceCard === "back" ? (
        <BackFace
          question={question}
          answer={answer}
          card={card}
          length={length}
          setFaceCard={setFaceCard}
          setBorder={setBorder}
          setWin={setWin}
          win={win}
        />
      ) : (
        ""
      )}
      {faceCard === "result" ? (
        <ResultCard
          question={question}
          answer={answer}
          card={card}
          length={length}
          img={turn}
          setFaceCard={setFaceCard}
          setBorder={setBorder}
          setCard={setCard}
          win={win}
          setPage={setPage}
          goal={goal}
        />
      ) : (
        ""
      )}
    </div>
  );
}
