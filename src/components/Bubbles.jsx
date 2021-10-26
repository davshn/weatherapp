import BubbleStyled from "../components/BubbleStyled";
import bubble from "../assets/bubble.png";

export default function Bubbles() {
    const left=()=>Math.floor(Math.random() * 95);
    const time=()=>Math.floor(Math.random() * 40)+10; 
    return (
        <>
            <BubbleStyled src={bubble} left={left} time={time}></BubbleStyled>
            <BubbleStyled src={bubble} left={left} time={time}></BubbleStyled>
            <BubbleStyled src={bubble} left={left} time={time}></BubbleStyled>
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