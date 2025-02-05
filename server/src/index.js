import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/users.js';
import { recipesRouter } from './routes/recipes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', userRouter);
app.use('/recipes', recipesRouter);

mongoose.connect(
  "mongodb+srv://Sitong:yyyy@recipe-database.gikz3he.mongodb.net/?retryWrites=true&w=majority&appName=Recipe-database",
);

app.listen(3000, () => console.log('SERVER RUNNING!'));
