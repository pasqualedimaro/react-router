//importo 
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


//funzione
function ProductList(){
    const [products, setProducts] = useState([])
    //chiamata axios
    const endpoint = "https://fakestoreapi.com/products";
    useEffect(() => {
        axios.get(endpoint).then((res) => setProducts(res.data)).catch((err) => console.error("errore",err))
    }, []);

    return(
        <div>
            <h3>lista prodotti:</h3>
            <ul>
                {products.map((products)=>(
                <li key={products.id}>
                    <Link to={`/products/${products.id}`}>{products.title}</Link>
                </li>
                ))}
            </ul>
        </div>
    )


}

//esporto
export default ProductList;