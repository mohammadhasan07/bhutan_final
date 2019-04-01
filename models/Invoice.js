const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: `users`
  },
  customerName: {
    type: String,
    required: true
  },
  customerEmail: {
    type: String
  },
  customerPhone: {
    type: Number,
    required: true
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: `product`
      },
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
        type: Number,
        required: true
      }
    }
  ],
  services: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: `service`
      },
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
        type: Number,
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
