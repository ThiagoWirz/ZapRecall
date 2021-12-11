import ButtonBoxCard from "./ButtonBoxCard";
export default function BackFace({question, answer, cardNumber}) {
    const buttons = [
        { text: "Aprendi agora", number: "button-1" },
        { text: "Não Lembrei", number: "button-2" },
        { text: "Lembrei com esforço", number: "button-3" },
        { text: "Zap!", number: "button-4" },
      ];

  return (
    <div className="back-face">
      <span className="card-number">{cardNumber}</span>
      <h1>{question}</h1>
      <p>{answer}</p>
      <div className="button-box">
        {buttons.map((button) => (
          <ButtonBoxCard text={button.text} number={button.number} />
        ))}
      </div>
    </div>
  );
}
