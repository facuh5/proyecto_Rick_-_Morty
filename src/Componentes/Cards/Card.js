import { useEffect, useState } from 'react'
import '../Cards/Card.css'

export default function Card({infoPersonaje}){

    let [cartaSimple, setCartaSimple] = useState(true)  //booleano que determina si debe abrirse o no la información "adicional" de la carta de los personajes

    //Modifica el valor de 'cartaSimple' --> hace que se modifique el valor del booleano que determina si debe o no mostrarse toda la información completa del personaje
    function mostrarOcultar() {
        setCartaSimple(!cartaSimple)
    } 
    //tarjetaIndividual d-flex imagen-fluid

    return(
        <div className="jj " id={"n" + infoPersonaje.id}>
            {/* Tarjeta/carta del  personaje simple, solo con la información básica */}
            <div className="parteVisible">
                <img src={infoPersonaje.image}/>
                <h2 className='nombrePersonaje'>{infoPersonaje.name}</h2>
                <button className={cartaSimple ? 'visible' : 'invisibilizar'} onClick={mostrarOcultar}>Now More...</button>
            </div>

            {!cartaSimple? // <--- función js para determinar si debe o no mostrarse dicha información
                // Parte de la tarjeta/carta del personaje que contiene toda la información "adicional" del mismo
                <div className='parteInvisible'>
                    <button className='cruz ' onClick={mostrarOcultar}>X</button>
                    <div className='renglonInformativo'>
                        <p className='pInfo'>Characters status {infoPersonaje.status}</p>
                    </div>
                    <div className='renglonInformativo'>
                        <p className='pTitulo'>Species</p>
                        <p className='pInfo'>{infoPersonaje.species}</p>
                    </div>
                    <div className='renglonInformativo'>
                        <p className='pTitulo'>Origin</p>
                        <p className='pInfo'>{infoPersonaje.origin.name}</p>
                    </div>
                    <div className='renglonInformativo'>
                        <p className='pTitulo'>Gender</p>
                        <p className='pInfo'>{infoPersonaje.gender}</p>
                    </div>
                </div>
            : ''}
        </div>
    )
}