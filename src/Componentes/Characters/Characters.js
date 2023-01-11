import '../Characters/Characters.css'
import Navegation from '../Navegator/Navegator'
import {useState, useEffect} from 'react'
import CardInformation from '../Cards/CardInformation';
import Filter from '../Filters/Filter';

export default function Characters(){
    
    let [arrayCompleto, setArrayCompleto]=useState([])
    let [arrayActual, setArrayActual]=useState([])
    let [filtradoActual, setFiltradoActual]=useState([])
    // let filtrosActivos = 0
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

    //Hace que carguen las tarjetas con la información de la API ni bien carga la página
    useEffect(()=>{
        mostrarInfo() 
    },[])

    // ---------------------------------------------------------------------------------
    // ------------------------- Manejo de los filtros ---------------------------------
    // ---------------------------------------------------------------------------------
    
    

    const resultadoFiltro =(event)=>{
        // se fija si esta o no checked,tildado
        let datoFiltro=event.target.value
        if(event.target.checked){
                
                if(datoFiltro === "Alive" || datoFiltro === "Dead"){
                    let resultado= arrayActual.filter((ch)=> ch.status === datoFiltro)//nuevo array con solo los elementos que cumplen la condicion
                    // setFiltradoActual(filtradoActual.concat(datoFiltro))
                let acumuloFiltros = filtradoActual
                    acumuloFiltros.push(datoFiltro)
                    setFiltradoActual(acumuloFiltros)
                    setArrayActual(resultado)
                    console.log(acumuloFiltros)
                    console.log(arrayActual)
                }
                if(datoFiltro === "Female" || datoFiltro === "Male"){
                    let resultado= arrayActual.filter((ch)=> ch.gender === datoFiltro)
                    setArrayActual(resultado)
                    // setFiltradoActual(filtradoActual.concat(datoFiltro))
                    let acumuloFiltros = filtradoActual
                    acumuloFiltros.push(datoFiltro)
                    setFiltradoActual(acumuloFiltros)
                    console.log(acumuloFiltros)
                }
                if(datoFiltro === "unknown"){
                    let resultado= arrayActual.filter((ch)=> ch.origin.name === datoFiltro)
                    // setFiltradoActual(filtradoActual.concat(datoFiltro))
                    setArrayActual(resultado)
                    let acumuloFiltros = filtradoActual
                    acumuloFiltros.push(datoFiltro)
                    setFiltradoActual(acumuloFiltros)
                    console.log(acumuloFiltros)
                } 
        }else{
            // DE LA LISTA DE LOS FILTROS APLICADOS ACTUALMENTE (SOLO EL NOMBRE DE LOS FILTROS) QUITO DE LA MISMA EL FILTRO DESSELECCIONADO
            console.log(event.target.value)
            let array = filtradoActual
            array.splice(array.indexOf(event.target.value), 1)
            setFiltradoActual(array)
            // TRAER TODOS LOS FILTROS CNDO SE DESSELECCIONE UNO
            //setArrayActual(arrayCompleto)

            // NO QUEREMOS ESO ^, ENTONCES PROBAMOS ESTO:
            let fl = arrayCompleto
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                if(element === "Alive" || element === "Dead"){
                    fl = fl.filter((ch) => ch.status === element)
                    console.log("el status es: ", element)
                    console.log(fl)
                }
                if(element === "Female" || element === "Male"){
                    fl = fl.filter((ch) => ch.gender === element)
                    console.log("el gender es: ", element)
                    console.log(fl)
                }
                if(element === "unknown"){
                    fl = fl.filter((ch) => ch.origin.name === element)
                }
            }
            setArrayActual(fl)


            // ver como hacer para que si hay 2 filtros activados y se quita uno el otro se mantenga (contador)

        }
    }


    return(
        <div>
            <Navegation/>
            {/* Probar hacer otro componente que contenga TODO lo de los filtros */}
            <section className='filtros'>
                <h1 className='titFiltros'>Filters</h1>
                <div className='contFiltro'>
                    <Filter  filtroEnPantalla="Character Alive" datoFiltro="Alive" muestraValor={resultadoFiltro}/>
                    <Filter  filtroEnPantalla="Character Dead" datoFiltro="Dead" muestraValor={resultadoFiltro}/>
                    <Filter  filtroEnPantalla="Male" datoFiltro="Male" muestraValor={resultadoFiltro}/>
                    <Filter  filtroEnPantalla="Female" datoFiltro="Female" muestraValor={resultadoFiltro}/>
                    <Filter  filtroEnPantalla="Origin Unknown" datoFiltro="unknown" muestraValor={resultadoFiltro}/>
                </div>
            </section>
            <CardInformation lista={arrayActual}/>
        </div>
    )
}