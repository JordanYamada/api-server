'use strict';

const express = require('express');
const { Coffee } = require('../models');
const router = express.Router();

router.get('/coffee', readCoffee);
router.get('/coffee/:id', readOneCoffee);
router.post('/coffee', createCoffee);
router.put('/coffee/:id', updateCoffee);
router.delete('/coffee/:id', deleteCoffee);

async function readCoffee(request, response, next) {
  let coffeeRecords = await Coffee.read();
  response.status(200);
  response.send(coffeeRecords);
}

async function readOneCoffee(request, response, next) {
  let coffeeRecord = await Coffee.read(request.params.id);
  response.status(200);
  response.send(coffeeRecord);
}

async function createCoffee(request, response, next) {
  let coffeeRecord = await Coffee.create(request.body);
  response.status(200);
  response.send(coffeeRecord);
}

async function updateCoffee(req, res, next) {
  try {
    let id = req.params.id;
    let newCar = req.body;
    let response = await Coffee.update(id, newCar);
    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
}

async function deleteCoffee(req, res, next) {
  try {
    let id = req.params.id;
    let response = await Coffee.delete(id);
    res.sendStatus(200).send(response);
  } catch (err) {
    next(err);
  }
}

module.exports = router;