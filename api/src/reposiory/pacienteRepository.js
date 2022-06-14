import { con } from "./connection.js";

export async function adicionarPaciente(paciente){
    const comando = 
    ` 

        insert into  tb_prontuario_paciente(
            id_usuario,
            nm_paciente,             	   dt_nascimento,
            ds_cep,                        ds_endereco,
            ds_telefone,                   dt_consulta,
            ds_queixa_principal,   	       ds_outras_queixas,
            ds_anamnese,                   ds_hipotese,
            bt_tem_trat_ant,               bt_usa_medic,
            ds_trat_ant,                   ds_medic_utili,
            ds_diagnostico,                ds_metas_alcancadas,
            ds_sessoes_realizadas,         ds_proximas_sessoes
            
            
        )
        
        value (
            ?, ?, ?, ?, ?, ?, ?, ? ,? ,?, ?, ?, ?, ?, ?, ?, ?, ? ,?) 
    `
    const [resposta] = await con.query(comando, [paciente.id, paciente.nome, paciente.datanascimento, paciente.cep, paciente.endereco, paciente.telefone, paciente.consulta, 
    paciente.queixaprincipal, paciente.outrasqueixas, paciente.anamnese, paciente.hipotese,paciente.temtratant,paciente.usamedicamentos, paciente.trat_ant,paciente.medicamentos,
    paciente.diagnostico, paciente.metasalcancadas,paciente.sessoesrealizadas, paciente.proximassessoes ])
    paciente.id = resposta.insertId
    return paciente;

}

export async function listarTodosPacientes(){
    const comando =
     `
     select id_prontuario	     id,
     nm_paciente			      nome,
     dt_nascimento                nascimento,
     ds_telefone               telefone,
     ds_queixa_principal     queixaprincipal,
     ds_anamnese             anamnese,
     bt_tem_trat_ant        temtratant,
     ds_trat_ant             tramentoanteriores,
     ds_diagnostico          diagnostico,
     ds_sessoes_realizadas    sessoesrealizadas,
	 ds_endereco                 endereço,
	 dt_consulta                consultas,
	 ds_outras_queixas          outrasqueixas,
	 ds_hipotese                 hipotese,
	 bt_usa_medic              usamedicamento,
	 ds_medic_utili            medicamentousados,
	 ds_metas_alcancadas        metasalcancadas,
	 ds_proximas_sessoes       proximasssoes
	 from tb_prontuario_paciente;
    
     `

        const [linhas] = await con.query(comando);
        return linhas
}


export async function buscarPacientesNome(nome){
    const comando =
     `
     select id_prontuario	   id,
     nm_paciente			   nome,
     dt_nascimento               nascimento,
     ds_telefone               telefone,
     ds_queixa_principal     queixaprincipal,
     ds_anamnese             anamnese,
     bt_tem_trat_ant        temtratant,
     ds_trat_ant             tramentoanteriores,
     ds_diagnostico          diagnostico,
     ds_sessoes_realizadas    sessoesrealizadas,
	 ds_endereco                 endereço,
	 dt_consulta                consultas,
	 ds_outras_queixas          outrasqueixas,
	 ds_hipotese                 hipotese,
	 bt_usa_medic              usamedicamento,
	 ds_medic_utili            medicamentousados,
	 ds_metas_alcancadas        metasalcancadas,
	 ds_proximas_sessoes       proximasssoes
	 from tb_prontuario_paciente
 where nm_paciente like ? `

        const [linhas] = await con.query(comando, [ `%${nome}%` ]);
        return linhas;
}

export async function removerPaciente(id){ 
    const comando = 
    
      `DELETE FROM tb_prontuario_paciente 
              WHERE id_prontuario = ?`;

    const [resposta]  = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function alterarPaciente(id,paciente){
    const comando =
    ` UPDATE tb_prontuario_paciente 
SET nm_paciente      = ?,           dt_nascimento = ?,
ds_cep = ?,                         ds_endereco = ?,
ds_telefone = ?,                    dt_consulta = ?,
ds_queixa_principal = ?,            ds_outras_queixas = ?,
ds_anamnese = ?,                    ds_hipotese = ?,
bt_tem_trat_ant = ?,                bt_usa_medic = ?,
ds_trat_ant = ?,                    ds_medic_utili = ?,
ds_diagnostico = ?,                 ds_metas_alcancadas = ?,
ds_sessoes_realizadas = ?,          ds_proximas_sessoes = ?
WHERE id_prontuario = ? `;

    const [resposta]  = await con.query(comando, [ paciente.funcionario, paciente.nome, paciente.datanascimento, paciente.cep, paciente.endereco, paciente.telefone, paciente.consulta, 
        paciente.queixaprincipal, paciente.outrasqueixas, paciente.anamnese, paciente.hipotese,paciente.temtratant,paciente.usamedicamentos, paciente.trat_ant,paciente.medicamentos,
        paciente.diagnostico, paciente.metasalcancadas,paciente.sessoesrealizadas, paciente.proximassessoes, id]);
    return resposta.affectedRows;
}