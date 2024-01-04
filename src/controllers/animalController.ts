import Animal from '../models/animals';

const animals: Animal[] = [];

const getAllAnimals = (): Animal[] => {
  return animals;
};

const getAnimalById = (id: string): Animal | undefined => {
  return animals.find((animal) => animal.id === id);
};

const createAnimal = (name: string, species: string): Animal => {
  const id = (animals.length + 1).toString();
  const newAnimal: Animal = { id, name, species };
  animals.push(newAnimal);
  return newAnimal;
};

const updateAnimal = (id: string, name: string, species: string): Animal | null => {
  const animal = getAnimalById(id);
  if (animal) {
    animal.name = name;
    animal.species = species;
    return animal;
  }
  return null;
};

const deleteAnimal = (id: string): boolean => {
  const index = animals.findIndex((animal) => animal.id === id);
  if (index !== -1) {
    animals.splice(index, 1);
    return true;
  }
  return false;
};

export {
  getAllAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal,
};
