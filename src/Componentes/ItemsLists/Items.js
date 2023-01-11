import '../ItemsLists/Items.css';
import {Link} from 'react-router-dom'

export default function Item({prop, clase, identificador}){
    function addLink(){
        if(prop === "Home"){
            return "/"
        } else {
            return ("/"+prop)
        }
    }
    return(
        <Link to={addLink()} className="link"><li id={identificador} className={clase}>{prop}</li></Link>
    )
}