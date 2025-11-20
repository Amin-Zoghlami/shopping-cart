function CartInput({ productId, productQuantity, setCart }) {
  return (
    <div>
      <button
        onClick={() => {
          if (productQuantity <= 1) return;
          setCart((prevCart) =>
            prevCart.map((product) =>
              product.id === productId
                ? { ...product, quantity: productQuantity - 1 }
                : product
            )
          );
        }}
      >
        -
      </button>
      <input type="number" placeholder={productQuantity} />
      <button
        onClick={() => {
          if (productQuantity >= 20) return;
          setCart((prevCart) =>
            prevCart.map((product) =>
              product.id === productId
                ? { ...product, quantity: productQuantity + 1 }
                : product
            )
          );
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCart((prevCart) =>
            prevCart.filter((product) => product.id !== productId)
          );
        }}
      >
        Remove Product
      </button>
    </div>
  );
}

export default CartInput;
