import { con } from "./connection.js";

export async function adicionarPaciente(paciente){
    const comando = 
    ` 
    insert into  tb_prontuario_paciente(

        id_funcionario,
        nm_paciente,                dt_nascimento,
        ds_cep,                        ds_endereco,
        ds_telefone,                dt_consulta,
        ds_queixa_principal,        ds_outras_queixas,
        ds_anamnese,                ds_hipotese,
        bt_tem_trat_ant,            bt_usa_medic,
        ds_trat_ant,                ds_medic_utili,
        ds_diagnostico,                ds_metas_alcancadas,
        ds_sessoes_realizadas,        ds_proximas_sessoes
        )
        
        value (
            ?,?,?, ?,?,?,?,? , ? ,?, ?,? ,?,?,?,?,?,? , ?) 
    `
    const [resposta] = await con.query(comando, [paciente.funcionario, paciente.nome, paciente.datanascimento, paciente.cep, paciente.endereco, paciente.telefone, paciente.consulta, 
    paciente.queixaprincipal, paciente.outrasqueixas, paciente.anamnese, paciente.hipotese,paciente.temtratant,paciente.usamedicamentos, paciente.trat_ant,paciente.medicamentos,
    paciente.diagnostico, paciente.metasalcancadas,paciente.sessoesrealizadas, paciente.proximassessoes ])
    paciente.id = resposta.insertId
    return paciente;

}