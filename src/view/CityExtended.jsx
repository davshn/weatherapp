import { useParams } from "react-router"


export default function CityExtended({onFilter}) {
    let city= onFilter(useParams().id)
    return (
        <div>
            <h2>{city.name}</h2>
        </div>    
    )
 
    }