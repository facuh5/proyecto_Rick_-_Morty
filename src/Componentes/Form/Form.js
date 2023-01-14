import '../Form/Form.css'
import Input from '../Inputs/Input'




export default function Form () {

    // enviarData(): none ---> none
    // Se encarga de enviar la información del formulario a formspree
    async function enviarData(event){
        event.preventDefault()
        let formulario = document.querySelector("form")
        let infoForm = new FormData(formulario)
        await fetch('https://formspree.io/f/xpzewzjn', {
            method: 'post',
            body: infoForm,
            headers: {'Accept':'application.json'}
        })
            .then(formulario.reset())
            .catch((error) => {alert("UPS! Hubo un problema\nNo se pudo enviar el formulario :(")})
    }


    return (
        <main className='espacioOcupar'>
            <form className='formulario' method='post' action='https://formspree.io/f/xpzewzjn'>
                <div id='nameDiv' className='dentroForm'> 
                    <label className='labelForm' htmlFor='name'>Name</label>
                    <Input tipo="text" identificador='name'/>
                </div>
                <div id='emailDiv' className='dentroForm'>
                    <label className='labelForm' htmlFor='email'>Email</label>
                    <Input tipo="email" identificador='email'/>
                </div>
                <div id='mensajeDiv' className='dentroForm'>
                    <label className='labelForm' htmlFor='mensaje'>Message</label>
                    <textarea id='mensaje' rows={5} className='form-control' name='mensaje'></textarea>
                </div>
            </form>
            <button type='submit' className='botonForm' onClick={enviarData}>Sign in</button>
        </main>
    )  
}