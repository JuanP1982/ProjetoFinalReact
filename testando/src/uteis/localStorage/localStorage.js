//chave e valor
//chave: string; valor: variável que vai ser settada ou resgatada

import { json } from "react-router-dom";

export const salvarToken = (token) =>{
    localStorage.setItem('token', token);
};

export const obterToken =() =>{
    const token = localStorage.getItem('token');

    return token ? token : 'Não foi possivel obeter o token!';
};

export const salvarPerfilUsuario = (dadosUsuario)=>{
 localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));
};

export const obterPefilUsuario = () =>{
    const perfilUsuario = localStorage.getItem("dadosUsuario");
    return  perfilUsuario ? JSON.parse(perfilUsuario) : null;
    
};

export const limparLocalStorage = () =>{
    localStorage.clear();
};