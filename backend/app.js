// Import required modules
import express from "express";
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import "dotenv/config";
import multer from "multer";
import { connectDB, Users, Products } from "./db.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
const ObjectId = mongoose.Types.ObjectId;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get(/^(?!\/dealsteal).+/, (req, res) => {
  res.sendFile(path.join(__dirname, '../backend/dist/index.html'));
});

const PORT = process.env.PORT || 8000;

// Start server
connectDB(() =>
  server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  })
);

// Handle file uploads using multer middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.get("/dealsteal/", async (req, res) => {
  console.log("accessed");
  try {
    // random set of 50 products
    const products = await Products.aggregate([{ $sample: { size: 50 } }]);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/dealsteal/product/:id", async (req, res) => {
  const id = req.params.id;
  console.log(`accessed product/${id}`);
  try {
    const product = await Products.findById(id);
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.patch("/dealsteal/product/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Products.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const { status } = req.body;
    if (status === "Inactive") {
      console.log(id, status, product.name);
      product.status = "Inactive";
      await product.save();
    } else {
      return res.status(400).json({ error: "Invalid status value" });
    }

    res.json({ message: "Product status updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Define route for adding a product
app.post("/dealsteal/products", upload.single("img"), async (req, res) => {
  console.log("first");
  try {
    console.log("Accessed:", req.body);

    // Generate link to image file
    const imageLink = req.file ? `/images/${req.file.filename}` : null;

    const seller = await Users.findOne({ uid: req.body.uid });
    const sellerId = new ObjectId(seller._id);

    const newProduct = new Products({
      name: req.body.name,
      description: req.body.description,
      src: imageLink,
      startingBid: req.body.startingBidPrice,
      currentBid: req.body.startingBidPrice,
      seller: sellerId,
      endTime: req.body.endTime,
      status: "Active",
    });
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// handling search requests
app.get("/dealsteal/products/search", async (req, res) => {
  try {
    const searchQuery = req.query.query;
    const products = await Products.find({
      name: { $regex: searchQuery, $options: "i" },
    }).limit(15);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// signup new users
app.post("/dealsteal/signup", async (req, res) => {
  console.log("accessed some signup");
  const { uid, email, password, name, address, mobile } = req.body;
  try {
    console.log("accessed signup", req.body);
    const newUser = new Users({ uid, email, name, address, mobile });
    await newUser.save();
    res.json({ message: "User added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/dealsteal/mybid/:id", async (req, res) => {
  const uid = req.params.id;
  console.log(`accessed product/${uid}`);
  try {
    const user = await Users.findOne({ uid: uid });
    // const userId = new ObjectId(user._id);
    console.log("user", user);
    if (user) {
      const bidItems = user.bid.map((bid) => bid.item);
      const products = await Products.find({ _id: { $in: bidItems } });
      // console.log("products",products)
      // const amount = products.bids.find((e) => bidder==userId);
      // products["amount"] = amount;
      res.json(products);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Listen for incoming socket connections
io.on("connection", (socket) => {
  console.log("on connection");

  socket.on("newBid", async (bidData) => {
    const bid = bidData.newBid;
    const bidId = bidData.itemId;
    const uid = bidData.uid;
    console.log("bid:", bid, "bidId:", bidId, "uid:", uid);

    // Listen for new bid from clients
    const product = await Products.findById(bidId);
    const productId = new ObjectId(product._id);
    const bidder = await Users.find({ uid: uid });
    const bidderId = new ObjectId(bidder[0]._id);

    let currentBid = product.currentBid;
    if (bid > currentBid) {
      currentBid = bid;
      product.currentBid = currentBid;
      product.bids.push({ bidder: bidderId, bidAmount: currentBid });
      await product.save();

      bidder[0].bid.push({ item: productId, amount: currentBid });

      await bidder[0].save();
      console.log(`new bid set to ${currentBid}`);
      io.emit("currentBid", { newBid: currentBid, itemId: bidId });
    }
  });
});
