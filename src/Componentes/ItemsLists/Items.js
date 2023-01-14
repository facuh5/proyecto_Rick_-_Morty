import '../ItemsLists/Items.css';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function Item({prop, clase, identificador}){
    
    // addLink(): none ---> String
    // Genera la url a la que el ítem debe redirigir al ser oprimido
    function addLink(){
        if(prop === "Home"){
            return "/"
        } else {
            return ("/"+prop)
        }
    }

    // botonSeleccionado(): none ---> String
    // Devuelve la className correspondiente según si el usuario está o no en la pestaña a la que redirige dicho botón
    function botonSeleccionado(){
        let btnSel = window.location.pathname
        if (("/"+prop) === btnSel && prop !== "Home"){
            return "item-seleccionado"

        } else {
            return clase
        }
    }

    return(
        <Link to={addLink()} className="link">
            <li id={identificador} className={botonSeleccionado()}>{prop}</li>
        </Link>
    )
}