export default function FrontFace({ question, card, length, img, setFaceCard }) {
  return (
    <div className="front-face">
      <span className="card-number">{`${card}/${length}`}</span>
      <h1>{question}</h1>
      <button onClick={() => setFaceCard("back")} >
        <img src={img} alt="" />
      </button>
    </div>
  );
}
