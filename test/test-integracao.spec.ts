import { it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../src/api';

it('GET /api/animals should return an empty array initially', async () => {
  const response = await request(app).get('/animals');
  expect(response.status).toBe(200);
  expect(response.body).toEqual([]);
});

it('POST /api/animals should add a new animal', async () => {
  const response = await request(app)
    .post('/animals')
    .send({ name: 'Girafa', species: 'Mamífero' });

  expect(response.status).toBe(201);
  expect(response.body).toEqual({ id: "1", name: 'Girafa', species: 'Mamífero' });
});

it('PUT /api/animals/:id should update an existing animal', async () => {
  const createResponse = await request(app)
    .post('/animals')
    .send({ name: 'Elefante', species: 'Mamífero' });

  const updateResponse = await request(app)
    .put(`/animals/${createResponse.body.id}`)
    .send({ name: 'Zebra', species: 'Mamífero' });

  expect(updateResponse.status).toBe(200);
  expect(updateResponse.body).toEqual({
    id: createResponse.body.id,
    name: 'Zebra',
    species: 'Mamífero',
  });
});

it('DELETE /api/animals/:id should remove an existing animal', async () => {
  const createResponse = await request(app)
    .post('/animals')
    .send({ name: 'Elefante', species: 'Mamífero' });

  const deleteResponse = await request(app).delete(`/animals/${createResponse.body.id}`);
  expect(deleteResponse.status).toBe(200);
  expect(deleteResponse.body).toEqual({ success: true });
});
