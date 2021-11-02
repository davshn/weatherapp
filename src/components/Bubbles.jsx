import BubbleStyled from "../components/BubbleStyled";
import bubble from "../assets/bubble.png";
//Envia datos aleatorios y crea las burbujas
export default function Bubbles() {
    const left=()=>Math.floor(Math.random() * 95);      //genera la posicion aleatoria para las burbujas
    const time=()=>Math.floor(Math.random() * 40)+10;   //Genera el tiempo aleatorio para las burbujas
    return (
        <>
            <BubbleStyled src={bubble} left={left} time={time}></BubbleStyled>
            <BubbleStyled src={bubble} left={left} time={time}></BubbleStyled>
            <BubbleStyled src={bubble} left={left} time={time}></BubbleStyled>    {/*Invoca las burbujas*/}
            <BubbleStyled src={bubble} left={left} time={time}></BubbleStyled>
            <BubbleStyled src={bubble} left={left} time={time}></BubbleStyled>
            <BubbleStyled src={bubble} left={left} time={time}></BubbleStyled>
            <BubbleStyled src={bubble} left={left} time={time}></BubbleStyled>
            <BubbleStyled src={bubble} left={left} time={time}></BubbleStyled>
            <BubbleStyled src={bubble} left={left} time={time}></BubbleStyled>
            <BubbleStyled src={bubble} left={left} time={time}></BubbleStyled>
            <BubbleStyled src={bubble} left={left} time={time}></BubbleStyled>
            <BubbleStyled src={bubble} left={left} time={time}></BubbleStyled>
        </>
    )
}