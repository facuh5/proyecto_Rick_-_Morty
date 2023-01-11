import { useEffect } from 'react'
import '../Cards/Card.css'

export default function Card({infoPersonaje}){
    // useEffect(()=>{
    //     if (infoPersonaje.id == "n6" || infoPersonaje.id == "n20"){
    //         document.querySelector(infoPersonaje.id).classList.add("tarjetaMasAncha")
    //     }
    // })
    return(
        <div className="tarjetaIndividual" id={"n" + infoPersonaje.id}>

            <div className="parteVisible">
                <img src={infoPersonaje.image}/>
                <h2 className='nombrePersonaje'>{infoPersonaje.name}</h2>
                <button className='visible'>Now More...</button>
            </div>

            <div className='parteInvisible'>
                <button className='cruz '>X</button>
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
        </div>
    )
}