import { useState, useEffect, useContext } from "react"
import { ProdutoContext, ProdutoProvider } from "../../context/produtosContext"
import { CardBox } from "../../components/Card/style";
import Cabecalho from "../../components/paginaInicio/cabecalho";
import Rodape from "../../components/paginaInicio/rodape";



export function Home(){
    
    const listaProdutos = useContext(ProdutoContext);
    const [produtos, setProdutos] = useState([])
    const[busca,setBusca]= useState("");

    useEffect(()=>{
        setProdutos(listaProdutos)
        }, [listaProdutos])
        
        
    return(
        <div style = {{display: "flex", flexDirection: "column", alignItems:"center", justifyContent: "center", padding: "0 200px"}}>
            <Cabecalho busca = {busca} setBusca = {setBusca}/>
            <main style={{ maxWidth: "800px", width: "100%" , padding: "0 200px"}}>
            <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", flexWrap: "wrap", gap: "2.rem" , padding: "0 120px"}}>
            {produtos.map((produto)=>(
                <CardBox key={produto.id}>
                <p>Produto: {produto.nome}</p>
                <img height="150px"  src={produto.url}></img>
                <p>Quantidade: {produto.quantidade}</p>
                <p>Preço: {produto.preco}</p>
                <p>Descrição: {produto.categoria.descricao}</p>
                </CardBox>
                
                
            ))}
            </div>     
      </main>
            
        </div>
    );
};