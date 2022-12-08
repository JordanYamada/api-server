const express = require('express');
const { Cat } = require('../models');
const router = express.Router();

router.get('/cat', readCats);
router.get('/cat/:id', readOneCats);
router.post('/cat', createCat);
router.put('/cat/:id', updateCat);
router.delete('/cat/:id', deleteCat);

async function readCats(req, res, next) {
  try {
    let response = await Cat.read();
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
}

async function readOneCats(req, res, next) {
  try {
    let id = req.params.id;
    let response = await Cat.read(id);
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
}

async function createCat(req, res, next) {
  try {
    let newCat = req.body;
    let response = await Cat.create(newCat);
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
}

async function updateCat(req, res, next) {
  try {
    let id = req.params.id;
    let newCat = req.body;
    let response = await Cat.update(id, newCat);
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
}

async function deleteCat(req, res, next) {
  try {
    let id = req.params.id;
    let response = await Cat.delete(id);
    res.sendStatus(200).send(response);
  } catch (err) {
    next(err);
  }
}

module.exports = router;