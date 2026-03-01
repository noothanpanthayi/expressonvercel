const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});

// Add your API routes here
app.get('/api/test', (req, res) => {
  res.json({ success: true });
});

module.exports = serverless(app);