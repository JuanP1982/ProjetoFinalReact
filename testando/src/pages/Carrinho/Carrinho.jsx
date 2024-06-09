import React, { useEffect,useContext, useState } from "react";
import { cartContext } from "../../context/carrinhoContext";
import { getClienteId, getClientes } from "../../service/clientes"
import { limparLocalStorage, obterPefilUsuario, obterProdutosCarrinho, obterToken } from "../../uteis/localStorage/localStorage"
import Cabecalho from "../../components/paginaInicio/cabecalho";
import { postPedido } from "../../service/pedido";

const CarrinhoPage = () => {
  const {removerItens, cartItens, calcularTotal, valorTotal } = useContext(cartContext)
  const [cliente, setCliente] = useState(undefined)
  const [itens, setItens] = useState([])

 useEffect(()=>{
  if (localStorage.getItem("token") === null) {
      document.body.style.display = "hidden"
      alert("Faça login para continuar!")
      setInterval(()=>{window.location.href="/cadastro"},1000)
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
    }, [cartItens]);
    

    if (cliente === undefined) {
      return <div>...Carregando...</div>
      }

      const finalizar = () => {
        const pedido = {
          status: "FINALIZADO",
          cliente: { id: cliente.id },
          produtoIds: cartItens.map(item => item.id), 
          produtoNome: cartItens.map(item => item.nome).join(", "), 
          preco: cartItens.map(item => item.preco).join(", "), 
          quantidade: cartItens.map(item => item.quantidade).join(", ") 
        };
        console.log(pedido);
        postPedido(pedido);
      };

    console.log(itens);
  return (
    <div>
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