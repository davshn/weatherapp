import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar';
import CardGroup from '../components/CardGroup';

const CitiesContainer = styled.main`
  border: 2px #000 solid;
  width: 90%;
  margin-top: 5%;
  margin-left: 5%;
  border-radius: 15px;
  background: linear-gradient(45deg, #d9f9ff 0%, #c9e2ff 55%, rgba(2,0,36,1) 100%);
`

export default function Citiesview({onSearch,cities,onClose}){

  return (
    <CitiesContainer>
        <NavigationBar onSearch={onSearch}/>
        <CardGroup
          cities={cities}
          onClose={onClose}
        /> 
    </CitiesContainer>
  )
}