const app = require('./app');
const request = require('supertest');

describe('our app', () => {
  it('should reply ok', () => {
    request(app).expect(200);
  })
})