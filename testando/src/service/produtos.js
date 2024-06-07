import { api } from "./api"

export const getProdutos= ()=> {
    const url = '/produto'
    return api.get(url, {
        headers:{"Access-Control-Allow-Origin*":""}
    })
}