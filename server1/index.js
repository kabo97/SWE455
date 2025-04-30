// server1/index.js
const express = require('express');
const app = express();
const PORT = 3001;

app.get('/greet', (req, res) => {
  res.json({ message: 'Hello from Server 1' });
});

app.listen(PORT, () => console.log(`Server 1 running on port ${PORT}`));




