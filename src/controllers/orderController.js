const orderService = require("../services/orderService");

const createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllOrders = async (req, res) => {
  res.status(200).json(await orderService.getAllOrders());
};

const getOrderById = async (req, res) => {
  try {
    const order = await orderService.getOrderById(parseInt(req.params.id));
    res.status(200).json(await order);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const cancelOrder = async (req, res) => {
  try {
    const order = await orderService.cancelOrder(parseInt(req.params.id));
    res.status(200).json({ message: "Order canceled successfully", order });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const processNextOrder = async (req, res) => {
  try {
    const order = await orderService.processNextOrder();
    res
      .status(200)
      .json({ message: `Order ${order.id} processed successfully`, order });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  cancelOrder,
  processNextOrder,
};
