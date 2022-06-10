import {con} from './connection.js'


export  async  function  loginusuario(login, senha){
    console.log(login);
    console.log(senha);
    const comando =  
    `select id_funcionario 		id,
           nm_funcionario	       nome,
           nm_login			email
      from tb_funcionario
     where nm_login 		       = ?
       and ds_senha			= ?`;

       const [linhas] =  await con.query(comando, [login, senha])
       console.log(linhas)
       return linhas[0];
}