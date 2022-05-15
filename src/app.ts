import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import listUsersController from './controllers/listUsersController';

export const app = express();

app.use(express.json());

app.get('/api', listUsersController.handle);
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(error)
  res.status(500).send({ erro: error.message })
})
