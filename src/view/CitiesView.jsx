import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar';
import CardGroup from '../components/CardGroup';
import icon from '../assets/Weather icon.png';

const CitiesContainer = styled.main`
  border: 2px #000 solid;
  background: linear-gradient(180deg, rgba(54,59,68,1) 0%, rgba(72,70,91,1) 35%, rgba(141,162,164,1) 100%);
  height:100vh;
`
const ImgCard = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:5%;
    margin-bottom:5%;
    width:20%;
    @media (min-width:576px){                            //responsive para escritorio
      margin-top:1%;
      margin-bottom:1%;
      width:6%;                     
    }
`;
export default function Citiesview({onSearch,cities,onClose}){

  return (
    <CitiesContainer>
        <ImgCard src={icon}></ImgCard>
        <NavigationBar onSearch={onSearch}/>
        <CardGroup
          cities={cities}
          onClose={onClose}
        /> 
    </CitiesContainer>
  )
}