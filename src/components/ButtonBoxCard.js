export default function ButtonBoxCard({text, number}){
    return (
        <button className={number}>
              <span>{text}</span>
            </button>
    )

}