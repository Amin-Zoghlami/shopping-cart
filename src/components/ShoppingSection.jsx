import ShoppingProduct from "./ShoppingProduct.jsx";
import styles from "./ShoppingSection.module.css";

function ShoppingSection({ category, products, setCart }) {
  return (
    <section>
      <h2 className={styles.h2}>{category}</h2>
      <div className={styles.div}>
        {products.map((product) => (
          <ShoppingProduct
            key={product.id}
            product={product}
            setCart={setCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ShoppingSection;
