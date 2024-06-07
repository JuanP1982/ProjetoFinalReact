import { useState, useEffect, useContext } from "react"
import { ProdutoContext, ProdutoProvider } from "../../context/produtosContext"
import { CardBox } from "../../components/Card/style";


export function Home(){
    
    const listaProdutos = useContext(ProdutoContext);
    const [produtos, setProdutos] = useState([])

    useEffect(()=>{
        setProdutos(listaProdutos)
        }, [listaProdutos])
        
        console.log(produtos)
    return(
        <div>
            <div>
            {produtos.map((produto)=>(
                <CardBox key={produto.id}>
                <p>Produto: {produto.nome}</p>
                <p>Foto: <img height="150px"  src={produto.url}></img></p>
                <p>Quantidade: {produto.quantidade}</p>
                <p>Preço: {produto.preco}</p>
                <p>Descrição: {produto.categoria.descricao}</p>
                </CardBox>
            ))}
        </div>
            <button type="button" onClick={()=>(window.location.href= "/criar")}>Registrar-se</button>
            <br/>
            <br/>
            <button type="button" onClick={()=>(window.location.href= "/perfil")}>Perfil</button>
        </div>
    )
}