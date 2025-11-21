import { useOutletContext } from "react-router";
import CartProduct from "../components/CartProduct";

function Cart() {
  const { products, cart, setCart } = useOutletContext();

  const fullCart = cart.map((cartProduct) => {
    const fullProduct = products.find(
      (product) => product.id === cartProduct.id
    );
    return { ...fullProduct, quantity: cartProduct.quantity };
  });

  let total = 0;
  for (const fullProduct of fullCart) {
    total += fullProduct.price * fullProduct.quantity;
  }
  total = total.toFixed(2);

  return (
    <div>
      {fullCart.map((fullProduct) => (
        <CartProduct
          key={fullProduct.id}
          fullProduct={fullProduct}
          setCart={setCart}
        />
      ))}
      <p>Total: {total}</p>
    </div>
  );
}

export default Cart;
