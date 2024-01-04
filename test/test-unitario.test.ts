import { it, expect } from 'vitest';
import {
  getAllAnimals,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} from '../src/controllers/animalController';

it('getAllAnimals should return an empty array initially', () => {
  const animals = getAllAnimals();
  expect(animals).toEqual([]);
});

it('createAnimal should add a new animal to the list', () => {
  const animal = createAnimal('Leão', 'Mamífero');
  const animals = getAllAnimals();
  expect(animals).toEqual([animal]);
});

it('updateAnimal should modify the details of an existing animal', () => {
  const animal = createAnimal('Tigre', 'Mamífero');
  const updatedAnimal = updateAnimal(animal.id, 'gato', 'Mamífero');
  expect(updatedAnimal).toEqual({
    id: animal.id,
    name: 'gato',
    species: 'Mamífero',
  });
});

it('deleteAnimal should remove an existing animal from the list', () => {
  const animal = createAnimal('elefante', 'Mamífero');
  
  // Antes da exclusão
  console.log('Antes da exclusão:', getAllAnimals());

  const success = deleteAnimal(animal.id);

  // Após a exclusão
  console.log('Após a exclusão:', getAllAnimals());

  expect(success).toBe(true);
  const animals = getAllAnimals();
  expect(animals).toEqual(animals);
});

