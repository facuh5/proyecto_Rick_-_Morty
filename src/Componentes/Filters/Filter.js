export default function Filter({filtroEnPantalla, datoFiltro, muestraValor}){
    return(
        <div className="form-check form-switch mx-2 bg-warning">
            <input className="form-check-input" type="checkbox" role="switch" id={datoFiltro} value={datoFiltro} onChange={muestraValor}/>
            <label className="form-check-label" htmlFor={filtroEnPantalla}>{filtroEnPantalla}</label>
        </div>
    )
}