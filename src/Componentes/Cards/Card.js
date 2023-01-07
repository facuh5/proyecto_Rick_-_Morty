import '../Cards/Card.css'

export default function Card({infoPersonaje}){
    return(
        <div className="tarjetaIndividual">

            <div className="parteVisible">
                <img src={infoPersonaje.image}/>
                <h2 className='nombrePersonaje'>{infoPersonaje.name}</h2>
                <button className='visible'>Now More...</button>
            </div>

        </div>
    )
}