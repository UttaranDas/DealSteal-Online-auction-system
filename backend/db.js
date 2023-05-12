import mongoose from 'mongoose';
import Products from './models/productModel.js';
import Users from './models/userModel.js';

let conn;

const connectDB = async (cb) => {
  try {
    conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    // const allProducts = await Products.find();
    // console.log("All =>", allProducts)
        
    cb();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export {connectDB, Users, Products, conn};