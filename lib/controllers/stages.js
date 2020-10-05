const { Router } = require('express');
const Stage = require('../models/stage');

// eslint-disable-next-line new-cap
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
  })

  .put('/:stageId', (req, res, next) => {
    Stage
      .update(req.params.stageId, req.body)
      .then(stage => {
        res.send(stage);
      })
      .catch(next);
  })
  
  .delete('/:stageId', (req, res, next) => {
    Stage
      .delete(req.params.stageId)
      .then(stage => {
        res.send(stage);
      })
      .catch(next);
  });
