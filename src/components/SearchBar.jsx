import styled from "styled-components";
//Estilo para los botones de la aplicacion
const SubmitButton = styled.input`
//Tu codigo aqui

width: 90px;
height: 30px;
border-radius: 15px;
`
const TextSearch = styled.input`
//Tu codigo aqui


`


export default function SearchBar({onSearch}) {
      return (
        <form onSubmit={(e) => {
          e.preventDefault();
          onSearch("Cairns");
        }}>
          <TextSearch
            type="text"
            placeholder="Ciudad..."
          />
          <SubmitButton type="submit" value="Agregar" />
        </form>
      );
    }
    