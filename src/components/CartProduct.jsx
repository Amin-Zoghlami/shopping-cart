import CartInput from "./CartInput";

function CartProduct({ fullProduct, setCart }) {
  return (
    <div>
      <h2>{fullProduct.name}</h2>
      <p>{fullProduct.price}</p>
      <p>{fullProduct.quantity}</p>
      <CartInput
        productId={fullProduct.id}
        productQuantity={fullProduct.quantity}
        setCart={setCart}
      />
    </div>
  );
}

export default CartProduct;
