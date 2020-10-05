const { Router } = require('express');
const Story = require('../models/stage');

module.exports = Router()
  .post('/stories', (req, res, next) => {
    Story
      .insert(req.body)
      .then(story => {
        res.send(story);
      })
      .catch(next);
  });
