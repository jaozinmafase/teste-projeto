use bancopsicoDB;

-- carga inicial usuario admin
INSERT INTO tb_funcionario (nm_funcionario, nm_login, ds_senha)
     VALUES ('admin', 'admin@admin.com.br', '1234');

-- CSU01:: efetuar login
select
id_funcionario        id,             
nm_funcionario        nome,
ds_CPF                cpf,                                  
nm_login              logim,
ds_senha              senha
from tb_funcionario 
where ds_login 		= 'admin@admin.com.br'
and ds_senha		= '1234';;

value('Marquinhos', 839749432,'Marqn','mar0202');

-- CSU02:: registrar um novo paciente
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
1,'João Victor','2005-12-10', 500898658,'Av.Miguel yunes',961770510,'2022-07-20', 'Ele é muito chato','Ele é realmente MUITO chato', 'Não faço a minima ideia do que é isso', 
'Hipotese dele ser muito irritante', 0, 0,'nenhum','nada','Ele é chato por natureza','nenhuma, ele é um caso perdido', 'todas', 'mais nenhuma por favor');

-- CSU03:: remover paciente
DELETE FROM tb_prontuario_paciente 
       WHERE id_prontuario = 1;

-- CSU04:: alteraro registro de um paciente

UPDATE tb_prontuario_paciente 
   SET nm_paciente      = 'Matheus',     
dt_nascimento = '2006-05-20',
ds_cep = '421412342',                        ds_endereco = 'av.dr.luiz',
ds_telefone = '1197220',                     dt_consulta = '2022-06-03',
ds_queixa_principal = 'não da tempo',        ds_outras_queixas = 'não tem',
ds_anamnese = 'não da tempo',                ds_hipotese = ' complicado',
bt_tem_trat_ant = false,                     bt_usa_medic = false,
ds_trat_ant = false,                         ds_medic_utili = '',
ds_diagnostico = ' Muito trabalhador',       ds_metas_alcancadas = 'até o marco 6',
ds_sessoes_realizadas = '2022-05-27',        ds_proximas_sessoes = '2022-06-10'
 WHERE id_prontuario = 1;

-- CSU05:: pesquisar por um paciente

SELECT id_prontuario	        id,
	  nm_paciente			    nome,
       ds_telefone		        telefone,
       ds_queixa_principal	    queixa,
       ds_diagnostico	        ds_diagnostico
       ds_proximas_sessoes      proximas sessões
  FROM tb_prontuario_paciente
 WHERE nm_paciente			like '%a%';