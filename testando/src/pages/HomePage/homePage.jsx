import { useState, useEffect, useContext } from "react"
import { ProdutoContext, ProdutoProvider } from "../../context/produtosContext"
import { CardBox } from "../../components/Card/style";
import { cartContext } from "../../context/carrinhoContext"
import Cabecalho from "../../components/paginaInicio/cabecalho";
import Rodape from "../../components/paginaInicio/rodape";
import "./homePage.css";



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
                setTimeout(()=>{window.location.href="/login"},1000)
            }else{
            adicionarItens(produto);
        }
          };
        
    return(
        <div className="home-container">
        <Cabecalho busca={busca} setBusca={setBusca} />
        <main className="home-main">
            <div className="product-container">{produtos.map((produto)=>(
                <CardBox key={produto.id}>
                <p id="nome"> {produto.nome}</p>
                <img id="foto" max-width="33.33%" height="150px"  src={produto.url}></img>
                <p id="preco"> R${produto.preco}</p>
                <p id="descrição">Descrição: {produto.categoria.descricao}</p>
                <button type="buttonn" onClick={() => adicionarCarrinho(produto)}>Adicionar ao carrinho</button>
                </CardBox>
               

            ))}
            </div> 
            
      </main>
      <Rodape /> 
            
        </div>
    );
};