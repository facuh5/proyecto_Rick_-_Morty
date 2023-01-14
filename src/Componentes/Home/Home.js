import './Home.css';
import Item from '../ItemsLists/Items';

export default function Home() {
    return(
        <main className="cuadroContenedor">
            <h1>Project - Rick & Morty</h1>
            <ul>
                <Item prop="Characters" clase="item separacionHome" identificador="Characters"/>
                <Item prop="Contact" clase="item separacionHome" identificador="Contact"/>
            </ul>
        </main>
    )
}