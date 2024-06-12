import { useContext, useEffect, useState } from "react"
import { RequisicoesAPI } from "../../service/clientes"
import { Card } from "../../components/Card/Card"
import { CardBox } from "../../components/Card/style"
import { ClienteContext } from "../../context/clienteContext"
import { limparLocalStorage, obterPefilUsuario, obterToken } from "../../uteis/localStorage/localStorage"
import { Helmet } from "react-helmet";
import "./cabecalhoPerfil.css";
import "./Perfil.css";
import { CabecalhoPerfil } from "./cabecalhoPerfil"


export function ListarClientes(){
    const {getClientes,getClienteId, loading} = RequisicoesAPI()
    const [cliente, setCliente] = useState(undefined)

    useEffect(()=>{
        if (localStorage.getItem("token") === null) {
            document.body.style.display = "hidden"
            alert("Faça login para continuar!")
            setTimeout(()=>{window.location.href="/login"},1000)
        }

        const clienteCarregar = obterPefilUsuario()
        setCliente(clienteCarregar)

        const clienteAtualizar = async () =>{
            const clienteAtualizado = await getClienteId()
            setCliente(clienteAtualizado)
        }

        if (clienteCarregar) {
            clienteAtualizar()
        }

    }, [])

    if (cliente === undefined) {
        return <div>...Carregando...</div>
    }
    
    return(
        <div className="containerr">
        <CabecalhoPerfil />
            <div className="CardBoxx">
        <h2>Detalhes do Cliente</h2>
        <p>ID: {cliente.id}</p>
        <p>Nome: {cliente.nome}</p>
        <p>Email: {cliente.email}</p>
        <p>Telefone: {cliente.telefone}</p>
        <p>Logradouro: {cliente.logradouro}</p>

        <h2>Pedidos</h2>
        {cliente.pedido.map((pedido, index) => (
        <div className="pedidoCardd" key={index}>
            <h4>Pedido {index + 1}</h4>
            <p>Status: {pedido.status}</p>
            <p>Data do Pedido: {pedido.dataPedido}</p>
            <p>Total do Carrinho: R$ {pedido.totalCarrinho.toFixed(2)}</p>

            <h4>Itens do Carrinho</h4>
            {pedido.carrinho.map((item, itemIndex) => (
              <div key={itemIndex}>

                <p>Nome do Produto: {item.nomeProduto}</p>
                <p><img width="100px" height="100px" src={item.url} alt="" /></p>
                <p>Quantidade: {item.quantidade}</p>
                <p>Valor Unitário: R$ {item.valor.toFixed(2)}</p>
                <p>Total: R$ {item.total.toFixed(2)}</p>
                <p>Categoria: {item.categoria.nome}</p>
                </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
  }