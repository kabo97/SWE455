const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3003;

app.use(cors());

app.get('/greet', (req, res) => {
  res.json({
    message: 'Hello from Server 3!',
    server: 'server3',
    timestamp: new Date().toISOString(),
    emoji: '⚡'
  });
});

app.listen(PORT, () => console.log(`Server 3 running on port ${PORT}`));
