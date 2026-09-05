import 'dotenv/config'
import express from "express";
import userRouters from './routes/userRouters.js';

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use('/users', userRouters);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});