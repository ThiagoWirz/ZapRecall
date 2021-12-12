export default function ResultCard({question , answer, card, length, setFaceCard, setBorder, img, setCard, win, setPage}) {
  return (
    <div className="result-card">
      <span className="card-number">{`${card}/${length}`}</span>
      <h1>{question}</h1>
      <p>{answer}</p>
      <button onClick={() => nextCard(setFaceCard, setBorder, setCard, card, length, win, setPage)} >
        <img src={img} alt="" />
      </button>
    </div>
  );
}

function nextCard(setFaceCard, setBorder, setCard, card, length, win, setPage){
    if(card !== length){
    setCard(card);}
    else{
        if(win){
            setPage("win")
        }
        else{
            setPage("lose")
        }

    }
    setFaceCard("front");
    setBorder("none")
}
