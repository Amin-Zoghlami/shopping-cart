import ShoppingInput from "./ShoppingInput";
import styles from "./ShoppingProduct.module.css";

function ShoppingProduct({ product, setCart }) {
  return (
    <div>
      <img src={product.image} alt={product.category} className={styles.img} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <ShoppingInput productId={product.id} setCart={setCart} />
    </div>
  );
}

export default ShoppingProduct;
