
import { Router } from "express";
const server = Router();

import { loginusuario } from '../reposiory/usuarioRepository.js'

server.post('/usuario/login', async (req, resp) =>{
    try{
        const {email, senha} = req.body;
        const resposta = await loginusuario(email, senha)
        if(!resposta){
            throw new Error('CREDENCIAIS INVALIDADAS')
        }
        resp.send(resposta)

    } catch(err){
         resp.status(401).send({
             erro:err.message
         });
    }
});

export default server;