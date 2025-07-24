//importo router
import {NavLink} from "react-router-dom"

//funzione
function Navbar(){
    return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">Chi siamo</NavLink>
            </li>
            <li>
                <NavLink to="/products">Prodotti</NavLink>
            </li>
        </ul>
    </nav>
    )
}
// esporto
export default Navbar;