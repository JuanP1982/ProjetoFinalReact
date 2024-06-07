import { useEffect, useState } from "react"
import { postCliente } from "../../service/clientes"
import { InputModificado, InputModificado2 } from "../../components/input/Input"
import { ListarClientes } from "../Perfil/Perfil"
import { obterToken } from "../../uteis/localStorage/localStorage"

export function Teste(){

    if(localStorage.getItem("token")){
        document.body.style.visibility = "hidden"
        alert("Você já está logado!")
        window.location.href = "/"
    }

    const [formInfo, setFormInfo] = useState({
        nome: "",
        telefone: "",
        email: "",
        cpf: "",
        senha: "",
        cep: ""
    })
    
    
    function criarCliente(cliente){
        postCliente(cliente)
    }
    
    const adicionar = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormInfo({...formInfo,[name]: value});
    };
    
    return(
        <main>
        <div>
            <h1>Criar Conta</h1>
        <form>
        <label >Nome do cliente:</label>
        <InputModificado2 name="nome" value={formInfo.nome} onChange={adicionar}></InputModificado2>
        <br/>
        <label >Telefone do cliente:</label>
        <InputModificado2  name="telefone" value={formInfo.telefone} onChange={adicionar}></InputModificado2>
        <br/>
        <label >email do cliente:</label>
        <InputModificado2 name="email" value={formInfo.email} onChange={adicionar}></InputModificado2>
        <br/>
        <label >cpf do cliente:</label>
        <InputModificado2 name="cpf" value={formInfo.cpf} onChange={adicionar}></InputModificado2>
        <br/>
        <label >senha do cliente:</label>
        <InputModificado2 name="senha" value={formInfo.senha} onChange={adicionar}></InputModificado2>
        <br/>
        <label >cep do cliente:</label>
        <InputModificado2 name="cep" value={formInfo.cep} onChange={adicionar}></InputModificado2>
        <br/>
        <button  type="button" onClick={() => criarCliente(formInfo)}>teste</button>
        </form>
        </div>
        </main>
    )
}