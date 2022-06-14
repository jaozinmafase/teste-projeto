import {con} from './connection.js'


export async function loginusuario(login, senha){
    const comando =  
    `select id_usuario 		id,
           nm_usuario	       nome,
           nm_login			email
      from tb_funcionario
     where nm_login 		       = ?
       and ds_senha			= ?`;
       const [linhas] =  await con.query(comando, [login, senha])
       return linhas[0];
}
