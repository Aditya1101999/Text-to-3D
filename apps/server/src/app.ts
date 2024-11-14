import express from 'express';
import cors from 'cors';
import generate3dRouter from './routes/generate3dRoute';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1', generate3dRouter);

export default app;
