import '../Form/Form.css'
import Input from '../Inputs/Input'

export default function Form () {

    function pasarDatos(){
        console.log("Se apretó el botón")
    }

    return (
        <main className='espacioOcupar'>
            <form className='formulario'>
                <div id='nameDiv' className='dentroForm'> 
                    <label className='labelForm' htmlFor='name'>Name</label>
                    <Input tipo="text" identificador='name'/>
                </div>
                <div id='emailDiv' className='dentroForm'>
                    <label className='labelForm' htmlFor='email'>Email</label>
                    <Input tipo="email" identificador='id'/>
                </div>
                <div id='mensajeDiv' className='dentroForm'>
                    <label className='labelForm' htmlFor='mensaje'>Message</label>
                    <textarea id='mensaje' rows={5} className='form-control'></textarea>
                </div>
            </form>
            <button type='submit' className='botonForm' onClick={pasarDatos}>Sign in</button>
        </main>
    )   
}