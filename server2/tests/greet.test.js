const request = require('supertest');
const app = require('../index');

test('GET /greet should return 200 and correct server2 response', async () => {
  const res = await request(app).get('/greet');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toMatch(/Hello from Server 2!/);
  expect(res.body.server).toBe('server2');
  expect(res.body).toHaveProperty('timestamp');
  expect(res.body).toHaveProperty('emoji');
});
