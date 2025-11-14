import { useState, useEffect } from "react";
import groupProducts from "../utils/groupProducts";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const gloves = groupProducts(products, "Gloves");
  const bats = groupProducts(products, "Bats");
  const helmets = groupProducts(products, "Helmets");
  const cleats = groupProducts(products, "Cleats");
  const battingGloves = groupProducts(products, "Batting Gloves");

  return <p>Hello, I'm Shop!</p>;
}

export default Shop;
