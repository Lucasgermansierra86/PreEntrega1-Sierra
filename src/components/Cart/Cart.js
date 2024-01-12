import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/cartContext";
import CartItemList from "../CartItemList/CartItemList";

const Cart = () => {
  const { getTotalPrice, cart } = useCartContext();
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex w-75 mt-5">
        <CartItemList />
        <div className="card" style={{ width: "30%", height: "fit-content" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
              <p className="fw-bold fs-6">Total:</p>
              <span>{getTotalPrice()}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <p className="fw-bold fs-6">Products Quantity:</p>
              <span>{cart.reduce((acc, elem) => acc + elem.quantity, 0)}</span>
            </li>
          </ul>
          <div className="card-footer ">
            <Link
              to="/checkout"
              className={`btn btn-outline-success w-100 ${
                cart.length == 0 ? "disabled" : ""
              }`}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
