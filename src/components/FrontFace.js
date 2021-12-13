export default function FrontFace({
  question,
  card,
  length,
  img,
  setFaceCard,
}) {
  return (
    <div className="front-face">
      <span
        data-identifier="counter"
        className="card-number"
      >{`${card}/${length}`}</span>
      <h1>{question}</h1>
      <button onClick={() => setFaceCard("back")}>
        <img data-identifier="arrow" src={img} alt="" />
      </button>
    </div>
  );
}
