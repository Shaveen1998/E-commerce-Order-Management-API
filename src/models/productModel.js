let products = [
  { id: 1, name: "Laptop", quantity: 10 },
  { id: 2, name: "Smartphone", quantity: 15 },
  { id: 3, name: "Headphones", quantity: 5 },
];

const getProducts = () => products;
const updateProductStock = (productId, quantity) => {
  const product = products.find((p) => p.id === productId);
  if (product && product.quantity >= quantity) {
    product.quantity -= quantity;
    return true;
  }
  return false;
};

module.exports = { getProducts, updateProductStock };
