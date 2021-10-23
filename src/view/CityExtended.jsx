import { useState } from "react";
import { useEffect } from "react";
import fetchCity from "../model/fetchCity"


export default function CityExtended({id}) {
const [city, setCity] = useState();
    useEffect(() => {
        fetchCity(id, setCity);
      }, [id, setCity]);

      console.log(city);
    return (
        <div>
            Soy una ciudad
        </div>    
    
    )
 
    }