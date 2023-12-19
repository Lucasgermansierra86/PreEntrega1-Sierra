import React from 'react';


const ProductDetail = ({product}) => {
  

  // Renderiza los detalles del producto
  return (
    <div>
      <img src={product.image} alt={product.name} width={500} height={500} />
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
