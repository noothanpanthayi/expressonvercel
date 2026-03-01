// api/index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});

module.exports = serverless(app); // Export the app instance
