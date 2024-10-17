  import express from "express";
  import * as dotenv from "dotenv";
  import cors from "cors";
  import mongoose from "mongoose";
  import UserRoutes from "./routes/User.js";
  import Razorpay from "razorpay";
  import crypto from "crypto";

  dotenv.config();

  const app = express();

  app.use(cors({ origin: 'http://localhost:3000' }));

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true })); // for form data

  app.use("/api/user/", UserRoutes);
  // error handler
  app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  });

  app.get("/", async (req, res) => {
    res.status(200).json({
      message: "Hello developers",
    });
  });

  const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => console.log("Connected to Mongo DB"))
      .catch((err) => {
        console.error("failed to connect with mongo");
        console.error(err);
      });
  };

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID, // Your Razorpay Key ID
    key_secret: process.env.RAZORPAY_KEY_SECRET, // Your Razorpay Key Secret
  });
  app.post('/api/payment/create-order', async (req, res) => {
    const { plan } = req.body;
  
    // Define amount based on the selected plan
    let amount;
    switch (plan) {
      case 'Basic':
        amount = 1700; // $20 for Basic plan
        break;
      case 'Premium':
        amount = 4200; // $50 for Premium plan
        break;
      case 'Platinum':
        amount = 8400; // $100 INR for Platinum plan
        break;
      default:
        return res.status(400).json({ error: 'Invalid plan selected' });
    }
  
    try {
      const options = {
        amount: amount * 100, // Amount in paisa (1 INR = 100 paisa)
        currency: 'INR',
        receipt: `receipt_${plan}_${Date.now()}`,
        payment_capture: 1, // Automatically capture the payment
      };
  
      // Razorpay order creation
      const order = await razorpay.orders.create(options);
      console.log("Razorpay Order:", order);  // Log the order
      res.json(order);
    } catch (error) {
      console.error('Error creating order:', error.message); // Log detailed error message
      res.status(500).json({ error: 'Error creating order' });
    }
  });
   
  // Razorpay Verify Payment Route
  app.post('/api/payment/verify-payment', (req, res) => {
    const { payment_id, order_id, signature } = req.body;
  
    // Generate a signature to compare with the one sent by Razorpay
    const generated_signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(order_id + "|" + payment_id)
      .digest('hex');
  
    if (generated_signature === signature) {
      // Payment is verified
      res.json({ success: true, message: "Payment verified successfully" });
    } else {
      // Payment verification failed
      res.status(400).json({ success: false, message: "Invalid signature" });
    }
  });

  const startServer = async () => {
    try {
      connectDB();
      app.listen(8080, () => console.log("Server started on port 8080"));
    } catch (error) {
      console.log(error);
    }
  };

  startServer();
