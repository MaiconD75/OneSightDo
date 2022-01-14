import 'reflect-metadata';
import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './app/routes';
import AppError from './app/error/AppError';
import './database';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    next(err);

    // eslint-disable-next-line no-console
    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  },
);

export default app;
