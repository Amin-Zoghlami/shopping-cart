import styles from "./input.module.css";

function CartInput({ productId, productQuantity, setCart }) {
  return (
    <div className={styles.comp}>
      <button
        className={styles.inc}
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
      <input
        className={styles.input}
        type="number"
        placeholder="1"
        value={productQuantity === 1 ? "" : productQuantity}
        onChange={(e) => {
          const val = Math.min(20, Math.max(1, Number(e.target.value)));
          setCart((prevCart) =>
            prevCart.map((product) =>
              product.id === productId ? { ...product, quantity: val } : product
            )
          );
        }}
      />
      <button
        className={styles.inc}
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="25"
          height="25"
        >
          <title>Remove</title>
          <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
        </svg>
      </button>
    </div>
  );
}

export default CartInput;
