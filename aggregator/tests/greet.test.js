const request = require('supertest');
const app = require('../index');

test('GET /greet should return combined message and server details', async () => {
  const res = await request(app).get('/greet');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toMatch(/Hello from Server 1/);
  expect(res.body.message).toMatch(/Hello from Server 2/);
  expect(res.body.message).toMatch(/Hello from Server 3/);

  expect(Array.isArray(res.body.servers)).toBe(true);
  expect(res.body.servers.length).toBe(3);

  res.body.servers.forEach(server => {
    expect(server).toHaveProperty('server');
    expect(server).toHaveProperty('timestamp');
    expect(server).toHaveProperty('emoji');
  });

  expect(res.body).toHaveProperty('aggregatedAt');
});
