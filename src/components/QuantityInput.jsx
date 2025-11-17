function QuantityInput({ quantity, setQuantity }) {
  return (
    <>
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
    </>
  );
}

export default QuantityInput;
