require('dotenv').config();
const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');

const app = express();

// Razorpay credentials
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

app.use(cors());
app.use(express.json());

// Create Order Endpoint
app.post('/create-order', (req, res) => {
    const amount = 19900;  // Amount in paise
    const currency = 'INR'; // Currency (INR)
    const receipt = `order_${Date.now()}`;  // Unique receipt ID
    const notes = {
        customer_name: req.body.name || "Unknown",
        customer_email: req.body.email || "Unknown",
        customer_phone: req.body.phone || "Unknown"
    };

    const options = {
        amount: amount,  // Razorpay expects amount in paise
        currency: currency,
        receipt: receipt,
        notes: notes,
        partial_payment: false  // Disable partial payment
    };

    razorpay.orders.create(options)
        .then(order => {
            res.json(order);  // Send Razorpay order object as response
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});