import {useState} from "react";
import HomePage from "./components/HomePage";
import FlashCardsPage from "./components/FlashCardsPage";
import Win from "./components/Win"
import Lose from "./components/Lose"
import "./css/reset.css"
import "./css/style.css"




export default function App() {
  const [page, setPage] = useState("home")

  return (
    <>
    {page === "home" ? <HomePage setPage = {setPage} /> : ""}
    {page === "card" ? <FlashCardsPage setPage = {setPage} /> : ""}
    {page === "win" ? <Win setPage = {setPage}/> : ""}
    {page === "lose" ? <Lose setPage= {setPage}/>: ""}
    </>
  )
}
