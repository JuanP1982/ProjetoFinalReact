import { Routes, Route } from "react-router-dom";
import { ListarClientes } from "../pages/Perfil/Perfil"
import { Teste } from "../pages/Cadastro/Cadastro"
import { ClienteContext, ClienteProvider } from "../context/clienteContext";
import { Home } from "../pages/HomePage/homePage";
import { Login } from '../pages/Login/login';
import Sobre from "../pages/Sobre/sobre";

import { CartProvider } from "../context/carrinhoContext";
import CarrinhoPage from "../pages/Carrinho/Carrinho";

export function  Rotas(){

    return(
        
        <Routes>
            <Route path="/perfil" element={ <ListarClientes/>}/>
            <Route path="/cadastro" element={ <Teste/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/carrinho" element={<CarrinhoPage/>}></Route>
            <Route path='/login' element={<Login />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
        
        
    )
}