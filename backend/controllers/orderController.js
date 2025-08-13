const Order = require('../models/Order');
const Item = require('../models/Item');


exports.createOrder = async (req, res) => {
  try {
    const { items, status } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Order must have at least one item' });
    }


    let totalPrice = 0;
    const orderItems = [];

    for (const ordered of items) {
      const itemData = await Item.findById(ordered.item);
      if (!itemData) {
        return res.status(404).json({ message: `Item not found: ${ordered.item}` });
      }

      const priceAtSale = itemData.price;
      totalPrice += priceAtSale * ordered.quantity;

      orderItems.push({
        item: itemData._id,
        name: itemData.name,
        quantity: ordered.quantity,
        priceAtSale
      });
    }

    const newOrder = new Order({
      items: orderItems,
      totalPrice,
      status: status || 'paid'
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.getOrders = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    let filter = {};

    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    const orders = await Order.find(filter).sort({ date: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.updateOrder = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (status) {
      order.status = status;
    }

    const updatedOrder = await order.save();
    res.json(updatedOrder);

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    await order.deleteOne();
    res.json({ message: 'Order deleted' });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};