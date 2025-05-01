const request = require('supertest');
const app = require('../index');
const axios = require('axios');

// ✅ Mock axios
jest.mock('axios');

test('GET /greet should return combined message and server details', async () => {
  // Setup mocked responses for all three servers
  axios.get.mockImplementation((url) => {
    if (url.includes('server1')) {
      return Promise.resolve({
        data: {
          message: 'Hello from Server 1!',
          server: 'server1',
          timestamp: new Date().toISOString(),
          emoji: '🚀',
        },
      });
    }
    if (url.includes('server2')) {
      return Promise.resolve({
        data: {
          message: 'Hello from Server 2!',
          server: 'server2',
          timestamp: new Date().toISOString(),
          emoji: '🎯',
        },
      });
    }
    if (url.includes('server3')) {
      return Promise.resolve({
        data: {
          message: 'Hello from Server 3!',
          server: 'server3',
          timestamp: new Date().toISOString(),
          emoji: '⚡',
        },
      });
    }
  });

  // Make the request to /greet
  const res = await request(app).get('/greet');

  // ✅ Assertions
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toMatch(/Hello from Server 1!/);
  expect(res.body.message).toMatch(/Hello from Server 2!/);
  expect(res.body.message).toMatch(/Hello from Server 3!/);
  expect(Array.isArray(res.body.servers)).toBe(true);
  expect(res.body.servers.length).toBe(3);
  expect(res.body).toHaveProperty('aggregatedAt');
});
