const request = require('supertest');
const app = require('../lib/app');
const UserService = require('../lib/services/user-service');
require('../data/data-helpers');

describe('story routes', () => {
  it('creates a new story via POST and returns story', async() => {
  return request(app)
  .post('/api/v1/stories')
  .send({
    storyId: '1-origin',
    name: 'D.O.M.',
    message: 'This is 1-origin node',
    choices: JSON.stringify(['choice 1', 'choice 2']),
    img: 'placekitten.com/200/200',
    sound: 'https://www.audioblocks.com/stock-audio/crescendo-reverse-piano-low-be3xmjh2uwrk0wxu6ku.html',
  })

  .then (res => {
    expect(res.body).toEqual({
      storyId: '1-origin',
      name: 'D.O.M.',
      message: 'This is 1-origin node',
      choices: ['choice 1', 'choice 2'],
      img: 'placekitten.com/200/200',
      sound: 'https://www.audioblocks.com/stock-audio/crescendo-reverse-piano-low-be3xmjh2uwrk0wxu6ku.html',
    })
  })
});
});
