const supertest = require('supertest');
require('dotenv').config();

const api = supertest('https://reqres.in');

export const create = (body) => api.post('/api/users')
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  .send(body);

export const update = (body, id) => api.put(`/api/users/${id}`)
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  .send(body);

  export const getAll = (queryparam) => api.get('/api/users?')
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  .query(queryparam);

  export const getDetail = (id) => api.get(`/api/users/${id}`)
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')

  export const deleteUser = (id) => api.delete(`/api/users/${id}`)
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')