import express, { Request, Response } from 'express';
import * as animalController from '../controllers/animalController';

const router = express.Router();

router.get('/animals', (req: Request, res: Response) => {
  const allAnimals = animalController.getAllAnimals();
  res.json(allAnimals);
});

router.get('/animals/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const animal = animalController.getAnimalById(id.toString());
  if (animal) {
    res.json(animal);
  } else {
    res.status(404).json({ error: 'Animal not found' });
  }
});

router.post('/animals', (req: Request, res: Response) => {
  const { name, species } = req.body;
  const newAnimal = animalController.createAnimal(name, species);
  res.status(201).json(newAnimal);
});

router.put('/animals/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, species } = req.body;
  const updatedAnimal = animalController.updateAnimal(id.toString(), name, species);
  if (updatedAnimal) {
    res.json(updatedAnimal);
  } else {
    res.status(404).json({ error: 'Animal not found' });
  }
});

router.delete('/animals/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const success = animalController.deleteAnimal(id.toString());
  if (success) {
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Animal not found' });
  }
});

export default router;
