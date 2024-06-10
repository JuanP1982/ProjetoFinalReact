import { useEffect, useState } from "react"
import { postCliente } from "../../service/clientes"
import styles from './cadastro.module.css'
import { InputModificado1, InputModificado2,InputModificado3,InputModificado4,InputModificado5,InputModificado6} from "../../components/input/Input"
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
        <div className={styles.formCardDiv}>
            <h1>Criar Conta</h1>
            <h4>Já tem uma conta? <a href="#">Faça login.</a></h4>
            <form>
        <InputModificado1 name="nome" value={formInfo.nome} onChange={adicionar}></InputModificado1>
        <br/>
        <InputModificado2 name="telefone" value={formInfo.telefone} onChange={adicionar}></InputModificado2>
        <br/>
        <InputModificado3 name="email" value={formInfo.email} onChange={adicionar}></InputModificado3>
        <br/>
        <InputModificado4 name="cpf" value={formInfo.cpf} onChange={adicionar}></InputModificado4>
        <br/>
        <InputModificado5 name="senha" value={formInfo.senha} onChange={adicionar}></InputModificado5>
        <br/>
        <InputModificado6 name="cep" value={formInfo.cep} onChange={adicionar}></InputModificado6>
        <br/>
        <button type="button" onClick={() => criarCliente(formInfo)}>Cadastrar</button>
        </form>
        </div>
        </main>
    )
}