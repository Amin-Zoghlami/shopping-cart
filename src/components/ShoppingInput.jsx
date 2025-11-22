import { useState } from "react";

function ShoppingInput({ productId, setCart }) {
  const [quantity, setQuantity] = useState(0);

  function addToCart() {
    setCart((prevCart) => {
      if (prevCart.some((product) => product.id === productId)) {
        return prevCart.map((product) =>
          product.id === productId
            ? {
                ...product,
                quantity: Math.min(20, product.quantity + quantity),
              }
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
      <input
        type="number"
        placeholder="0"
        value={quantity === 0 ? "" : quantity}
        onChange={(e) => {
          const val = Math.min(20, Math.max(0, Number(e.target.value)));
          setQuantity(val);
        }}
      />
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
