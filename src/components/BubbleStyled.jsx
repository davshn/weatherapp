import styled, { keyframes } from "styled-components"

const floatAnimation = (one, two) => keyframes`
0% { bottom: -10%; transform : translateX(0)}
50% { transform: translateX(${one}px)}
100% {bottom: 110%; transform: translateX(${two}px)}
`;


const BubbleStyled= styled.img`
 position: absolute;
 width: 50px;
 user-select: none;
 bottom: 0;
 left: ${({ left }) => (left ? left : 10)}%;
 font-size: ${({ size }) => (size ? size : 2)}rem;
 animation: ${({ one, two }) => floatAnimation(one, two)}
   ${({ size }) => (size < 3 ? 5 : 6)}s ease-in forwards;

`;

export default BubbleStyled;


