const express = require('express');
const app = express();

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});

// Test API route
app.get('/api/test', (req, res) => {
  res.json({ data: [
  { 
    'id':'1001',
    'make':'Toyota'

  }
   

  ] });
});

// JUST EXPORT THE APP - No serverless() wrapper needed
module.exports = app;