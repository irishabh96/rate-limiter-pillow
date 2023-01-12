import express from 'express';
import dotenv from 'dotenv';

import { userRoute } from './routes/user.route';
import { rateLimiterMiddleware } from './middleware/rateLimiter.middleware';

dotenv.config();

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '4000');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(rateLimiterMiddleware);

app.use('/users', userRoute());

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});

app.listen(PORT, async () => {
  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});
