const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const Data = require("./Carddata.js")

const PORT = 5000;
const app = express();
app.use(cors())
app.use(express.json());

// Connect to MongoDB
// mongod --dbpath C:\data\db <---> command to start mongodb manually

mongoose.connect('mongodb://localhost:27017/Pharmacy')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define the schema for users
const Users = new mongoose.Schema({
  email: String,
  password: String
});

// Create the User model
const User_Collections = mongoose.model("Users", Users);

// Register Route (fixed insertMany)
app.post("/Register", async (req, res) => {
  const { email, password } = req.body;  // Expect email and password in the request body

  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  const newUser = new User_Collections({ email, password });


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
app.post("/Login", async (req, res) => {
  const { email, password } = req.body;  // Expect email and password in the request body
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


const HealthCare = new mongoose.Schema({
  id: Number,
  img: String,
  title: String,
  description: String,
  price: String,
});

const PersonalCare = new mongoose.Schema({
  id: Number,
  img: String,
  title: String,
  description: String,
  price: String,
});

const MedicalDevices = new mongoose.Schema({
  id: Number,
  img: String,
  title: String,
  description: String,
  price: String,
});
const BabyCare = new mongoose.Schema({
  id: Number,
  img: String,
  title: String,
  description: String,
  price: String,
});
// Create models (if they are not already created elsewhere)
const Healthcare = mongoose.model("HealthCare", HealthCare);
const Personalcare = mongoose.model("PersonalCare", PersonalCare);
const Medicaldevices = mongoose.model("MedicalDevices", MedicalDevices);
const Babycare = mongoose.model("BabyCare", BabyCare);


app.get("/PostProducts", async (req, res) => {
  try {
    await Babycare.insertMany(Data.babycareItems);

    await Personalcare.insertMany(Data.personalcareItems);

    await Healthcare.insertMany(Data.healthcareItems);

    await Medicaldevices.insertMany(Data.medicalDevicesItems);

    res.status(201).send("Products posted successfully.");
  } catch (error) {
    console.error("Error posting products:", error);
    res.status(500).send("Error posting products");
  }
});



app.get("/api/products", async (req, res) => {
  try {
    // Use Mongoose models to query the data
    const healthcare = await Healthcare.find({});
    const personalcare = await Personalcare.find({});
    const medicaldevices = await Medicaldevices.find({});
    const babycare = await Babycare.find({})

    res.json({ healthcare, personalcare, medicaldevices, babycare });
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
