const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: `users`
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: `product`
  },
  products: [
    {
      productName: {
        type: String,
        required: true
      },
      brandName: {
        type: String,
        required: true
      },
      Quantity: {
        type: Number,
        required: true
      },
      amount: {
        type: String,
        required: true
      }
    }
  ],
  discount: {
    type: String,
    required: true
  },
  subTotal: {
    type: String,
    required: true
  }
});

module.exports = Invoice = mongoose.model("invoice", InvoiceSchema);
