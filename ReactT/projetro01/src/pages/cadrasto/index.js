import { useState } from 'react';
import { Link } from 'react-router-dom';
import storage, { set } from 'local-storage' ;
import { alterarProntuario, cadastrarProntuario } from '../../api/pacienteAPI';
import {toast} from 'react-toastify'
import './index.scss';


export default function Index(){
const [nome,setNome] = useState('');
const [dtNascimento,setDtNascimento] = useState('');
const [cep,setCep] = useState('');
const [endereco,setEndereco] = useState('');
const [telefone,setTelefone] = useState('');
const [consulata,setConsulta] = useState('');
const [queixaprincipal,setQueixaPrincipal] = useState('');
const [outrasqueixas,setOutrasQueixas] = useState('');
const [anamnese,setAnamnese] = useState('');
const [hipotese,setHipotese] = useState('');
const [temtratant,setTemtratant] = useState(false);
const [usamedicamentos,setUsamedicamentos] = useState(false);
const [trat_ant,setTratant] = useState('');
const [medicamentosUtilizados, setMedicamentosUtilizados] = useState('');
const [diagnostico,setDiagnostico] = useState('');
const [metasalcancadas,setmetasalcacandas] = useState('');
const [sessoesrealizadas,setSessoesrealizadas] = useState('');
const [proximassessoes,setProximassessoes] = useState('');
const [id,setId] = useState(0);

async function botaoCadastrar(){
    try{
        const usuario = storage('asuario-logado').id;
        if(id === 0){ 
        const r = await cadastrarProntuario(nome,dtNascimento,cep,endereco,telefone,
            consulata, queixaprincipal, outrasqueixas,anamnese,hipotese,temtratant,
            usamedicamentos,trat_ant,medicamentosUtilizados,diagnostico,metasalcancadas,
            sessoesrealizadas,proximassessoes,usuario);
            setId(r.id);
            }
            else
            { 
            await alterarProntuario(id,nome,dtNascimento,cep,endereco,telefone,
                consulata, queixaprincipal, outrasqueixas,anamnese,hipotese,temtratant,
                usamedicamentos,trat_ant,medicamentosUtilizados,diagnostico,metasalcancadas,
                sessoesrealizadas,proximassessoes,usuario)  
            }
            toast('📖 Prontuario Cadastrado com sucesso!')
    }catch(err){
        alert(err.response.data.erro)
    }
}
function botaoAlterarSalvar(){
    setId(0);
    setNome('');
    setDtNascimento('');
    setCep('');
    setEndereco('');
    setTelefone('');
    setConsulta('');
    setQueixaPrincipal('');
    setOutrasQueixas('');
    setAnamnese('');
    setHipotese('');
    setTemtratant(false);
    setUsamedicamentos(false);
    setTratant('');
    setMedicamentosUtilizados('');
    setDiagnostico('');
    setmetasalcacandas('');
    setSessoesrealizadas('');
    setProximassessoes('');
}

    return(
       <main className='page-cadrastro' >
               <div className='c2'>
            <Link className='button' to="/menu">voltar</Link>
        </div>


      <div className='main'>
    
     
      <div className='cabecalho'>
       <h3 className='titulo'>Cadrastar um Prontuario</h3>
      </div>
    
    
      
     <div className='formulario1'>
                        <div class="cadrasto1">
                            <div>
                                <h2>Nome</h2>
                                <input  type="text" value={nome} onChange={e => setNome(e.target.value)} />
                            </div>
                            <div>
                                <h2>
                                cep
                                </h2>
                                <input type="text"value={cep} onChange={e => setCep(e.target.value)}/>
                            </div>
                            <div >
                                <h2>
                                endereço
                                </h2>
                                <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} />
                            </div>
                        </div>

                        <div>
                            <div>
                                <h2>
                                data de nascimento
                                </h2>
                                <input type="date" value={dtNascimento} onChange={e => setDtNascimento(e.target.value)}/>
                            </div>
                            <div >
                            <h2>
                                telefone
                            </h2>
                            <input type="text" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                        </div>
                        <div >
                            <h2>
                                consulta
                            </h2>
                            <input type="text" value={consulata} onChange={e => setConsulta(e.target.value)}/>
                        </div>
                        
                        </div>
    </div>

    <div className='formulario2'>
                        <div >
                            <h2>Queixa principal </h2>
                            <textarea  className='c1' value={queixaprincipal} onChange={e => setQueixaPrincipal(e.target.value)}> </textarea>
                        </div>
                        <div  >
                            <h2>Queixa secundaria </h2>
                            <textarea  className='c1' value={outrasqueixas} onChange={e => setOutrasQueixas(e.target.value)}></textarea>
                        </div>
                        <div >
                            <h2>Anamnese </h2>
                            <textarea  className='c1' value={anamnese} onChange={e => setAnamnese(e.target.value)}></textarea>
                   </div>
                   <div >
                            <h2>hipotese </h2>
                            <textarea  className='c1' value={hipotese} onChange={e => setHipotese(e.target.value)}></textarea>
                   </div>
   </div>

   <div class="formulario3" >
    <h1>Trata mentos e remedios</h1>
    <div>
                <div >
                    <div>
                    <label for="input">Teve tratamentos anteriores</label>
                    <input  type="checkbox" checked={temtratant} onChange={e => setTemtratant(e.target.value)}/>
                    </div>
                    <div>
                    <label for="input">Não usa medicamentos</label>
                    <input type="checkbox" checked={usamedicamentos} onChange={e => setUsamedicamentos(e.target.value)}/>
                </div>

                <div  >
                    <h2>Tratamentos anteriores </h2>
                    <textarea   className='c1' type="text" value={trat_ant} onChange={e => setTratant(e.target.value)}></textarea>
                   
                </div>
                <div >
                    <h2>Medicamentos utilizados </h2>
                    <textarea  className='c1' type="text" value={medicamentosUtilizados} onChange={e => setMedicamentosUtilizados(e.target.value)}></textarea>
                </div>
                <div > 
                    <h2>Diagnosticos </h2>
                    <textarea   className='c1' type="text" value={diagnostico} onChange={e => setDiagnostico(e.target.value)}></textarea>
                </div>    
                <div  >
                    <h2>metas desejadas </h2>
                    <textarea  className='c1' type="text" value={metasalcancadas} onChange={e => setmetasalcacandas(e.target.value)}></textarea>
                </div>  
                
                <div >
                    <h2>sessões  realizadas</h2>
                    <textarea   className='c1' value={sessoesrealizadas} onChange={e => setSessoesrealizadas(e.target.value)}></textarea>
                </div>  
                <div>
                    <h2> proximas sessões  </h2>
                    <textarea  className='c1' value={proximassessoes} onChange={e => setProximassessoes(e.target.value)}></textarea>

              </div>
      </div>
      </div> 
    </div>      
   </div> 
   <div className='x2'>
       <button onClick={botaoCadastrar}> 
           Cadrastar Prontuario
       </button> &nbsp;  &nbsp;
       <button onClick={botaoAlterarSalvar}> {id === 0 ? 'SALVAR' : 'ALTERAR'} </button> &nbsp;  &nbsp;
       
       </div>
     



      </main>

    )
}