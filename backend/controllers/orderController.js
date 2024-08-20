const Order = require('../models/Order');

// Create a new order
exports.createOrder = async (req, res) => {
  const { user, products, total } = req.body;

  try {
    const newOrder = new Order({ user, products, total });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get orders by user ID
exports.getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId }).populate('products.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
