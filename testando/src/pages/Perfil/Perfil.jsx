import { useContext, useEffect, useState } from "react"
import { getClienteId, getClientes } from "../../service/clientes"
import { Card } from "../../components/Card/Card"
import { CardBox } from "../../components/Card/style"
import { ClienteContext } from "../../context/clienteContext"
import { limparLocalStorage, obterPefilUsuario, obterToken } from "../../uteis/localStorage/localStorage"


export function ListarClientes(){
    const [cliente, setCliente] = useState(undefined)

    useEffect(()=>{
        if (localStorage.getItem("token") === null) {
            document.body.style.display = "hidden"
            alert("Faça login para continuar!")
            setInterval(()=>{window.location.href="/cadastro"},1000)
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
        <div>
           <CardBox key={cliente.id}>
            <p >ID: {cliente.id}</p>
           <p >Nome: {cliente.nome}</p>
           <p >Email: {cliente.email}</p>
            <p >Telefone: {cliente.telefone}</p>
            <p>Logradouro: {cliente.logradouro}</p>
             {cliente.pedido.map((pedido, index)=>(
                <div key={index}>
                <p>{pedido.totalCarrinho}</p>
                <p>{pedido.status}</p>
                </div>
            ))}
            </CardBox>
         <button type="button" onClick={()=>{limparLocalStorage()}}>Log-out</button>
         <br/>
         <br/>
         <button type="button" onClick={()=>(window.location.href= "/")}>Pagina Inicial</button>
        </div>
       
    )
}