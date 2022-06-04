create database bancopsicoDB;

use bancopsicoDB;

create table tb_funcionario(
id_funcionario                int primary key auto_increment,
nm_funcionario                varchar(200),
ds_CPF                        varchar(200),
nm_login                     varchar(100),
ds_senha                    varchar(100)
);

create table tb_prontuario_paciente(

id_prontuario                int primary key auto_increment not null,
id_funcionario                int not null,
nm_paciente                    varchar(200) not null,
dt_nascimento                date not null,
ds_cep                        varchar(200) not null,
ds_endereco                    varchar(200) not null,
ds_telefone                    varchar(200) not null,
dt_consulta                    datetime not null,
ds_queixa_principal            varchar(300) not null,
ds_outras_queixas            varchar(500) not null,
ds_anamnese                    varchar(600) not null,
ds_hipotese                    varchar(600) not null,
bt_tem_trat_ant                tinyint not null,
bt_usa_medic                tinyint not null,
bt_trat_ant                    varchar(600) not null,
ds_medic_utili                varchar(200) not null,
ds_diagnostico                varchar(600) not null,
ds_metas_alcancadas            varchar(600) not null,
ds_sessoes_realizadas        varchar(600) not null,
ds_proximas_sessoes            varchar(600) not null
);