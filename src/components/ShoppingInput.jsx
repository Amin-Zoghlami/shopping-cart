import { useState } from "react";

function ShoppingInput({ productId, setCart }) {
  const [quantity, setQuantity] = useState(0);

  function addToCart() {
    setCart((prevCart) => {
      if (prevCart.some((product) => product.id === productId)) {
        return prevCart.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + quantity }
            : product
        );
      }
      return [...prevCart, { id: productId, quantity: quantity }];
    });
  }

  return (
    <div>
      <button
        onClick={() => {
          if (quantity <= 0) return;
          setQuantity((prevQuantity) => prevQuantity - 1);
        }}
      >
        -
      </button>
      <input type="number" placeholder={quantity} />
      <button
        onClick={() => {
          if (quantity >= 20) return;
          setQuantity((prevQuantity) => prevQuantity + 1);
        }}
      >
        +
      </button>
      <button
        type="submit"
        onClick={() => {
          if (quantity > 0) addToCart();
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ShoppingInput;
