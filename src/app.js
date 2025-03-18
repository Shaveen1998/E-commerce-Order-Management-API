const express = require("express");
const bodyParser = require("body-parser");
const orderRoutes = require("./routes/orderRoute");

const app = express();
app.use(bodyParser.json());

app.use("/api/orders", orderRoutes);

module.exports = app;
