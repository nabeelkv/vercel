import express from 'express';
import cors from 'cors';
import { getYtController } from './controllers/ytController.js';

const app = express();

app.use(express.json({ limit: "30mb", extended: true })); //to receive request
app.use(express.urlencoded({ limit: "30mb", extended: true })); //to send request
app.use(cors());

app.use('/youtube', getYtController); //added prefix for all postRoutes for getting posts as json

app.get('/', (req, res) => {
   res.send('APP IS RUNNING!');
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));