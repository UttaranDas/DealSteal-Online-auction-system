import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  src: {
    type: String
  },
  startingBid: {
    type: Number,
    required: true
  },
  currentBid: {
    type: Number,
    default: 0
  },
  bids: [{
    bidder: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    bidAmount: {
      type: Number,
      required: true
    }
  }],
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  endTime: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive', 'Sold'],
    default: 'Active'
  }
}, { timestamps: true });

const Products = model('products', productSchema);

export default Products;
