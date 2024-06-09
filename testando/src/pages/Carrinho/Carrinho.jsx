import React, { useEffect,useContext, useState } from "react";
import { cartContext } from "../../context/carrinhoContext";
import { getClienteId, getClientes } from "../../service/clientes"
import { limparLocalStorage, obterPefilUsuario, obterProdutosCarrinho, obterToken } from "../../uteis/localStorage/localStorage"
import Cabecalho from "../../components/paginaInicio/cabecalho";

const CarrinhoPage = () => {
  const [cliente, setCliente] = useState(undefined)
  const [itens, setItens] = useState([])
 const {removerItens, cartItens } = useContext(cartContext)

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
    
    }, [])

    useEffect(() => {
      setItens(cartItens);
    }, [cartItens]);
    

    if (cliente === undefined) {
      return <div>...Carregando...</div>
      }


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
            <p>Preço: {item.preco}</p>
            <button onClick={() => removerItens(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
     
         </div>
  );
};

export default CarrinhoPage;