import styled from "styled-components"
import {CloseButton} from './CloseButtonStyled';
import { ImgCard } from "./ImgCardStyled";
import { Text } from "./TextStyled";
import { TitleCard } from "./TitleCardStyled";

export default function WeatherCard({onClose,name,min,max,img}) {
    const WhCard = styled.article`

    background:white;
    border: 2px solid #000;
    
    `;

  return (
    <WhCard>
        <div>
            <CloseButton onClick={onClose}>X</CloseButton>
            <TitleCard>{name}</TitleCard>
        </div>
        <div>
            <Text>Min </Text> 
            <Text>Max <br></br></Text>
        </div>
        <div>
            <Text>{min+"°k "}</Text> 
            <Text>{max+"°k "} <br></br></Text>
        </div>
        <div>
            <ImgCard src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Logo"></ImgCard>
        </div>
    </WhCard>
    )
};