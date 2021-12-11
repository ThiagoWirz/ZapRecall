import logo from "../assets/logo.png"
import nextArrow from "../assets/next.png"
import "../css/homePage.css"
import ButtonBoxHome from "./ButtonBoxHome"

export default function HomePage({setPage}) {

  const buttons = [{
    title: "JavaScript",
    text: "Praticar JavaScript",
    img: {nextArrow}
  },{
    title: "React",
    text: "Praticar React",
    img: {nextArrow}
  }]

  return (
    <div className="home-page">
      <img className="logo" src={logo} alt="" />
      <input type="number" placeholder="Sua meta de zaps" />
       
      <div className="button-box">
        {buttons.map((button)  => <ButtonBoxHome title = {button.title} text = {button.text} img = {button.img} setPage = {setPage} />)}
        
      </div>
    </div>
  );
}
