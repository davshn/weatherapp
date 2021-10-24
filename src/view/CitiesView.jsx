import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar';
import CardGroup from '../components/CardGroup';
import icon from '../assets/Weather icon.png';

const CitiesContainer = styled.main`
  border: 2px #000 solid;


  border-radius: 15px;
  background: linear-gradient(45deg, #d9f9ff 0%, #c9e2ff 55%, rgba(2,0,36,1) 100%);
`
const ImgCard = styled.img`
    

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