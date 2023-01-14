import Card from '../Cards/Card'
import '../Cards/CardInformation.css'

export default function CardInformation({lista}){

    return(
        <section className='contenedorTarjetas'>

            {lista.map((elemento)=>{
                return <Card key={elemento.id} infoPersonaje={elemento}/>
            })}
            
        </section>
    )
}