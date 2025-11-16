import ShoppingProduct from "./ShoppingProduct.jsx";

function ShoppingSection({ category, products, setCart }) {
  return (
    <div>
      <h2>{category}</h2>
      {products.map((product) => (
        <ShoppingProduct key={product.id} product={product} setCart={setCart} />
      ))}
    </div>
  );
}

export default ShoppingSection;
