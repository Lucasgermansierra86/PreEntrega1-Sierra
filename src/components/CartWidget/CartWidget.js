import { FaCartPlus } from "react-icons/fa";
import { useCartContext } from "../../contexts/cartContext";
const CartWidget = () => {
  const { cart } = useCartContext();
  return (
    <div className="app-text">
      <FaCartPlus />
      {cart.reduce((acc, elem) => acc + elem.quantity, 0)}
    </div>
  );
};

export default CartWidget;
