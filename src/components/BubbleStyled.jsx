import styled, { keyframes } from "styled-components"
//Crea la animacion de las burbujas y les agrega estilos
const floatAnimation = () => keyframes`                 //Crea la animacion de las burbujas
0% { top: -20%; transform : rotateX(0); opacity:0.1}    
50% { transform: rotateZ(360deg); opacity:1}
100% {top: 90%; transform: rotateX(0); opacity:0}
`;


const BubbleStyled= styled.img`
 position: absolute;
 width: 2%;                         //tamaño de las burbujas
 left: ${({ left }) => (left ? left : 10)}%;        //recibe la posicion aleatoria delas burbujas
 animation: ${floatAnimation()} ${({ time }) => (time ? time : 10)}s ease-in-out forwards infinite;     //Hace la animacion y recibe el tiempo aleatorio

`;

export default BubbleStyled;
