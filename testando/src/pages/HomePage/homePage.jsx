import { useState, useEffect, useContext } from "react"
import { ProdutoContext, ProdutoProvider } from "../../context/produtosContext"
import { CardBox } from "../../components/Card/style";
import { cartContext } from "../../context/carrinhoContext"
import Cabecalho from "../../components/paginaInicio/cabecalho";
import Rodape from "../../components/paginaInicio/rodape";



export function Home(){
    const listaProdutos = useContext(ProdutoContext);
    const [produtos, setProdutos] = useState([])
    const[busca,setBusca]= useState("");
    const { adicionarItens } = useContext(cartContext);
    
    useEffect(()=>{
        setProdutos(listaProdutos)
        }, [listaProdutos])
     
        const adicionarCarrinho = (produto) => {
            if (localStorage.getItem("token") === null) {
                alert("Faça login para adicionar itens ao carrinho!")
                setInterval(()=>{window.location.href="/cadastro"},1000)
            }else{
            adicionarItens(produto);
        }
          };
        
    return(
        <div style = {{display: "flex", flexDirection: "column", alignItems:"center", justifyContent: "center", padding: "0 200px"}}>
            <Cabecalho busca = {busca} setBusca = {setBusca}/>
            <main style={{ maxWidth: "800px", width: "100%" , padding: "0 200px"}}>
            <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", flexWrap: "wrap", gap: "2.rem" , padding: "0 120px"}}>
            {produtos.map((produto)=>(
                <CardBox key={produto.id}>
                <p id="nome">Produto: {produto.nome}</p>
                <img id="foto" height="150px"  src={produto.url}></img>
                <p id="preco">Preço: {produto.preco}</p>
                <p id="descrição">Descrição: {produto.categoria.descricao}</p>
                <button type="button" onClick={() => adicionarCarrinho(produto)}>Adicionar ao carrinho</button>
                </CardBox>
               

            ))}
            </div> 
            
      </main>
      <Rodape /> 
            
        </div>
    );
};