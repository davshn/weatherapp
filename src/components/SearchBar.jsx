import styled from "styled-components";
//Estilo para los botones de la aplicacion
const SubmitButton = styled.input`
//Tu codigo aqui

width: 90px;
height: 30px;
border-radius: 5px;
color: #fff;
background: transparent;
border: #fff 2px solid;
font-weight: bolder;

&:hover{
  transform : scale(0.9);
		-moz-transform : scale(0.9); /* Firefox */
		-webkit-transform : scale(0.9); /* Chrome - Safari */
		-o-transform : scale(0.9); /* Opera */
		-ms-transform : scale(0.9); /* IE9 */
}
`
const TextSearch = styled.input`
//Tu codigo aqui
margin: 5px;
height: 26px;
border-radius: 5px;
border: #fff 1px solid;

opacity: 0.6;

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
    