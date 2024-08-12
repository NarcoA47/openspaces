import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes.js';
import path from 'path';
import listingRouter from './routes/listingRoute.js';
import filtersRouter from './routes/filtersRoute.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to DB');
}).catch((err) => {
  console.log(err.message);
});

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' })); // Use express.json() instead of bodyParser.json()
app.use(express.urlencoded({ limit: '50mb', extended: true })); // Use express.urlencoded() with extended option
app.use(morgan('dev'));

app.use('/api/listings/', listingRouter);
app.use('/api/filters/', filtersRouter);
app.use('/api/user/', userRouter);

if (process.env.NODE_ENV === 'development') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
