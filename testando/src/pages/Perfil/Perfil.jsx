import { useContext, useEffect, useState } from "react"
import { getClientes } from "../../service/clientes"
import { Card } from "../../components/Card/Card"
import { CardBox } from "../../components/Card/style"
import { ClienteContext } from "../../context/clienteContext"
import { limparLocalStorage, obterPefilUsuario } from "../../uteis/localStorage/localStorage"

export function ListarClientes(){
    const [cliente, setCliente] = useState()

    useEffect(()=>{
        const clienteCarregar = obterPefilUsuario()
        setCliente(clienteCarregar)
        console.log(cliente)
    }, [])

    if (cliente === undefined) {
        return <div>...Carregando...</div>
    }
    
    return(
        <div>
           <CardBox>
            <p key={cliente.id}>ID: {cliente.id}</p>
           <p >Nome: {cliente.nome}</p>
           <p >Email: {cliente.email}</p>
            <p >Telefone: {cliente.telefone}</p>
            <p>Logradouro:<i> {cliente.logradouro}</i></p>
            <p>Pedidos: {cliente.pedido.map((pedido)=>{
                <p>{pedido.totalCarrinho}</p>
            })}</p>
            </CardBox>
         <button type="button" onClick={()=>{limparLocalStorage()}}>Log-out</button>
         <br/>
         <br/>
         <button type="button" onClick={()=>(window.location.href= "/")}>Pagina Inicial</button>
        </div>
       
    )
}