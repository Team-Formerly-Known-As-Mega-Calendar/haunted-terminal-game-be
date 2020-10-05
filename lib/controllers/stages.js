const { Router } = require('express');
const Stage = require('../models/stage');

module.exports = Router()
  .post('/', (req, res, next) => {
    Stage
      .insert(req.body)
      .then(stage => {
        res.send(stage);
      })
      .catch(next);
  })

  .get('/:stageId', (req, res, next) => {
    Stage
      .findById(req.params.stageId)
      .then(stage => {
        res.send(stage);
      })
      .catch(next);
  });
