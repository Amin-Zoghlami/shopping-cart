function getCartQuantityTotal(cart) {
  let total = 0;
  cart.forEach(({ amount }) => {
    total += amount;
  });
  return total;
}

export default getCartQuantityTotal;
