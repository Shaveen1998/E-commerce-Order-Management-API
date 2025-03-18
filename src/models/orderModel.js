let orders = [];
let orderQueue = [];

const getAllOrders = () => orders;
const getOrderById = (id) => orders.find((order) => order.id === id);
const createOrder = (order) => {
  order.id = orders.length + 1;
  orders.push(order);
  orderQueue.push(order);
  return order;
};
const cancelOrder = (id) => {
  const order = orders.find((o) => o.id === id);
  if (order) {
    order.status = "canceled";
    return order;
  }
  return null;
};
const processNextOrder = () => {
  if (orderQueue.length === 0) return null;
  const order = orderQueue.shift();
  order.status = "processed";
  return order;
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  cancelOrder,
  processNextOrder,
};
