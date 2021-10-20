import styled from "styled-components"

export const CloseButton = styled.button`

    background:none;       
    color: black;
    border: 3px solid transparent;
    transition: all 1s ease-out;
        
    &:hover {
      transform:  rotateZ(360deg);
    } 
    
`;