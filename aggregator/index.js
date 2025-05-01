const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 4000;

app.use(cors());

app.get('/greet', async (req, res) => {
  try {
    const [s1, s2, s3] = await Promise.all([
      axios.get('https://server1-fezp.onrender.com/greet'),
      axios.get('https://server2-nk0y.onrender.com/greet'),
      axios.get('https://server3-a4s6.onrender.com/greet')
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