import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import getCartQuantityTotal from "./utils/getCartQuantityTotal";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const cartQuantityTotal = getCartQuantityTotal(cart);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Nav cartQuantityTotal={cartQuantityTotal} />
      <Outlet context={{ products, cart, setCart }} />
      <p>Cart state: {JSON.stringify(cart)}</p>
      <Footer />
    </div>
  );
}

export default App;
