// server3/index.js
const express = require('express');
const app = express();
const PORT = 3003;

app.get('/greet', (req, res) => {
  res.json({ message: 'Hello from Server 3' });
});

app.listen(PORT, () => console.log(`Server 3 running on port ${PORT}`));
