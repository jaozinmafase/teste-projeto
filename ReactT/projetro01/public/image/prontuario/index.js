import './index.scss';

export default function Index() {
return(

                <main className='pagina-consultar'>
        <div className="cabecalho">
            <a className="tagA" href="../pages/home/index.html">voltar para o menu</a>
            <a className="tagA" href="../menu/index.html">Voltar para a pagina principal</a>
            <a className="tagA" href="../consultarPacientes/consulta.html">Voltar para tela de consulta de pacientes</a>
        </div>

        <div className="FORMULARIO">
        <div className="form-container">

        <h1 className="titulos"> Sobre o Cliente e Data</h1>
            <div className="tamanho">
                <div className="form-row">
                    <label>Nome:</label>
                    <input type="text" name="nome" id="nome" />

                    <label>Data da consulta:</label>
                    <input type="date" name="Data da consulta" id="data da consulta" />
                </div>  

                    <div className="form-row">
                        <label>CEP:</label>
                        <input type="text" name="CEP" id="CEP"/>

                        <label>Data de nascimneto:</label>
                        <input type="date" name="Data de nascimneto" id="Data de nascimneto" />
                    </div>
            <div className="form-row">
                <label> Endereço:</label>
                <input type="text"/>

                <label> Telefone:</label>
                <input type="text" name="telefone" id="telefone" />

            </div>
            </div> 

        <h1 className="titulos">Queixas e análise:</h1>
            <div className="form-row">
                <div className="form-field">
                    <label>Queixa principal:</label>
                    <textarea ></textarea>
                </div>
            </div>

            <div className="form-row">
                <div className="form-field"> 
                <label>Outras Queixas:</label>
                <textarea> </textarea>
                </div>
            </div>
            <div className="form-row">
                <div className="form-field">
                    <label>Anamnese:</label>
                    <textarea></textarea>
                </div>
            </div>
            <div className="form-row">
                <div className="form-field">
                    <label>Hipótese:</label>
                    <textarea ></textarea>
                </div>
            </div>

        <h1 className="titulos">Tratamentos e medicamentos:</h1>  
        
        <div className="checkboxes" >
            <label for="input">Teve tratamentos anteriores</label>
            <input type="checkbox" />
            <label for="input">Não usa medicamentos</label>
            <input type="checkbox" />
        </div>
        <div className="form-row">
            <div className="form-field">
                <label>Tratamentos anteriores:</label>
                <textarea></textarea>
            </div>
        </div>

        <div className="form-row">
            <div className="form-field"> 
            <label>Medicamentos utilizados:</label>
            <textarea> </textarea>
            </div>
        </div>

        <div className="form-row">
            <div className="form-field">
                <label>Diagnosticos:</label>
                <textarea></textarea>
            </div>
        </div>

        <div className="form-row">
            <div className="form-field">
                <label>Metas desejadas:</label>
                <textarea ></textarea>
            </div>
        </div>

        <div className="form-row">
            <div className="form-field">
                <label>Sessões realizadas:</label>
                <textarea ></textarea>
            </div>
        </div>

        <div className="form-row">
            <div className="form-field">
                <label>Proximas sessões:</label>
                <textarea ></textarea>
            </div>
        </div>

        <button className="botao"> Cadastrar pacientes </button>

        </div>
        </div>   
                </main>


    )
}