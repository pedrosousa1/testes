// src/api.ts
import express from 'express';
import { app } from './api';

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
