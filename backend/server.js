// import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import router from './routes/index.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', router);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('DB connected');
  app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
  });
});
