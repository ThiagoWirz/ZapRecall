import ButtonBoxCard from "./ButtonBoxCard";
export default function BackFace({
  question,
  answer,
  card,
  length,
  setFaceCard,
  setBorder,
  setWin,
  win,
}) {
  const buttons = [
    { text: "Aprendi agora", number: "button-1" },
    { text: "Não Lembrei", number: "button-2" },
    { text: "Lembrei com esforço", number: "button-3" },
    { text: "Zap!", number: "button-4" },
  ];

  return (
    <div className="back-face">
      <span className="card-number">{`${card}/${length}`}</span>
      <h1>{question}</h1>
      <p>{answer}</p>
      <div className="button-box">
        {buttons.map((button, index) => (
          <ButtonBoxCard
            text={button.text}
            number={button.number}
            setFaceCard={setFaceCard}
            setBorder={setBorder}
            borderNumber={index + 1}
            setWin={setWin}
            win={win}
          />
        ))}
      </div>
    </div>
  );
}
