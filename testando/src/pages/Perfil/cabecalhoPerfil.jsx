import React from "react";
import "./cabecalhoPerfil.css";
import { limparLocalStorage } from "../../uteis/localStorage/localStorage";

export const CabecalhoPerfil = ({ busca, setBusca }) => {
   const logout = () => {
    limparLocalStorage()
    setTimeout(()=> {window.location.href="/login"})
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
                    <button className="buttonC" type="button" onClick={logout}>Logout</button>
                    <button className="buttonC" type="button" onClick={() => (window.location.href = "/")}>Home</button>
                    </ul>
                    </nav>
        </header>
    );
};


