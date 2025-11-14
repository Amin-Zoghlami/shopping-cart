function groupProducts(products, group) {
  return products.filter((e) => e.category === group);
}

export default groupProducts;
