import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({
    name: 'Game Hunt Québec Backend',
    status: 'running',
  });
});

app.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'game-hunt-quebec-backend',
    timestamp: new Date().toISOString(),
  });
});

export default app;
