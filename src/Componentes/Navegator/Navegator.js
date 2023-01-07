import Item from "../ItemsLists/Items";
import '../Navegator/Navegator.css';

export default function Navegation(){

    // para cuando se le agregue la opcion de clickear a los botonoes(items)
    // function seleccionado(){
    //     let identificador = event
    //     let id = "#" + identificador
    //     let aModificar = document.querySelector(id)
    //     aModificar.classList.toggle("seleccionado")
    // }

    return(
        <header>
            <nav>
                <h2 id="rickMorty">Rick & Morty</h2>
                <ul className="Contenedor">
                    <Item prop="Home" clase="item" identificador="Home"/>
                    <Item prop="Characters" clase="item" identificador="Characters"/>
                    <Item prop="Contact" clase="item" identificador="Contact"/>
                </ul>
            </nav>
        </header>
    )
}