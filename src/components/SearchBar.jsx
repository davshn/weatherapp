import styled from "styled-components";
import { useState } from "react";
//Formulario de busqueda 
const SubmitButton = styled.input`    //Boton ver
  width: 7rem;
  height: 2.1rem;
  right:0.5rem;
  border-radius: 0px 15px 15px 0px;
  color: #000;
  background: #fff;
  opacity: 0.7;
  border: #fff 1px solid ;
  font-weight: lighter;
  font-family: "century gothic";

&:hover{ 
  background: #010125;
  color: #fff;
  }
`
const TextSearch = styled.input`      //Barra de busqueda
  width:50%;
  height: 1.5rem;
  padding:0.25rem 2rem 0.25rem 0.25rem;
  border-radius: 15px 0px 0px 15px;
  border: #fff 1px solid;
  opacity: 0.6;
  font-family: "century gothic";
  @media (min-width:576px){                            //responsive para escritorio
    width:60%;
    padding:0.25rem 4rem 0.25rem 0.25rem;
    }
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
            placeholder="¿Que ciudad buscas hoy?"
          />
          <SubmitButton type="submit" value="Ver"/> 
        </form>
      );
    }
    