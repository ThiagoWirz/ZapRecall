export default function FrontFace({ question, cardNumber, img, setFaceCard }) {
  return (
    <div className="front-face">
      <span className="card-number">{cardNumber}</span>
      <h1>{question}</h1>
      <button onClick={() => setFaceCard("back")} >
        <img src={img} alt="" />
      </button>
    </div>
  );
}
