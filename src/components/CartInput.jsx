function CartInput({ productId, productQuantity, setCart }) {
  return (
    <div>
      <button
        onClick={() => {
          if (productQuantity <= 0) return;
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
    </div>
  );
}

export default CartInput;
