import { createContext, useState, useEffect } from "react";
import { getClientes } from "../service/clientes"

const ClienteContext = createContext();

const ClienteProvider = (props) => {
    const [clientes, setClientes] = useState([])

    function obterClientes() {
        getClientes().then((res) =>{
            setClientes(res.data)
            
        }).catch((err)=>{
            console.log("Erro ao buscar clientes", err);
        })
    }

    useEffect(()=>(obterClientes()),[])

    

    return(
        <ClienteContext.Provider value={clientes}>
        {props.children}
        </ClienteContext.Provider>
    )
}

export {ClienteContext, ClienteProvider};