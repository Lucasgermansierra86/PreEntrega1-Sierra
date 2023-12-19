import { products } from "../../data";
import ProductDetail from "./ProductDetail"
import { useParams } from 'react-router-dom';
 


export const ItemDetailContainer =()=>{
    const { itemId } = useParams();
  
    
  
    // Encuentra el producto correspondiente al ID proporcionado
    const product = products.find((p) => p.id === itemId);
  
    // Si no se encuentra el prioducto
    if (!product) {
      return <div>No se encontró el producto</div>;
    }
    return (
        <ProductDetail product={product}/>
    )
}