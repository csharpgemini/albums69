import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import albumRoutes from './routes/albums.js';
import imageRoutes from './routes/images.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/albums', albumRoutes);
app.use('/api/images', imageRoutes);

app.get('/', (req, res) => {
  res.send('Photo Album API');
});

export default app;
