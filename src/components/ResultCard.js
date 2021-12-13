export default function ResultCard({
  question,
  answer,
  card,
  length,
  setFaceCard,
  setBorder,
  img,
  setCard,
  win,
  setPage,
  goal,
}) {
  return (
    <div className="result-card">
      <span
        data-identifier="counter"
        className="card-number"
      >{`${card}/${length}`}</span>
      <h1>{question}</h1>
      <p>{answer}</p>
      <button
        onClick={() =>
          nextCard(
            setFaceCard,
            setBorder,
            setCard,
            card,
            length,
            win,
            setPage,
            goal
          )
        }
      >
        <img data-identifier="arrow" src={img} alt="" />
      </button>
    </div>
  );
}

function nextCard(
  setFaceCard,
  setBorder,
  setCard,
  card,
  length,
  win,
  setPage,
  goal
) {
  if (card !== length) {
    setCard(card);
  } else {
    if (win >= goal) {
      setPage("win");
    } else {
      setPage("lose");
    }
  }
  setFaceCard("front");
  setBorder("none");
}
