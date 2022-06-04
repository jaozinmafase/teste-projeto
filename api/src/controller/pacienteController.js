import { adicionarPaciente } from "../reposiory/pacienteRepository.js";
import { Router } from "express";
const server = Router();


server.post('/protuario/paciente', async (req, resp) => {
    try{    
        const pacienteParaInserir = req.body;
        
        if(!pacienteParaInserir.nome)
            throw new Error('Nome obrigatorio')
        if(!pacienteParaInserir.datanascimento)
            throw new Error('data de nascimento obrigatorio')
        if(!pacienteParaInserir.cep)
            throw new Error('cep obrigatorio')
        if(!pacienteParaInserir.endereco)
            throw new Error('endereco obrigatorio')
        if(!pacienteParaInserir.telefone)
            throw new Error('telefone obrigatorio')
        if(!pacienteParaInserir.consulta)
            throw new Error('consulta obrigatorio')
        if(!pacienteParaInserir.queixaprincipal)
            throw new Error('queixa principal obrigatorio')
        if(!pacienteParaInserir.outrasqueixas)
            throw new Error('outras queixas obrigatorio')
        if(!pacienteParaInserir.anamnese)
            throw new Error('anamnese obrigatorio')
        if(!pacienteParaInserir.hipotese)
            throw new Error('hipotese obrigatorio')
        if(pacienteParaInserir.temtratant == undefined || pacienteParaInserir.temtratant < 0)
            throw new Error('tem tratamentos anteriores obrigatorio')
        if(pacienteParaInserir.usamedicamentos == undefined || pacienteParaInserir.usamedicamentos < 0)
            throw new Error('medicamentos utilizados obrigatorio')
        if(!pacienteParaInserir.diagnostico)
            throw new Error('diagnostico obrigatorio')
        if(!pacienteParaInserir.metasalcancadas)
            throw new Error('metas alcançadas obrigatorio')
        if(!pacienteParaInserir.sessoesrealizadas)
            throw new Error('sessões realizadas obrigatorio')
        if(!pacienteParaInserir.proximassessoes)
            throw new Error('proximas sessões obrigatorio')
        if(!pacienteParaInserir.funcionario)
            throw new Error('funcionario obrigatorio')

        const pacienteInserido = await adicionarPaciente(pacienteParaInserir)
        resp.send(pacienteInserido)
            }catch(err){
                resp.status(400).send({
                    erro: err.message
                });
            }
})



export default server;
