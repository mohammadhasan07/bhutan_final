const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: `users`
  },
  productName: {
    type: String,
    required: true
  },
  brandName: {
    type: String,
    required: true
  },
  partNo: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  rackNo: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Products = mongoose.model("product", ProductSchema);
