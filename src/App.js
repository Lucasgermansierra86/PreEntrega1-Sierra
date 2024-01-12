import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsProvider from "./contexts/productsContext";
import Cart from "./components/Cart/Cart";
import CartProvider from "./contexts/cartContext";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting={"Bienvenidos"} />}
              />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
