import CartInput from "./CartInput";
import styles from "./CartProduct.module.css";

function CartProduct({ fullProduct, setCart }) {
  return (
    <div>
      <img
        src={fullProduct.image}
        alt={fullProduct.category}
        className={styles.img}
      />
      <h2>{fullProduct.name}</h2>
      <p>${fullProduct.price}</p>
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
