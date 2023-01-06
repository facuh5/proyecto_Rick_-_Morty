import '../ItemsLists/Items.css';

export default function Item({prop, clase, identificador}){

    return(
        <li id={identificador} className={clase}>{prop}</li>
    )
}