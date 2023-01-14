import { useEffect, useState } from 'react'
import '../Cards/Card.css'

export default function Card({infoPersonaje}){

    let [cartaSimple, setCartaSimple] = useState(true)  //booleano que determina si debe abrirse o no la información "adicional" de la carta de los personajes

    //Modifica el valor de 'cartaSimple' --> hace que se modifique el valor del booleano que determina si debe o no mostrarse toda la información completa del personaje
    function mostrarOcultar() {
        setCartaSimple(!cartaSimple)
    } 

    return(
        <div className="tarjetaPersonaje " id={"n" + infoPersonaje.id}>
            {/* Tarjeta/carta del  personaje simple, solo con la información básica */}
            <div className="tarjetaVisible"> {/* parteVisible */}
                <img src={infoPersonaje.image}/>
                <h2 className='nombrePersonaje'>{infoPersonaje.name}</h2>
                <button className={cartaSimple ? 'btnVisible' : 'invisibilizar'} onClick={mostrarOcultar}>Now More...</button>
            </div>
            <div className={!cartaSimple? 'parteInvisible' : 'invisibilizar'}>
                <button className='btnCruz ' onClick={mostrarOcultar}>X</button>
                <ul className='infoOculta'>
                    <li className='textoPresentacion infoPersonaje'>Characters status {infoPersonaje.status}</li>
                    <li className='textoPresentacion'>Species <span className='infoPersonaje'>{infoPersonaje.species}</span></li>
                    <li className='textoPresentacion'>Origin <span className='infoPersonaje'>{infoPersonaje.origin.name}</span></li>
                    <li className='textoPresentacion'>Gender <span className='infoPersonaje'>{infoPersonaje.gender}</span></li>
                </ul>
            </div>
        </div>
    )
}