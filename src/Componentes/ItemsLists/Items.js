import '../ItemsLists/Items.css';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function Item({prop, clase, identificador}){
    
    function addLink(){
        if(prop === "Home"){
            return "/"
        } else {
            return ("/"+prop)
        }
    }

    // function claseUsar(){
    //     let seleccionado = document.querySelector(".item-seleccionado")
    //     console.log(seleccionado)
    //     if (seleccionado !== null){
    //         seleccionado.classList.toggle("item-seleccionado")
    //         seleccionado.classList.toggle("item")
    //     }
        
        
    //     console.log("hasta acá llega")
    //     if(identificador !== "Home"){
    //         let actual = document.getElementById(identificador)
    //         actual.classList.toggle("item-seleccionado")
    //         actual.classList.toggle("item")
    //     }
    // }

    // function claseUsar(){
    //     let seleccionadoActual = document.querySelector(".item-seleccionado")
    //     if (seleccionadoActual !== null){
    //         seleccionadoActual.classList.toggle("item-seleccionado")
    //         seleccionadoActual.classList.toggle("item")
    //     }   
    //     if(identificador !== "Home"){
    //         return "item-seleccionado"
    //     } else {
    //         return "item"
    //     }
    // }

    function botonSeleccionado(){
        let btnSel = window.location.pathname
        if (("/"+prop) === btnSel && prop !== "Home"){
            return "item-seleccionado"

        } else {
            return clase
        }
    }

//className={clase}

    return(
        <Link to={addLink()} className="link">
            <li id={identificador} className={botonSeleccionado()}>{prop}</li>
        </Link>
    )
}