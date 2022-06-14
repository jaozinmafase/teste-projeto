import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {buscarPacientesNome, listarTodosPacientes} from '../../api/pacienteAPI';

import './index.scss';
export default function Index(){
    const [pacientes, setPacientes] = useState([]);
    const [filtro, setFiltro] = useState('');

    async function carregarTodosPacientes(){
        const resp= await listarTodosPacientes()
        setPacientes(resp);
    }
    async function filtrar(){
        const resp = await buscarPacientesNome(filtro);
        setPacientes(resp);
    }
    useEffect(()=> {
        carregarTodosPacientes();
    },[])


    return(
       <main className='page-consultar' >

         <div className='bca'>
                   <button className='b1'>
                       <Link className='c' to="/menu">voltar</Link>
                   </button>
               </div>

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
                   <button className='btnome'>romover</button>
              </div> 
              </div>
                )}

            </div>
          </div> 
       </main>

    )
}