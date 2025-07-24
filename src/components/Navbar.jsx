//importo router
import {Link} from "react-router-dom"

//funzione
function Navbar(){
    return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Chi siamo</Link>
        <Link to="/products">Prodotti</Link>
    </nav>
    )
}
// esporto
export default Navbar;