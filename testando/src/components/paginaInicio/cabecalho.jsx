import React, { useEffect, useState } from "react";
import {obterPefilUsuario} from "../../uteis/localStorage/localStorage"
import "./cabecalho.css";

const Cabecalho = ({ busca, setBusca }) => {
    const [cliente, setCliente] = useState(obterPefilUsuario())
    const [mensagem, setMensagem] = useState("")
    const [mensagem2, setMensagem2] = useState("")
    const [link,setLink] = useState("")
    const [link2,setLink2] = useState("")
    useEffect(()=>{

    if (localStorage.getItem("token")) {
        const nomeCliente = cliente.nome;
        const nomeLimitado = `${nomeCliente.substring(0, 10)}...`
        setMensagem(`Bem vindo(a), ${nomeLimitado}`)
        setLink("/")
        setMensagem2("perfil")
        setLink2("/perfil")
        return;
    }else{
        setMensagem("Registre-se")
        setLink("/cadastro")
        setMensagem2("login")
        setLink2("/login")
    }
   },[])

   if (cliente === undefined) {
    return <div>...Carregando...</div>
}
    
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/"><img className="logo" src="./logo.png" /></a></li>
                    <li> <a href="/"> Home</a></li>
                    <li> <a href="/sobre"> Sobre</a></li>
                    <li> <a href="/carrinho"> Carrinho</a></li>
                </ul>
            </nav>
            <input 
                type="text" 
                placeholder="Buscar produtos..." 
                value={busca} 
                onChange={(e) => setBusca(e.target.value)} 
            />
             <nav>
             <ul>
                    <button className="buttonC" type="button" onClick={() => (window.location.href = `${link}`)}>{mensagem}</button>
                    <button className="buttonC" type="button" onClick={() => (window.location.href = `${link2}`)}>{mensagem2}</button>
                    </ul>
                    </nav>
        </header>
    );
};

export default Cabecalho;
