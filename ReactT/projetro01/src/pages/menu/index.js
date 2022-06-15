
import { Link } from 'react-router-dom';
import storage from 'local-storage'
import './index.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Index(){
     const navigate= useNavigate();
    
    useEffect(()=>{
         if(!storage('asuario-logado')){
           navigate('/login')
         } 
    }, [])

    function sairClick(){
       storage.remove('asuario-logado');
       navigate('/login')
    }

  


    return(
       <main className='page-menu' >
            <div onClick={sairClick} className='c2'>
          
          <Link className='button' to="/login">Sair</Link>
     
        </div>

  <main>
      
    <div className='c1'>
       
      <div className='sc1'>
          <img  className='img'  src='./image/CONSULTAR.png'/>
       <div>
        <Link className='a' to="/consultar"> Consultar Prontuarios</Link>
          
      </div>
     
      </div>
      
    </div>

         <div className='c1'>
            <div className='sc1'>
                <img  className='img' src='./image/Cadrastar.png'/>
                <div className='cb'>
                    <Link className='a' to="/cadrasto">
                        Cadrastar Prontuarios
                    </Link>
                </div>
            </div>
        </div>
    </main>
        
       </main>

    )
}
