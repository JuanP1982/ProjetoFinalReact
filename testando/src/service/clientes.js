import { useState } from "react"
import { obterPefilUsuario, salvarPerfilUsuario, salvarToken } from "../uteis/localStorage/localStorage"
import { api } from "./api"

export const RequisicoesAPI = () => {
    const [loading, setLoading] = useState(false);

        
    const postCliente = async (cliente) => {
        const url = '/clientes';
        try {
            setLoading(true);
            const res = await api.post(url, cliente, {
                headers: { "Access-Control-Allow-Origin*": "" }
            });
            console.log("Cliente Criado com sucesso", res);
            salvarPerfilUsuario(res.data);
            salvarToken("Logado");
            setLoading(false);
            setTimeout(() => (window.location.href = "/perfil"), 2000);
            alert(`Bem vindo, ${cliente.nome}!`);
        } catch (err) {
            console.error("Erro ao criar cliente", err);
        } finally {
            setLoading(false);
        }
    };

    const getClientes = () => {
        const url = "/clientes";
        return api.get(url);
    };

    const getClienteId = async () => {
        const cliente = obterPefilUsuario();
        if (!cliente || cliente === null) {
            console.error("Erro ao pegar cliente");
            return;
        }
        const url = `/clientes/${cliente.id}`;
        try {
            setLoading(true)
            const res = await api.get(url);
            salvarPerfilUsuario(res.data);
            return res.data;
        } catch (err) {
            console.error("Erro ao obter informações");
        }finally{
            setLoading(false)
        }
    };

    return { postCliente, getClientes, getClienteId, loading };
};
