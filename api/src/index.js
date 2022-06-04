import 'dotenv/config'
import usuarioController from './controller/usuarioController.js'
import pacienteController from './controller/pacienteController.js'
import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json())

//configuração dos endpoints
server.use(usuarioController)
server.use(pacienteController)


server.listen(process.env.PORT, () => console.log(`API ONLINE NA ${process.env.PORT}`));