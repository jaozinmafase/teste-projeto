import { Link } from 'react-router-dom';

import './index.scss';
export default function Index(){


    return(
       <main className='page-consultar' >
         <main class="main">

<div className='divsona'>
    <div className='div-titulo'>
       <h1 class="titulo">Consultar pacientes</h1> 
    </div>
    <div class="div-pesquisa">
        <input className='pesquisa' type="text" />
        <img className='imagem' src='./image/ff97a937322b46f443be20b2b676a7f6-lupa-icone-de-lupa.png ' alt=''/>
    </div>
</div>
<div className='aaa'>
<div className='divsona2'>
    <div className='div-pacientes'>
        <div className='pacientes'>
            <p className='txt-botoes'>Jonatas da Silva Prado</p>
        </div>
        <div className='pacientes'>
            <p className='txt-botoes'>João Victor Andrade</p>
        </div>
        <div className='pacientes'>
            <p className='txt-botoes'>Marcelo Araújo</p>
        </div>
    </div>
    <div className='div-editar'>
        <button className='bt-editar'>
            <p className='txt-botoes'>Editar</p>
        </button>
        <button className='bt-editar'><p class="txt-botoes">Editar</p></button>
        <button class="bt-editar"><p class="txt-botoes">Editar</p></button>
        
    </div>
    <div className='div-editar'>
        <button className='bt-remove'>
            <p className='txt-botoes'>Remover</p>
        </button>
        <button className='bt-remove'>
            <p className='txt-botoes'>Remover</p>
        </button>
        <button className='bt-remove'>
            <p className='txt-botoes'>Remover</p>
        </button>
        
    </div>
</div>
</div>
</main>
       </main>

    )
}