import './Home.css';
import Item from '../ItemsLists/Items';

// Home() --> Conforma el html que aparece ni bien cargamos la página, el home.

export default function Home() {
    return(
        <main className="cuadroContenedor">
            <h1>Project Rick & Morty</h1>
            <lu>
                <Item prop="Characters" clase="item separacionHome"/>
                <Item prop="Contact" clase="item separacionHome"/>
            </lu>
        </main>
    )
}