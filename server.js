const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const PORT = 5000;
const app = express();
app.use(cors())
app.use(express.json());

// Connect to MongoDB
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

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
