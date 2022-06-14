import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {excluirPaciente, listarPorNome, listarTodosFilmes} from '../../api/pacienteAPI';
import { confirmAlert } from 'react-confirm-alert';
import './index.scss';
export default function Index(){
    const [pacientes, setPacientes] = useState([]);
    const [filtro, setFiltro] = useState('');

    async function carregarTodosPacientes(){
        const resp= await listarTodosFilmes()
        setPacientes(resp);
    }
    async function filtrar(){
        const resp = await listarPorNome(filtro);
        setPacientes(resp);
    }
 
    async function excluirPacienteClick(id, nome){
        confirmAlert({
            title:'remover paciente',
            message:`deseja mesmo remover ${nome} ?`,
            buttons: [ 
            {
                label: 'Sim', onclik: async () => {
                    const resposta = await excluirPaciente(id,nome);
                    if(filtro === '')
                    carregarTodosPacientes();
                    else
                    filtrar();
                    alert('filme removido');
                 }
            },
            {
                label: 'Não'
            }

             ]
        })
    }
    useEffect(()=> {
        carregarTodosPacientes();
    },[])


    return(
       <main className='page-consultar' >

           <div className='main'>
               <h1>Consultar um Prontuario</h1>
               <div className='cx'>
                   
                    <div> <input type="text"  className='search-txt' placeholder='consultar' value={filtro} onChange={e => setFiltro(e.target.value)}/> 

                    </div>
                  
                  <div ><img  src='./image/622669.png' onClick={filtrar}/></div> 
                 
               </div>

              <div>
              {pacientes.map(item=> 
               <div className='c1'> 
                <div>{item.id}</div>
               <div><button className='btnome'>{item.nome}</button></div>
               <div className='c2'>
                   <button className='btnome'>editar</button>
                 </div>

               <div className='c2'> 
                   <button className='btnome' onClick={excluirPacienteClick(item.id,item.nome)} >remover</button>
              </div> 
              </div>
                )}

            </div>
          </div> 
       </main>

    )
 }
