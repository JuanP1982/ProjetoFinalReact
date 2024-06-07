import { createContext, useState, useEffect } from "react";
import { getClientes } from "../service/clientes"
import { getProdutos } from "../service/produtos";

const ProdutoContext = createContext();

const ProdutoProvider = (props) => {
    const [produtos, setProduto] = useState([])

    function obterProduto() {
        getProdutos().then((res) =>{
            setProduto(res.data)
            
            }).catch((err)=>{
                console.log("Erro ao buscar produtos", err);
                })
                }
    useEffect(()=>(obterProduto()),[])

    return(
        <ProdutoContext.Provider value={produtos}>
        {props.children}
        </ProdutoContext.Provider>
    )
}

export {ProdutoContext, ProdutoProvider};