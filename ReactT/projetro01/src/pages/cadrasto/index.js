import { Link } from 'react-router-dom';
import './index.scss';

export default function Index(){


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
                                <input  type="text" />
                            </div>
                            <div>
                                <h2>
                                cep
                                </h2>
                                <input type="number"/>
                            </div>
                            <div >
                                <h2>
                                endereço
                                </h2>
                                <input/ >
                            </div>
                        </div>

                        <div>
                            <div>
                                <h2>
                                data de nascimento
                                </h2>
                                <input type="date"/>
                            </div>
                            <div >
                            <h2>
                                telefone
                            </h2>
                            <input type="number"/>
                        </div>
                        
                        </div>
    </div>

    <div className='formulario2'>
                        <div >
                            <h2>Queixa principal :</h2>
                            <textarea  className='c1' > </textarea>
                        </div>
                        <div  >
                            <h2>Queixa secundaria :</h2>
                            <textarea  className='c1' ></textarea>
                        </div>
                        <div >
                            <h2>Anamnese ;</h2>
                            <textarea  className='c1' ></textarea>
                   </div>
   </div>

   <div class="formulario3" >
    <h1>Trata mentos e remedios</h1>
    <div>
                <div >
                    <div>
                    <label for="input">Teve tratamentos anteriores</label>
                    <input  type="checkbox"/>
                    </div>
                    <div>
                    <label for="input">Não usa medicamentos</label>
                    <input type="checkbox"/>
                </div>

                <div  >
                    <h2>Tratamentos anteriores :</h2>
                    <textarea   className='c1' type="text"></textarea>
                   
                </div>
                <div >
                    <h2>Medicamentos utilizados :</h2>
                    <textarea  className='c1' type="text"></textarea>
                </div>
                <div > 
                    <h2>Diagnosticos :</h2>
                    <textarea   className='c1' type="text"></textarea>
                </div>    
                <div  >
                    <h2>metas desejadas :</h2>
                    <textarea  className='c1' type="text"></textarea>
                </div>  
                
                <div >
                    <h2>sessões  realizadas</h2>
                    <textarea   className='c1' ></textarea>
                </div>  
                <div>
                    <h2> proximas sessões  </h2>
                    <textarea  className='c1'></textarea>
              

              </div>

      </div>
      </div> 
    </div>      
   </div> 
   <div className='x2'>
       <button>
           Cadrastar Prontuario
       </button>
       </div>
     



      </main>

    )
}