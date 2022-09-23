'use strict';

const app = require('./../index.js');
const supertest = require('supertest');

const request = supertest(app);

describe('Testing our app', () => {
  test('Should respond with a 200 status code', async () => {
    const response = await request.get('/');

    expect(response.status).toEqual(200);
  });

  test('Should respond with a new coffee POST /message', async () => {
    const response = await request.post('/coffee').send({
      text: 'Hello',
    });

    expect(response.status).toEqual(404);
  });

  test('Should respond with Bad Request when no text present on the request', async () => {
    const response = await request.post('/coffee');

    expect(response.status).toEqual(404);
  });
});