import { useState } from "react";
import { useCartContext } from "../../contexts/cartContext";

const CartItem = ({ product, deleteProduct, quantity }) => {
  const { setQuantityInProduct } = useCartContext();
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount(count + 1);
    setQuantityInProduct(count + 1, product.id);
  };
  const removeCount = () => {
    if (count > 1) {
      setCount(count - 1);
      setQuantityInProduct(count - 1, product.id);
    }
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start p-3">
      <div className="me-auto d-flex">
        <img
          className="me-2"
          style={{ height: "100px" }}
          src={product.image}
          alt="productImg"
        />
        <div className="">
          <h4 className="fw-bold fs-5 mb-4">{product.name}</h4>
          <button
            onClick={() => deleteProduct(product.id)}
            type="button"
            className="btn btn-danger"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="d-flex flex-column align-items-end">
        <span className="badge bg-primary rounded-pill">${product.price}</span>
        <div
          className="border d-flex justify-content-between align-items-center  rounded-3 align-self-center mt-3"
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
          <span className="mx-4">{quantity}</span>
          <button
            type="button"
            className="btn btn-outline-primary border-0"
            onClick={addCount}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
