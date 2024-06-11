import { useEffect, useState } from "react";
import { RequisicoesAPI } from "../../service/clientes";
import styles from './cadastro.module.css';
import { InputModificado1, InputModificado2, InputModificado3, InputModificado4, InputModificado5, InputModificado6 } from "../../components/input/Input";
import { obterToken } from "../../uteis/localStorage/localStorage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from "react-helmet";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export function Teste() {
    const {postCliente, loading} = RequisicoesAPI()

    if (localStorage.getItem("token")) {
        document.body.style.visibility = "hidden";
        alert("Você já está logado!");
        window.location.href = "/";
    }

    const [confirmaSenha, setConfirmaSenha] = useState("");

    const [formInfo, setFormInfo] = useState({
        nome: "",
        telefone: "",
        email: "",
        cpf: "",
        senha: "",
        cep: ""
    });

    function criarCliente(cliente) {
        if (cliente.senha !== confirmaSenha) {
            alert("A confirmação de senha não corresponde à senha!");
            return;
        }
        if (cliente.cpf.length !== 14) {
            alert("O CPF deve conter exatamente 11 dígitos!");
            return;
        }
    
        if (!cliente.email.includes("@")) {
            alert("O e-mail deve conter o caractere '@'!");
            return;
        }
    
        postCliente(cliente);
    }

    const adicionar = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormInfo({ ...formInfo, [name]: value });
    };

    const adicionarConfirmação = (event) => {
        event.preventDefault();
        const { value } = event.target;
        setConfirmaSenha(value);
    };

    return (
        <main>
            {loading && 
                <div className={styles.imagemLoading}> <img src="https://pa1.aminoapps.com/6465/2452f81597957cc887acb4bb377b55a30ba0ea36_00.gif"></img> </div>}
            <Helmet>
                <title>Cadastro</title>
            </Helmet>
            <div className={styles.formCardDiv}>
                <Link to="/" className={styles.homeLink}>
                    <FontAwesomeIcon icon={faHome} className={styles.icon} />
                    Home
                </Link>
                <h1>Criar Conta</h1>
                <h4>Já tem uma conta? <a href="/login">Faça login.</a></h4>
                <form>
                    <InputModificado1 name="nome" value={formInfo.nome} onChange={adicionar}></InputModificado1>
                    <br />
                    <InputModificado2 name="telefone" value={formInfo.telefone} onChange={adicionar}></InputModificado2>
                    <br />
                    <InputModificado3 name="email" value={formInfo.email} onChange={adicionar}></InputModificado3>
                    <br />
                    <InputModificado4 placeholder="cpf" name="cpf" value={formInfo.cpf} onChange={adicionar}></InputModificado4>
                    <br />
                    <InputModificado5 placeholder="Senha" name="senha" value={formInfo.senha} onChange={adicionar}></InputModificado5>
                    <br />
                    <InputModificado5 placeholder="Confirmação Senha" name="confirmaSenha" value={confirmaSenha} onChange={adicionarConfirmação}></InputModificado5>
                    <br />
                    <InputModificado6 name="cep" value={formInfo.cep} onChange={adicionar}></InputModificado6>
                    <br />
                    <button type="button" onClick={() => criarCliente(formInfo)}>Cadastrar</button>
                </form>
            </div>
        </main>
    );
}
