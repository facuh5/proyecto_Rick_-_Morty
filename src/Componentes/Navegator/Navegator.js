import Item from "../ItemLista/Item";
import '../Navegation/Navegation.css';

export default function Navegation(){
    return(
        <header>
            <nav>
                <ul className="Contenedor">
                    <Item prop="Rick & Morty" clase="item" identificador="RyM"/>
                    <Item prop="Home" clase="item" identificador="Home"/>
                    <Item prop="Characters" clase="item" identificador="Characters"/>
                    <Item prop="Contact" clase="item" identificador="Contact"/>
                </ul>
            </nav>
        </header>
    )
}