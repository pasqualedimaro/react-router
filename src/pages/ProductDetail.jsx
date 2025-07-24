import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Errore nel caricamento prodotto:", err));
  }, [id]);

  if (!product) return <p>Caricamento...</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="150" />
      <p>{product.description}</p>
      <p><strong>Prezzo:</strong> ${product.price}</p>
    </div>
  );
}

export default ProductDetail;