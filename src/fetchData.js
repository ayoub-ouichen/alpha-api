const axios = require('axios');
const express = require('express');
const router = express.Router();
const connectDatabase = require('./connection')

const API_URL = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=GBP&to_currency=JPY&apikey=4569DW30A4CF3VEE';


router.get('/getio', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const priceData = response.data; // adjust this based on your API response format

    const db = await connectDatabase();
    const collection = db.collection('gbpjpy'); // Collection name
    const result = await collection.insertOne(priceData);
    res.status(200).send(result)
  } catch (err) {
    res.status(400).send(err)
  }
})


module.exports = router;