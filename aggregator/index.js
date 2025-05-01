const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 4000;

app.use(cors());

app.get('/greet', async (req, res) => {
  try {
    const [s1, s2, s3] = await Promise.all([
      axios.get('http://server1:3001/greet'),
      axios.get('http://server2:3002/greet'),
      axios.get('http://server3:3003/greet')
    ]);

    // Combine all messages
    const allMessages = [
      s1.data.message,
      s2.data.message,
      s3.data.message
    ].join(', ');

    // Optional: build full response
    res.json({
      message: allMessages,
      servers: [s1.data, s2.data, s3.data],
      aggregatedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error aggregating greetings:', error);
    res.status(500).send('Aggregator failed');
  }
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Aggregator running on port ${PORT}`));
}

module.exports = app;