import { adicionarPaciente, alterarPaciente, buscarPacientesNome, listarTodosPacientes, removerPaciente } from "../reposiory/pacienteRepository.js";
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


server.get('/pacientes', async (req, resp) => {
    try{ 
        const resposta = await listarTodosPacientes();
        resp.send(resposta)

    }catch(err){
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.get('/pacientes/buscas', async (req, resp) => {
    try{ 
        const {nome} = req.query;
        const resposta = await buscarPacientesNome(nome);
        if(!resposta)
            resp.status(404).send([])
        resp.send(resposta)

    }catch(err){
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.delete('/paciente/:id', async (req,resp) => {
    try{
    const { id } = req.params;
    const resposta = await removerPaciente(id);
    if(resposta != 1 )
        throw new Error ('paciente não pode ser removido')
    resp.status(204).send();
}catch(err){
    resp.status(400).send({
        erro: err.message
    });
}
})

server.put('/paciente/:id', async (req,resp) => {
try{ 
    const {id} = req.params;
    const paciente = req.body;

    const resposta = await alterarPaciente(id, paciente)

        if(!paciente.nome)
            throw new Error('Nome obrigatorio')
        if(!paciente.datanascimento)
            throw new Error('data de nascimento obrigatorio')
        if(!paciente.cep)
            throw new Error('cep obrigatorio')
        if(!paciente.endereco)
            throw new Error('endereco obrigatorio')
        if(!paciente.telefone)
            throw new Error('telefone obrigatorio')
        if(!paciente.consulta)
            throw new Error('consulta obrigatorio')
        if(!paciente.queixaprincipal)
            throw new Error('queixa principal obrigatorio')
        if(!paciente.outrasqueixas)
            throw new Error('outras queixas obrigatorio')
        if(!paciente.anamnese)
            throw new Error('anamnese obrigatorio')
        if(!paciente.hipotese)
            throw new Error('hipotese obrigatorio')
        if(paciente.temtratant == undefined || paciente.temtratant < 0)
            throw new Error('tem tratamentos anteriores obrigatorio')
        if(paciente.usamedicamentos == undefined || paciente.usamedicamentos < 0)
            throw new Error('medicamentos utilizados obrigatorio')
        if(!paciente.diagnostico)
            throw new Error('diagnostico obrigatorio')
        if(!paciente.metasalcancadas)
            throw new Error('metas alcançadas obrigatorio')
        if(!paciente.sessoesrealizadas)
            throw new Error('sessões realizadas obrigatorio')
        if(!paciente.proximassessoes)
            throw new Error('proximas sessões obrigatorio')
        if(!paciente.funcionario)
            throw new Error('funcionario obrigatorio')

    if(resposta != 1)
        throw new Error (' Paciente não pode ser alterado')
    else
    resp.status(204).send();

}catch(err){
    resp.status(400).send({
        erro: err.message
    });
 }
})

export default server;

