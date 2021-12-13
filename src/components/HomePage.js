import logo from "../assets/logo.png";
import nextArrow from "../assets/next.png";
import "../css/homePage.css";
import ButtonBoxHome from "./ButtonBoxHome";

export default function HomePage({ setPage, setDeck, setGoal, goal }) {
  const buttons = [
    {
      title: "React",
      text: "Praticar React",
      img: { nextArrow },
    },
    {
      title: "Pokemon Radio Tower",
      text: "Praticar Pokemon Radio Tower",
      img: { nextArrow },
    },
  ];

  return (
    <div className="home-page">
      <img className="logo" src={logo} alt="" />
      <input
        onChange={(event) => setGoal(event.target.value)}
        type="number"
        placeholder="Sua meta de zaps"
      />

      <div className="button-box">
        {buttons.map((button) => (
          <ButtonBoxHome
            title={button.title}
            text={button.text}
            img={button.img}
            setPage={setPage}
            setDeck={setDeck}
            goal={goal}
            setGoal={setGoal}
          />
        ))}
      </div>
    </div>
  );
}
