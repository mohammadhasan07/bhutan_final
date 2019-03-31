const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: `users`
  },
  serviceType: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cost: {
    type: Date,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Service = mongoose.model("service", ServiceSchema);
