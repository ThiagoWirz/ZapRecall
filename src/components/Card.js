import turn from "../assets/turn.png";
import FrontFace from "./FrontFace"
import BackFace from "./BackFace"

import { useState } from "react";

export default function Card({ question, answer, cardNumber }) {
 
    
  const [faceCard, setFaceCard] = useState("front")

  return (
    <div className="card">
        {faceCard === "front" ? <FrontFace question = {question} cardNumber = {cardNumber} img = {turn} setFaceCard = {setFaceCard} /> :""}
        {faceCard === "back" ? <BackFace question = {question} answer={answer} cardNumber={cardNumber} /> : ""}
    </div>
    )
  ;
}
