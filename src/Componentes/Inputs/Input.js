import '../Inputs/Input.css'

export default function Input({tipo, identificador}) {
    return (
        <input type={tipo} id={identificador} className="inputForm form-control" name={identificador}></input>
    )
}