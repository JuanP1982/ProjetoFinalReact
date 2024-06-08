import { useContext, useState, useEffect } from "react"
import { limparLocalStorage, obterPefilUsuario, obterToken } from "../../uteis/localStorage/localStorage"
import { getClienteId, getClientes } from "../../service/clientes"
import { cartContext } from "../../context/carrinhoContext"

export function Carrinho(){
    const carrinho = useContext(cartContext)
    const [cliente, setCliente] = useState(undefined)
    const [cartItens, setCartItens] = useState([])
    

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

    useEffect(()=>{
        setCartItens(carrinho)
        }, [carrinho])

        console.log(carrinho)
    
    return(

        <div>

        </div>
    )
}