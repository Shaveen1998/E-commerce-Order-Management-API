const express = require("express");
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrderById,
  cancelOrder,
  processNextOrder,
} = require("../controllers/orderController");

router.post("/", createOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.delete("/:id", cancelOrder);
router.post("/process-next-order", processNextOrder);

module.exports = router;
