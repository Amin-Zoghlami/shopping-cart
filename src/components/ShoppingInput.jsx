import { useState } from "react";

function ShoppingInput({ productId, setCart }) {
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          if (amount <= 0) return;
          setAmount((prevAmount) => prevAmount - 1);
        }}
      >
        -
      </button>
      <input type="number" placeholder={amount} />
      <button
        onClick={() => {
          if (amount >= 20) return;
          setAmount((prevAmount) => prevAmount + 1);
        }}
      >
        +
      </button>
      <button
        type="submit"
        onClick={() =>
          setCart((prevCart) => {
            if (prevCart.some((product) => product.id === productId)) {
              return prevCart.map((product) =>
                product.id === productId
                  ? { ...product, amount: product.amount + amount }
                  : product
              );
            }
            return [...prevCart, { id: productId, amount: amount }];
          })
        }
      >
        Add to cart
      </button>
    </div>
  );
}

export default ShoppingInput;
