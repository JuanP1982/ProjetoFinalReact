import { obterPefilUsuario, salvarPerfilUsuario, salvarToken } from "../uteis/localStorage/localStorage"
import { api } from "./api"

   
    export const postCliente= async (cliente) => {
        const url = '/clientes'
        try {
            const res = await api.post(url, cliente, {
                headers: { "Access-Control-Allow-Origin*": "" }
            })
            console.log("Cliente Criado com sucesso", res)
            salvarPerfilUsuario(res.data)
            salvarToken("Logado")
            setTimeout(() => (window.location.href = "/perfil"), 2000)
            return alert(`Bem vindo, ${cliente.nome}!`)
        } catch (err) {
            console.error("Erro ao criar cliente", err)
        }
    }

export const getClientes= ()=> {
    const url = "/clientes"
    return api.get(url)
}

export const getClienteId= async ()=> {
    const cliente = obterPefilUsuario()
    if(!cliente || cliente === null){
        console.error("Erro ao pegar cliente")
    }
    const url = `/clientes/${cliente.id}`
    try {
        const res = await api.get(url)
        salvarPerfilUsuario(res.data)
        return res.data
    } catch (err) {
        console.error("Erro ao obeter informações")
    }
}

