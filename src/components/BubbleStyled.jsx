import styled, { keyframes } from "styled-components"

const floatAnimation = () => keyframes`
0% { top: -20%; transform : rotateX(0); opacity:0.1}
50% { transform: rotateZ(360deg); opacity:1}
100% {top: 90%; transform: rotateX(0); opacity:0}
`;


const BubbleStyled= styled.img`
 position: absolute;
 width: 2%;
 left: ${({ left }) => (left ? left : 10)}%;
 animation: ${floatAnimation()} ${({ time }) => (time ? time : 10)}s ease-in-out forwards infinite;

`;

export default BubbleStyled;
