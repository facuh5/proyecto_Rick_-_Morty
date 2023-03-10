import { useState } from "react";
import Item from "../ItemsLists/Items";
import '../Navegator/Navegator.css';

export default function Navegation(){

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