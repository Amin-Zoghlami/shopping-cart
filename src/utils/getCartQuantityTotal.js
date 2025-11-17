function getCartQuantityTotal(cart) {
  let total = 0;
  cart.forEach(({ quantity }) => {
    total += quantity;
  });
  return total;
}

export default getCartQuantityTotal;
