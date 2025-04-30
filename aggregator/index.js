// aggregator/index.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 4000;

app.get('/greet', async (req, res) => {
  try {
    const [s1, s2, s3] = await Promise.all([
      axios.get('http://server1:3001/greet'),
      axios.get('http://server2:3002/greet'),
      axios.get('http://server3:3003/greet')
    ]);
    res.json({ message: `${s1.data.message}, ${s2.data.message}, and ${s3.data.message}` });
  } catch (err) {
    res.status(500).send('Error fetching greetings');
  }
});

app.listen(PORT, () => console.log(`Aggregator running on port ${PORT}`));
