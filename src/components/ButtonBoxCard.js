export default function ButtonBoxCard({
  text,
  number,
  setFaceCard,
  borderNumber,
  setBorder,
  setWin,
  win,
}) {
  return (
    <button
      className={number}
      onClick={() =>
        lastFace(setFaceCard, setBorder, borderNumber, setWin, win)
      }
    >
      <span>{text}</span>
    </button>
  );
}

function lastFace(setFaceCard, setBorder, borderNumber, setWin, win) {
  if (borderNumber === 3 || borderNumber === 4) {
    setWin(win + 1);
  }
  setFaceCard("result");
  setBorder(`button-${borderNumber}`);
}
