const request = require('supertest');
const app = require('../lib/app');
const UserService = require('../lib/services/user-service');
require('../data/data-helpers');

describe('auth routes', () => {
  it('signs up a new user via POST and returns user', async () => {
    const response = await request(app)
      .post('/api/v1/auth/signup')
      .send({
        email: 'test@test.com',
        password: 'password'
      });

    expect(response.body).toEqual({
      id: expect.any(String),
      email: 'test@test.com'
    });
  });

  it('logs in a user via POST', async () => {
    const user = await UserService.create({
      email: 'test@test.com',
      password: 'password',
    });

    const response = await request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'test@test.com',
        password: 'password'
      });

    expect(response.body).toEqual({
      id: user.id,
      email: 'test@test.com'
    });
  });
});
