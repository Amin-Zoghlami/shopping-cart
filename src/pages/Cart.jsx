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

  return (
    <>
      {fullCart.map((fullProduct) => (
        <CartProduct
          key={fullProduct.id}
          fullProduct={fullProduct}
          setCart={setCart}
        />
      ))}
    </>
  );
}

export default Cart;
// Loop through cart, get id, match to product,
// copy the product object, and add to new list with amount.
