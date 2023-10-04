import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import usuariocontroller from './controller/usuariocontroller.js'




const server = express();
server.use(cors());
server.use(express.json());

server.use(usuariocontroller);



server.listen(process.env.PORT, () => console.log(` api foi conectada na porta ${process.env.PORT}`));