import { Fragment } from 'react'
import '../Contact/Contact.css'
import Form from '../Form/Form'
import Navegation from '../Navegator/Navegator'

export default function Contact(){
    return(
        <Fragment>
            <Navegation/>
            <section className='contenedorInfo'>
                <h1 className='tituloPag'>Contact</h1>
                <h2 className='tituloInformativo'>Leave us your information so we can contact you</h2>
                <Form/>
            </section>    
        </Fragment>
    )
}