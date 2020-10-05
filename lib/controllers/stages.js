const { Router } = require('express');
const Story = require('../models/stage');

module.exports = Router()
  .post('/', (req, res, next) => {
    Story
      .insert(req.body)
      .then(story => {
        res.send(story);
      })
      .catch(next);
  })

  .get('/:storyId', (req, res, next) => {
    Story
      .findById(req.params.storyId)
      .then(story => {
        res.send(story);
      })
      .catch(next);
  });
