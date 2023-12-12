import React from 'react';
import { useParams } from 'react-router-dom';
import ProductImage1 from '../../path-to-your-images/product2.jpg'; 
import productImage2 from '../../path-to-your-images/product2.jpg';

const ProductDetail = () => {
  const { itemId } = useParams();

  // array de productos
  const products = [
    { id: '1', name: 'Producto 1', description: 'Descripción del Producto 1', image: ProductImage1 },
    { id: '2', name: 'Producto 2', description: 'Descripción del Producto 2', image: productImage2 },
    
  ];

  // Encuentra el producto correspondiente al ID proporcionado
  const product = products.find((p) => p.id === itemId);

  // Si no se encuentra el prioducto
  if (!product) {
    return <div>No se encontró el producto</div>;
  }

  // Renderiza los detalles del producto
  return (
    <div>
      <h2>Detalles del Producto</h2>
      <img src={product.image} alt={product.name} />
      <p>ID del Producto: {product.id}</p>
      <p>Nombre: {product.name}</p>
      <p>Descripción: {product.description}</p>
    </div>
  );
};

export default ProductDetail;
