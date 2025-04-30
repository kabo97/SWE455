// server2/index.js
const express = require('express');
const app = express();
const PORT = 3002;

app.get('/greet', (req, res) => {
  res.json({ message: 'Hello from Server 2' });
});

app.listen(PORT, () => console.log(`Server 2 running on port ${PORT}`));
