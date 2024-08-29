import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('DB connected');
  app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
  });
});
