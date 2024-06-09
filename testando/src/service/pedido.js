import { api } from "./api";

export const postPedido= (Pedido) => {
    const url = '/pedidos'
    return api.post(url,Pedido).then((res)=>{
        console.log("Pedido Criado com sucesso", res);
    }).catch((err) =>{
        console.error("Erro ao criar Pedido", err)
    })
}