import { useOutletContext } from "react-router";
import CartProduct from "../components/CartProduct";
import styles from "./Cart.module.css";

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
    <main>
      <div className={styles.container}>
        <div className={styles.cart}>
          {fullCart.map((fullProduct) => (
            <CartProduct
              key={fullProduct.id}
              fullProduct={fullProduct}
              setCart={setCart}
            />
          ))}
          <p>Total: {total}</p>
        </div>
      </div>
    </main>
  );
}

export default Cart;
