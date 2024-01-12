import { useCartContext } from "../../contexts/cartContext";
import CartItem from "../CartItem/CarItem";

const CartItemList = () => {
  const { cart, removeProductFromCart, removeAllFromCart } = useCartContext();
  return (
    <ol
      className="list-group"
      style={{ width: "calc(70% - 20px)", marginRight: "20px" }}
    >
      {cart.map((elem) => (
        <CartItem
          quantity={elem.quantity}
          product={elem.product}
          deleteProduct={removeProductFromCart}
        />
      ))}
      <li className="list-group-item d-flex justify-content-end align-items-start p-3">
        <button
          onClick={removeAllFromCart}
          type="button"
          className="btn btn-outline-danger"
        >
          Remove All
        </button>
      </li>
    </ol>
  );
};

export default CartItemList;
