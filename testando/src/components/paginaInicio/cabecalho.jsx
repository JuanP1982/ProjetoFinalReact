import React from "react";
import "./cabecalho.css";

const Cabecalho = ({ busca, setBusca }) => {
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
                    <button className="buttonC" type="button" onClick={() => (window.location.href = "/cadastro")}>Registrar-se</button>
                    <button className="buttonC" type="button" onClick={() => (window.location.href = "/perfil")}>Perfil</button>
                    </ul>
                    </nav>
        </header>
    );
};

export default Cabecalho;
