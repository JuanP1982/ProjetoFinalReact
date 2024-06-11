import React, { useEffect,useContext, useState } from "react";
import { RequisicoesAPI } from "../../service/clientes";
import { cartContext } from "../../context/carrinhoContext";
import { limparLocalStorage, limparProdutos, obterPefilUsuario, obterProdutosCarrinho, obterToken } from "../../uteis/localStorage/localStorage"
import Cabecalho from "../../components/paginaInicio/cabecalho";
import { Helmet } from "react-helmet";
import { postPedido } from "../../service/pedido";

const CarrinhoPage = () => {
  const {getClienteId, loading} = RequisicoesAPI()
  const {removerItens, cartItens, calcularTotal, valorTotal } = useContext(cartContext)
  const [cliente, setCliente] = useState(undefined)
  const [itens, setItens] = useState([])

 useEffect(()=>{
  if (localStorage.getItem("token") === null) {
      document.body.style.display = "hidden"
      alert("Faça login para continuar!")
      setTimeout(()=>{window.location.href="/login"},1000)
  }

  const clienteCarregar = obterPefilUsuario()
  setCliente(clienteCarregar)
  
  const clienteAtualizar = async () =>{
      const clienteAtualizado = await getClienteId()
      setCliente(clienteAtualizado)
      }

  if (clienteCarregar) {
      clienteAtualizar()
      }
      
      const ItensCart = obterProdutosCarrinho()
      setItens(ItensCart)

      calcularTotal()
      
      }, [])
      
      useEffect(() => {
        setItens(cartItens);
        calcularTotal()
    }, []);
    

    if (cliente === undefined) {
      return <div>...Carregando...</div>
      }

      const finalizar = () => {
        const pedido = {
          status: "FINALIZADO",
          cliente: { id: cliente.id },
          produtoIds: cartItens.map(item => item.id), 
          produtoNome: cartItens.map(item => item.nome).join(", "), 
          preco: cartItens.map(item => parseFloat(item.preco)), 
          quantidade: cartItens.map(item => item.quantidade)
        };
        console.log(pedido);
        postPedido(pedido);
        limparProdutos()
      };

    console.log(itens);
  return (
    <div>
      <Helmet>
        <title>Carrinho</title>
      </Helmet>
      <Cabecalho/>
            <h1>Carrinho de Compras {cliente.nome}</h1>
      <ul>
        {itens.map((item) => (
          <li key={item.id}>
            <p>Produto: {item.nome}</p>
            <p>Quantidade: {item.quantidade}</p>
            <img src={item.url}></img>
            <p>Preço: {item.preco}</p>
            <button onClick={() => removerItens(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
     <p>Total do carrinho: {valorTotal}</p>
     <button type="button" onClick={finalizar}>Finalizar Compra</button>
         </div>
  );
};


export default CarrinhoPage;