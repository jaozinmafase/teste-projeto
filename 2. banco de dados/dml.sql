INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha)
     VALUES ('admin', 'admin@admin.com.br', '1234');




-- CSU01:: efetuar login
select id_usuario 		     id,
       nm_usuario		     nome,
       ds_email			email
  from tb_usuario
 where ds_email 		     = 'admin@admin.com.br'
   and ds_senha			= '1234';

   

   create table tb_prontuario_paciente(

id_prontuario                  int primary key auto_increment not null,
id_funcionario                 int not null,
nm_paciente                    varchar(200) not null,
dt_nascimento                  date not null,
ds_cep                         varchar(200) not null,
ds_endereco                    varchar(200) not null,
ds_telefone                    varchar(200) not null,
dt_consulta                    datetime not null,
ds_queixa_principal            varchar(300) not null,
ds_outras_queixas              varchar(500) not null,
ds_anamnese                    varchar(600) not null,
ds_hipotese                    varchar(600) not null,
bt_tem_trat_ant                tinyint not null,
bt_usa_medic                   tinyint not null,
ds_trat_ant                    varchar(600),
ds_medic_utili                 varchar(200),
ds_diagnostico                 varchar(600) not null,
ds_metas_alcancadas            varchar(600) not null,
ds_sessoes_realizadas          varchar(600) not null,
ds_proximas_sessoes            varchar(600) not null,
  FOREIGN KEY (id_funcionario) REFERENCES tb_usuario (id_usuario)
);

