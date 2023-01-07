import '../Filters/Filter.css'

export default function Filter({filtroEnPantalla, datoFiltro, muestraValor}){
    return(
            <div className="form-switch   filtroInd">
                <p></p>
                <input className="form-check-input botonFiltro" type="checkbox" role="switch" id={datoFiltro} value={datoFiltro} onChange={muestraValor}/>
                <label className=" texto" htmlFor={filtroEnPantalla}>{filtroEnPantalla}</label>
            </div>
    )
}