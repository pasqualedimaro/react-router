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

    return (
    <div>
      <h3>Lista prodotti:</h3>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <h4>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </h4>
            <img src={product.image} alt={product.title} className="product-image" />
            <p className="product-price"><strong>Prezzo:</strong> ${product.price}</p>
            <p className="product-description">{product.description.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );


}

//esporto
export default ProductList;