import React, { useState } from "react";
import { useCartContext } from "../../contexts/cartContext";
import { Link } from "react-router-dom";

const ProductDetail = ({ product }) => {
  const { setProductInCart } = useCartContext();
  const [count, setCount] = useState(1);
  const [goCart, setGoCart] = useState(false);
  const addCount = () => setCount(count + 1);
  const removeCount = () => count > 1 && setCount(count - 1);
  const goToCart = () => {
    setProductInCart(count, product);
    setGoCart(true);
  };
  return (
    <div style={{ maxWidth: "700px" }} className="card mt-5">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.image}
            className="img-fluid rounded-start"
            alt={product.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-bold fs-4">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text fw-bold fs-5">${product.price}</p>
            {goCart ? (
              <Link
                className="btn btn-outline-primary mt-3 w-50 align-self-center"
                to="/cart"
              >
                Ir al carrito
              </Link>
            ) : (
              <>
                <div
                  className="border d-flex justify-content-between align-items-center w-50 rounded-3 align-self-center mt-3"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button
                    type="button"
                    className="btn btn-outline-primary border-0"
                    onClick={removeCount}
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button
                    type="button"
                    className="btn btn-outline-primary border-0"
                    onClick={addCount}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-primary w-50 align-self-center mt-1"
                  onClick={goToCart}
                >
                  Add to Cart
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
