import '../Form/Form.css'
import Input from '../Inputs/Input'

export default function Form () {
    return (
        <main className='espacioOcupar'>
            <form className='formulario'>
                <div id='name' className='dentroForm'> 
                    <label>Name</label>
                    <Input tipo="text"/>
                </div>
                <div id='email' className='dentroForm'>
                    <label>Email</label>
                    <Input tipo="email"/>
                </div>
                <div id='mensaje' className='dentroForm'>
                    <label>Message</label>
                    <Input tipo="password"/>
                </div>
                
                <Input tipo="submit" id='submit'/>
            </form>
        </main>
    )   
}