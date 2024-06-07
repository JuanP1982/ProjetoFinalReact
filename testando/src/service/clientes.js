import { salvarPerfilUsuario, salvarToken } from "../uteis/localStorage/localStorage"
import { api } from "./api"

   
    export const postCliente= (cliente) => {
        const url = '/clientes'
        return api.post(url,cliente,{
            headers:{"Access-Control-Allow-Origin*":""}
        }).then((res)=>{
            console.log("Cliente Criado com sucesso", res);
            salvarPerfilUsuario(res.data);
            salvarToken("Logado")
            setTimeout(()=> (window.location.href="/perfil"),2000)
            return alert(`Bem vindo, ${cliente.nome}!`)
        }).catch((err) =>{
            console.error("Erro ao criar cliente", err)
        })
    }

export const getClientes= (cliente)=> {
    const url = "/clientes"
    return api.get(url, {
        headers:{"Access-Control-Allow-Origin*":""}
    })
}