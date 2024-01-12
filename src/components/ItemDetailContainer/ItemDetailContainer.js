import { useEffect, useState } from "react";
import { products } from "../../data";
import ProductDetail from "../ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../contexts/productsContext";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const { getProductById } = useProductsContext();
  useEffect(() => {
    const getById = async () => setProduct(await getProductById(itemId));
    getById();
  }, [itemId]);

  // Encuentra el producto correspondiente al ID proporcionado

  // Si no se encuentra el prioducto
  if (!product) {
    return <div>No se encontró el producto</div>;
  }
  return (
    <div className="d-flex justify-content-center">
      <ProductDetail product={product} />
    </div>
  );
};
