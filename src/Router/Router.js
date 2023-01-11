import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Characters from '../Componentes/Characters/Characters'
import Contact from '../Componentes/Contact/Contact'
import Home from "../Componentes/Home/Home"

export default function Router (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Characters" element={<Characters/>}/>
                <Route path="/Contact" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    )
}