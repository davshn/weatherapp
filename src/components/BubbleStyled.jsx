import styled, { keyframes } from "styled-components"

const floatAnimation = (one, two) => keyframes`
0% { bottom: 0%; transform : translateX(0)}
50% { transform: translateX(${one}px)}
100% {bottom: 110%; transform: translateX(${two}px)}
`;


const BubbleStyled= styled.img`
 position: absolute;
 width: 3%;
 left: ${({ left }) => (left ? left : 10)}%;
 animation: ${({ one, two }) => floatAnimation(one, two)}
 ${({ time }) => (time ? time : 10)}s ease-in-out none;

`;

export default BubbleStyled;
