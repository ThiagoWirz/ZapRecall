import {useState} from "react";
import HomePage from "./components/HomePage";
import FlashCardsPage from "./components/FlashCardsPage";
import "./css/reset.css"
import "./css/style.css"




export default function App() {
  const [page, setPage] = useState("home")

  return (
    <>
    {page === "home" ? <HomePage setPage = {setPage} /> : ""}
    {page === "card" ? <FlashCardsPage setPage = {setPage} /> : ""}
    {page === "win" ? <>Miajuda</> : ""}
    {page === "lose" ? <>Por favor</> : ""}
    </>
  )
}
