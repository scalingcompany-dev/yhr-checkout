# YHR Checkout Backend Server

A simple Node.js Express server to handle Razorpay checkout order creation. This server exposes an endpoint to generate order IDs, which can be used by your Swipe Pages landing page to initiate a payment checkout.

## Setup & Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables. Create a `.env` file in the root directory:
   ```env
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   PORT=5000
   ```

3. Start the server:
   ```bash
   npm start
   ```

## Endpoints

### POST `/create-order`

Creates a new Razorpay order.

**Request Body:**
```json
{
  "name": "Customer Name",
  "email": "customer@example.com",
  "phone": "9876543210"
}
```

**Response:**
Returns the Razorpay Order object containing the `id`.
