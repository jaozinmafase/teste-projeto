
import { Link } from 'react-router-dom';

import './index.scss';


export default function Index(){


    return(
       <main className='page-menu' >

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
