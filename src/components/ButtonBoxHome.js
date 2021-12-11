export default function ButtonsBoxHome({ setPage, title, text, img }) {
  return(

 <button onClick = {() => setPage("card")}>
    {text}
    <img src={img.nextArrow} alt="" />
  </button>
  )
}