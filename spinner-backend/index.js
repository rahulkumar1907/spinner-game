// server.js

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/spin', (req, res) => {
  const min = 1;
  const max = 10;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  res.json({ result: randomNum });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
