export default function ButtonsBoxHome({
  setPage,
  title,
  text,
  img,
  setDeck,
  goal,
  setGoal,
  decks,
}) {
  return (
    <button
      data-identifier="start-zap-recall"
      onClick={() => startGame(setDeck, title, setPage, goal, setGoal, decks)}
    >
      {text}
      <img src={img.nextArrow} alt="" />
    </button>
  );
}

function startGame(setDeck, title, setPage, goal, setGoal, decks) {
  const selectedDeck = decks.find((selected) => selected.title === title);

  setDeck(selectedDeck);

  if (goal === "") {
    alert("A meta de zap não pode está vazio");
    return;
  }

  if (!Number.isInteger(parseFloat(goal))) {
    alert("A meta de zap tem que ser um número inteiro");
    return;
  }
  if (goal < 1) {
    alert("A meta de zap tem que ser maior que 1");
    return;
  }
  if (goal > selectedDeck.cards.length) {
    alert("A meta de zap não pode ser maior que o deck");
    return;
  }
  setGoal(parseInt(goal));
  setPage("card");
}
