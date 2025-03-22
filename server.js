const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const Products = require("./Carddata.js");
const ComponentsData = require("./ComponentCardData.js");
const nodemailer = require("nodemailer");


const PORT = 5000;
const app = express();
app.use(cors())
app.use(express.json());




// Connect to MongoDB
// mongod --dbpath C:\data\db <---> command to start mongodb manually

mongoose.connect('mongodb://localhost:27017/PCBUILD')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define the schema for users

const Users = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Create the User model
const User_Collections = mongoose.model("Users", Users);

// Register Route (fixed insertMany)
app.post("/user/Register", async (req, res) => {
  const { name, email, password } = req.body;  // Expect email and password in the request body

  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  const newUser = new User_Collections({ name, email, password });


  try {
    const insertedUser = await newUser.save();
    console.log(insertedUser);  // Log the inserted user for debugging
    res.status(201).send("User Registered Successfully");
  } catch (err) {
    console.error('Error inserting user:', err);
    res.status(500).send('Error registering user');
  }
});

// Login Route
app.post("/user/Login", async (req, res) => {
  const { name, email, password } = req.body;  // Expect email and password in the request body
  console.log(email, password);


  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  try {
    const user = await User_Collections.findOne({ email });
    // console.log(user.password);


    if (!user) {
      return res.status(401).send('Invalid email or password');
    }

    if (user.password !== password.toString()) {
      return res.status(402).send('Invalid  password');
    }

    res.status(200).send("Login Successfull");
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send('Error during login');
  }
});

// Product
const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  img: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  type: { type: String, required: true }
});

// Create models (if they are not already created elsewhere)
const Products_ = mongoose.model("PRODUCTS", productSchema);

app.get("/PostProducts", async (req, res) => {
  try {
    if (!Products || Products.length === 0) {
      return res.status(400).send("No products to insert");
    }
    const result = await Products_.insertMany(Products, { ordered: false });
    res.status(201).json({ message: "Products posted successfully", inserted: result.length });
  } catch (error) {
    console.error("Error posting products:", error);
    res.status(500).json({ message: "Error posting products", error: error.message });
  }
});

// Define the schema for components
const componentSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  img: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  type: { type: String, required: true }
});

// Create the model for components
const Components_ = mongoose.model("COMPONENTS", componentSchema);

// Route to post components data into MongoDB
app.get("/PostComponents", async (req, res) => {
  try {
    if (!ComponentsData || ComponentsData.length === 0) {
      return res.status(400).send("No components to insert");
    }
    const result = await Components_.insertMany(ComponentsData, { ordered: false });
    res.status(201).json({ 
      message: "Components posted successfully", 
      inserted: result.length 
    });
  } catch (error) {
    console.error("Error posting components:", error);
    res.status(500).json({ 
      message: "Error posting components", 
      error: error.message 
    });
  }
});

// Get all components from the database
app.get("/api/components", async (req, res) => {
  try {
    const components = await Components_.find({});
    res.json(components);
  } catch (error) {
    console.error("Error fetching components:", error);
    res.status(500).json({ message: "Server error" });
  }
});





app.get("/api/products", async (req, res) => {
  try {
    // Use Mongoose models to query the data
    const Product_Collection = await Products_.find({});

    res.json({ Product_Collection });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Server error" });
  }
});
const OrderHistorySchema = new mongoose.Schema({
  user: String,
  OrderItems: [
    {
      id: Number,
      img: String,
      title: String,
      description: String,
      price: String,
    },
  ],
});

// Create the Orders model
const Orders = mongoose.model("OrderHistory", OrderHistorySchema);

// Order Place Route
app.post("/OrderPlace", async (req, res) => {
  const { email, NewOrders } = req.body;
  console.log("NewOrders:", NewOrders);

  try {
    // Assign NewOrders directly to OrderItems
    const newOrder = await Orders.create({ user: email, OrderItems: NewOrders });
    console.log("New order created:", newOrder);
    res.json(newOrder);
  } catch (err) {
    console.error("Error placing order:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get Order History Route
app.get("/OrderHistory", async (req, res) => {
  const { email } = req.query;
  try {
    // Find all orders for the given email
    const orders = await Orders.find({ user: email });
    res.json(orders);
  } catch (err) {
    console.error("Error fetching order history:", err);
    res.status(500).json({ message: "Server error" });
  }
});


app.post("/user/ShippingDetails", async (req, res) => {
  // Expecting name, address, email, etc. in the request body
  const { name, address, email } = req.body;
  const adminEmail = "nmohammedfazil790@gmail.com"; // Set your admin email here

  // Create a Nodemailer transporter using Gmail
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nmohamedfazil790@gmail.com",
      pass: "gccc qdge cgzv njuj"
    }
  });

  // Email to the user (confirmation)
  const userMailOptions = {
    from: '"PC Build Store" <no-reply@pcbuildstore.com>',
    to: email,
    subject: "Order Confirmed",
    text: `Hi ${name},

Your order has been confirmed.
Shipping Address: ${address}

Thank you for shopping with us!

Best regards,
PC Build Store`
  };

  // Email to the admin (notification)
  const adminMailOptions = {
    from: 'nmohamedfazil790@gmail.com',
    to: adminEmail,
    subject: "New Shipping Details Received",
    text: `New shipping details received:

Name: ${name}
Email: ${email}
Address: ${address}

Please process this order accordingly.`
  };

  try {
    // Send confirmation email to user
    await transporter.sendMail(userMailOptions);
    // Send notification email to admin
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ message: "Shipping details submitted and emails sent." });
  } catch (err) {
    console.error("Error sending emails:", err);
    res.status(500).json({ message: "Error sending shipping details." });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
