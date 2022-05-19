
import './index.scss';

import { Link } from 'react-router-dom';
export default function Index(){



    return(
    
       <main className='page-login' >
       
                
         
            <div className='body'>
         
            <div>
                   <button className='button2'>
                   <Link to="/home"> voltar </Link>
                   </button>
              

              </div>
            

                    <div className='div1'>
                        <h1>Logar</h1>
                        <input type="text" placeholder="Nome"/> 
                    <br />   <br />
                        <input type="password" placeholder="Senha"/>
                        <br />
                        <br />
                        <button className='button'>
                       <Link to="/menu"> Entrar</Link>
                        </button>
                        
                    </div>
            
            
            </div>
    </main>
    )
  
}