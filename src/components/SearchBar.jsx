import styled from "styled-components";
import { useState } from "react";
//Estilo para los botones de la aplicacion
const SubmitButton = styled.input`
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

  margin: 5px;
  height: 26px;
  border-radius: 5px;
  border: #fff 1px solid;
  opacity: 0.6;

`

export default function SearchBar({onSearch}) {
  const [city,setCity]  = useState("") //estado de cambio de ciudad escrita en el buscador
  
      return (
        <form onSubmit={(e) => {    //Formulario, y funcion de buscar en la app
          e.preventDefault();
          onSearch(city);
        }}>
          <TextSearch
            onChange={(e) => {      //Cuando cambia la ciudad digitada guarda el valor en el estado
              e.preventDefault();
              setCity(e.target.value);
            }}
            type="text"
            placeholder="Ciudad..."
          />
          <SubmitButton type="submit" value="Agregar" />
        </form>
      );
    }
    