const request = require('supertest');
const app = require('../lib/app');

describe('auth routes', () => {
  it('signs up a new user via POST and returns user', async() => {
    const response = await request(app)
      .post('/api/v1/auth/signup')
      .send({
        email: 'test@test.com',
        password: 'password',
        name: 'Bonzi'
      });

    expect(response.body).toEqual({
      id: expect.any(String),
      email: 'test@test.com',
      name: 'Bonzi'
    });
  });
});
