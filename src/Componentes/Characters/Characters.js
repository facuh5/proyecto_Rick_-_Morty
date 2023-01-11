import '../Characters/Characters.css'
import Navegation from '../Navegator/Navegator'
import {useState, useEffect} from 'react'
import CardInformation from '../Cards/CardInformation';
import Filter from '../Filters/Filter';

export default function Characters(){
    
    let [arrayCompleto, setArrayCompleto]=useState([]) // guarda la info traída de la API (completa)
    let [arrayActual, setArrayActual]=useState([]) // guarda los distintos cambios generados con la info de la API
    let [filtradoActual, setFiltradoActual]=useState([]) // guarda los filtros aplicados hasta el momento (solo el nombre de los mismos)

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
        // Defino en una variable el valor del filtro apretado
        let datoFiltro=event.target.value
        // Se fija si esta o no checked (tildado)
        if(event.target.checked){
                // Corrobora si debe modificar según el status del personaje
                if(datoFiltro === "Alive" || datoFiltro === "Dead"){
                    let resultado= arrayActual.filter((ch)=> ch.status === datoFiltro)//nuevo array con solo los elementos que cumplen la condicion
                    // Manejo de la lista de filtros ya aplicados
                    let acumuloFiltros = filtradoActual
                    acumuloFiltros.push(datoFiltro)
                    setFiltradoActual(acumuloFiltros)
                    setArrayActual(resultado) // modificación de los personajes que se muestran en pantalla según el filtro aplicado
                }
                // Corrobora si debe modificar según el gender del personaje
                if(datoFiltro === "Female" || datoFiltro === "Male"){
                    let resultado= arrayActual.filter((ch)=> ch.gender === datoFiltro)
                    // Manejo de la lista de filtros ya aplicados
                    setArrayActual(resultado)
                    let acumuloFiltros = filtradoActual
                    acumuloFiltros.push(datoFiltro)
                    setFiltradoActual(acumuloFiltros) // modificación de los personajes que se muestran en pantalla según el filtro aplicado
                }
                // Corrobora si debe modificar en base a un origin (name) desconocido
                if(datoFiltro === "unknown"){
                    let resultado= arrayActual.filter((ch)=> ch.origin.name === datoFiltro)
                    // Manejo de la lista de filtros ya aplicados
                    setArrayActual(resultado)
                    let acumuloFiltros = filtradoActual
                    acumuloFiltros.push(datoFiltro)
                    setFiltradoActual(acumuloFiltros) // modificación de los personajes que se muestran en pantalla según el filtro aplicado
                } 
        }else{
            let listaFiltrosAplicados = filtradoActual // lista de los filtros aplicados hasta el momento
            let listaAMostrarPorPantalla = arrayCompleto // 
            // Eliminación de la lista del filtro "cancelado" y actualización de la misma en el state
            listaFiltrosAplicados.splice(listaFiltrosAplicados.indexOf(datoFiltro), 1)
            setFiltradoActual(listaFiltrosAplicados)
            // Aplica 1 por 1 a todos los personajes traídos por la API los filtros que se mantienen seleccionados
            for (let index = 0; index < listaFiltrosAplicados.length; index++) {
                const element = listaFiltrosAplicados[index];
                if(element === "Alive" || element === "Dead"){
                    listaAMostrarPorPantalla = listaAMostrarPorPantalla.filter((ch) => ch.status === element)
                }
                if(element === "Female" || element === "Male"){
                    listaAMostrarPorPantalla = listaAMostrarPorPantalla.filter((ch) => ch.gender === element)
                }
                if(element === "unknown"){
                    listaAMostrarPorPantalla = listaAMostrarPorPantalla.filter((ch) => ch.origin.name === element)
                }
            }
            setArrayActual(listaAMostrarPorPantalla) // // modificación de los personajes que se muestran en pantalla según el filtro dejado de aplicar
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