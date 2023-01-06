import '../ItemsLists/Items.css';

export default function Item({prop, clase}){

    return(
        <li id={prop} className={clase}>{prop}</li>
    )
}