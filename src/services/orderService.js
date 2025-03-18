const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");

const createOrder = async ({ customerInfo, items }) => {
  if (!customerInfo || !Array.isArray(items) || items.length === 0) {
    throw new Error("Invalid order details");
  }

  for (let item of items) {
    if (!productModel.updateProductStock(item.productId, item.quantity)) {
      throw new Error(
        `Product with ID ${item.productId} is out of stock or insufficient quantity`
      );
    }
  }

  const newOrder = { customerInfo, items, status: "pending" };
  return orderModel.createOrder(newOrder);
};

const getAllOrders = async () => await orderModel.getAllOrders();

const getOrderById = async (id) => {
  const order = await orderModel.getOrderById(id);
  if (!order) throw new Error("Order not found");
  return order;
};

const cancelOrder = async (id) => {
  const order = await orderModel.cancelOrder(id);
  if (!order) throw new Error("Order not found");
  return order;
};

const processNextOrder = async () => {
  const order = await orderModel.processNextOrder();
  if (!order) throw new Error("No orders to process");
  return order;
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  cancelOrder,
  processNextOrder,
};
