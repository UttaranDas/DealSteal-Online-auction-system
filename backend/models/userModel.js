import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  uid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: false
  },
  mobile: {
    type: String,
    required: false
  },

  bid: [{
    item: {
      type: Schema.Types.ObjectId,
      ref: 'products'
    },
    amount: {
      type: Number
    }
  }]

}, { timestamps: true });

const Users = model('users', userSchema);

export default Users;
