import { useOutletContext } from "react-router";
import groupProducts from "../utils/groupProducts";
import ShoppingSection from "../components/ShoppingSection";

function Shop() {
  const { products, setCart } = useOutletContext();
  const groupedProducts = groupProducts(products);

  return (
    <main>
      <div>
        {Object.entries(groupedProducts).map(([category, products]) => (
          <ShoppingSection
            key={category}
            category={category}
            products={products}
            setCart={setCart}
          />
        ))}
      </div>
    </main>
  );
}

export default Shop;
