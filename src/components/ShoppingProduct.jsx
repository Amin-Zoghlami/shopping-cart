import ShoppingInput from "./ShoppingInput";

function ShoppingProduct({ product, setCart }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <ShoppingInput productId={product.id} setCart={setCart} />
    </div>
  );
}

export default ShoppingProduct;
