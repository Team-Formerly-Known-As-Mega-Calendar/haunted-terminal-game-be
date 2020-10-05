const request = require('supertest');
const app = require('../lib/app');
const Stage = require('../lib/models/stage');
require('../data/data-helpers');


describe('stage routes', () => {
  it('creates a new stage via POST and returns stage', async() => {
    return request(app)
      .post('/api/v1/stage')
      .send({
        stageId: '1-origin',
        name: 'D.O.M.',
        message: 'This is 1-origin node',
        choices: JSON.stringify([{ prompt: 'choice 1', next: '1-A1' }, { prompt: 'choice 2', next: '1-A2' }]),
        img: 'placekitten.com/200/200',
        sound: 'https://www.audioblocks.com/stock-audio/crescendo-reverse-piano-low-be3xmjh2uwrk0wxu6ku.html',
      })

      .then (res => {
        expect(res.body).toEqual({
          stageId: '1-origin',
          name: 'D.O.M.',
          message: 'This is 1-origin node',
          choices: [{ prompt: 'choice 1', next: '1-A1' }, { prompt: 'choice 2', next: '1-A2' }],
          img: 'placekitten.com/200/200',
          sound: 'https://www.audioblocks.com/stock-audio/crescendo-reverse-piano-low-be3xmjh2uwrk0wxu6ku.html',
        });
      });
  });

  it('gets a stage by its stageId via GET', async() => {
    const stage = await Stage.insert({
      stageId: '1-origin',
      name: 'D.O.M.',
      message: 'This is 1-origin node',
      choices: JSON.stringify([{ prompt: 'choice 1', next: '1-A1' }, { prompt: 'choice 2', next: '1-A2' }]),
      img: 'placekitten.com/200/200',
      sound: 'https://www.audioblocks.com/stock-audio/crescendo-reverse-piano-low-be3xmjh2uwrk0wxu6ku.html',
    });
    return request(app).get(`/api/v1/stage/${stage.stageId}`)
      .then(res => {
        expect(res.body).toEqual({
          stageId: '1-origin',
          name: 'D.O.M.',
          message: 'This is 1-origin node',
          choices: [{ prompt: 'choice 1', next: '1-A1' }, { prompt: 'choice 2', next: '1-A2' }],
          img: 'placekitten.com/200/200',
          sound: 'https://www.audioblocks.com/stock-audio/crescendo-reverse-piano-low-be3xmjh2uwrk0wxu6ku.html',
        });
      });
  });
});
