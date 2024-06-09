import { Routes, Route } from "react-router-dom";
import { ListarClientes } from "../pages/Perfil/Perfil"
import { Teste } from "../pages/Cadastro/Cadastro"
import { ClienteContext, ClienteProvider } from "../context/clienteContext";
import { Home } from "../pages/HomePage/homePage";

import { CartProvider } from "../context/carrinhoContext";
import CarrinhoPage from "../pages/Carrinho/carrinho";

export function  Rotas(){

    return(
        
        <Routes>
            <Route path="/perfil" element={ <ListarClientes/>}/>
            <Route path="/cadastro" element={ <Teste/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/carrinho" element={<CarrinhoPage/>}></Route>
        </Routes>
        
        
    )
}