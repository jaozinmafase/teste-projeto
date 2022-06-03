se bancopsicoDB;

insert into  tb_prontuario_paciente(

id_funcionario,
nm_paciente,                dt_nascimento,
ds_cep,                        ds_endereco,
ds_telefone,                dt_consulta,
ds_queixa_principal,        ds_outras_queixas,
ds_anamnese,                ds_hipotese,
bt_tem_trat_ant,            bt_usa_medic,
bt_trat_ant,                ds_medic_utili,
ds_diagnostico,                ds_metas_alcancadas,
ds_sessoes_realizadas,        ds_proximas_sessoes
)

value (
1, 
'João Victor',                                     '2005-12-10', 
500898658,                                         'Av.Miguel yunes', 
961770510,                                         '2022-07-20', 
'Ele é muito chato',                             'Ele é realmente MUITO chato', 
'Não faço a minima ideia do que é isso',         'Hipotese dele ser muito irritante', 
0,                                                 0,
'nenhum',                                         'nada',
'Ele é chato por natureza',                        'nenhuma, ele é um caso perdido', 
'todas',                                         'mais nenhuma por favor'
);


insert into tb_funcionario (
id_funcionario,             nm_funcionario,
ds_CPF,                     nm_login,
ds_senha
)

value(
'Marquinhos',
839749432,                   'Marqn',
'mar0202'
);
