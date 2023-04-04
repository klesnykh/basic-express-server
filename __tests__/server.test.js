'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing the express server', () => {
  test('Should respond with a 404 on a bad route', async () => {
    const response = await request.get('/message');
    expect(response.status).toEqual(404);
    expect(response.body).toEqual({});
  });
});

describe('Testing the express server', () => {
  test('Should respond with a 404 on a bad method', async () => {
    const response = await request.post('/person');
    expect(response.status).toEqual(404);
    expect(response.body).toEqual({});
  });
});

describe('Testing the express server', () => {
  test('Should respond with a 500 if no name in the query string', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
    expect(response.body).toEqual({});
  });
});

describe('Testing the express server', () => {
  test('Should respond with a 200 name IS in the query string', async () => {
    const response = await request.get('/person?name=Kirk');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({name: 'Kirk'});
  });
});