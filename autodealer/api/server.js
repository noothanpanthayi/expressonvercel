const express = require('express');
// const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
}
);