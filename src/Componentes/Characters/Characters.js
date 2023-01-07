import '../Characters/Characters.css'
import Navegation from '../Navegator/Navegator'
import {useState, useEffect} from 'react'
import CardInformation from '../Cards/CardInformation';

export default function Characters(){
    
    let [arrayCompleto, setArrayCompleto]=useState([])
    let [arrayActual, setArrayActual]=useState([])

    // ---------------------------------------------------------------------------------
    // ----------------------- Manejo de la API (info) ---------------------------------
    // ---------------------------------------------------------------------------------
    async function traerInfo() {
        let info = await fetch("https://rickandmortyapi.com/api/character")
                            .then(busqueda => busqueda.json())
                            .catch(error => console.log(error));
        return info;
    }

    async function mostrarInfo (){
        let dato= await traerInfo();
        let infoPersonajes= dato.results;
        console.log(infoPersonajes);
        setArrayActual(infoPersonajes);
        setArrayCompleto(infoPersonajes);
    }

    //Se ejecuta cuando se renderiza la pagina
    useEffect(()=>{
        mostrarInfo() 
    },[])


    return(
        <div>
            <Navegation/>
            {/* Filtros */}
            <CardInformation lista={arrayActual}/>
        </div>
    )
}