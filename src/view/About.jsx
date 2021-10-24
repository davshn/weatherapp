import { Link } from 'react-router-dom';
import styled from "styled-components"
import icon from "../assets/Weather icon.png";
const ImgCard = styled.img`
    

`;
export default function About() {

return (
    <div>
        <Link to='/'>
            <ImgCard src={icon}></ImgCard>
        </Link>
    </div>    

)

    
}