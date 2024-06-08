import React from "react";
import "./cabecalho.css";

const Cabecalho = ({ busca, setBusca }) => {
    return (
        <header>
            <h1>Grupo 02</h1>
            <nav>
                <ul>
                    <li> <a href="/"> Home</a></li>
                    <li> <a href="/"> Produtos</a></li>
                    <li> <a href="/"> Sobre</a></li>
                    <li> <a href="/"> Carrinho</a></li>
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
                    <button type="button" onClick={() => (window.location.href = "/cadastro")}>Registrar-se</button>
                    <button type="button" onClick={() => (window.location.href = "/perfil")}>Perfil</button>
                    </ul>
                    </nav>
        </header>
    );
};

export default Cabecalho;
