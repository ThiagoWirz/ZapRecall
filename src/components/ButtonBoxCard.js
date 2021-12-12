export default function ButtonBoxCard({text, number, setFaceCard, borderNumber, setBorder, setWin}){
    return (
        <button className={number} onClick={() => lastFace(setFaceCard, setBorder, borderNumber, setWin)}  >
                <span>{text}</span>
        </button>
      
    )

}

function lastFace(setFaceCard, setBorder, borderNumber, setWin){
    if(borderNumber === 2){
        setWin(false)
    }
    setFaceCard("result")
    setBorder(`button-${borderNumber}`)
}