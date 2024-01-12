import { addDoc, collection } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../firebase/firebase";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const setProductInCart = (quantity, product) => {
    if (cart.some((elem) => elem.product.id == product.id)) {
      const filteredCart = cart.map((elem) => {
        if (elem.product.id == product.id) {
          elem.quantity += quantity;
        }

        return elem;
      });

      setCart(filteredCart);
    } else {
      setCart([...cart, { quantity, product }]);
    }
  };
  const removeProductFromCart = (pid) => {
    setCart(cart.filter((elem) => elem.product.id != pid));
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (acc, elem) => acc + elem.quantity * elem.product.price,
      0
    );
  };

  const setQuantityInProduct = (quantity, pid) => {
    setCart(
      cart.map((elem) => {
        if (elem.product.id == pid) {
          elem.quantity = quantity;
        }

        return elem;
      })
    );
  };

  const finishOrder = async (user) => {
    const order = {
      products: cart,
      total: getTotalPrice(),
      user,
    };

    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setProductInCart,
        removeProductFromCart,
        removeAllFromCart,
        getTotalPrice,
        setQuantityInProduct,
        finishOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
