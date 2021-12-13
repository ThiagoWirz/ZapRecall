export default function ButtonsBoxHome({
  setPage,
  title,
  text,
  img,
  setDeck,
  goal,
  setGoal,
}) {
  return (
    <button onClick={() => startGame(setDeck, title, setPage, goal, setGoal)}>
      {text}
      <img src={img.nextArrow} alt="" />
    </button>
  );
}

function startGame(setDeck, title, setPage, goal, setGoal) {
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
  setGoal(parseInt(goal));
  setDeck(title);
  setPage("card");
}
