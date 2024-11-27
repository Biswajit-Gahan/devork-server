import "dotenv/config";
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({
    origin: process.env.DEFAULT_ORIGIN,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

export default app;