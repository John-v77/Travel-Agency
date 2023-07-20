import mongoose, { Schema } from 'mongoose';

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'User',
  },

  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      price: { type: Number, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Destination',
      },
    },
  ],
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
