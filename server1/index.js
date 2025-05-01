const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/greet', (req, res) => {
  res.json({
    message: 'Hello from Server 1!',
    server: 'server1',
    timestamp: new Date().toISOString(),
    emoji: '🚀'
  });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server 1 running on port ${PORT}`));
}

module.exports = app;