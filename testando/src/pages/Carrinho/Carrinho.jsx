import React, { useEffect, useContext, useState } from "react";
import { RequisicoesAPI } from "../../service/clientes";
import { cartContext } from "../../context/carrinhoContext";
import { limparProdutos, obterPefilUsuario } from "../../uteis/localStorage/localStorage"
import Cabecalho from "../../components/paginaInicio/cabecalho";
import { Helmet } from "react-helmet";
import { postPedido } from "../../service/pedido";
import styles from "./carrinho.module.css";

const CarrinhoPage = () => {
  const { getClienteId, loading } = RequisicoesAPI();
  const { removerItens, cartItens, calcularTotal, valorTotal } = useContext(cartContext);
  const [cliente, setCliente] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      document.body.style.display = "hidden";
      alert("Faça login para continuar!");
      setTimeout(() => { window.location.href = "/login" }, 1000);
    }

    const clienteCarregar = obterPefilUsuario();
    setCliente(clienteCarregar);

    const clienteAtualizar = async () => {
      const clienteAtualizado = await getClienteId();
      setCliente(clienteAtualizado);
    };

    if (clienteCarregar) {
      clienteAtualizar();
    }

    calcularTotal();
  }, [cartItens]);

  if (cliente === undefined) {
    return <div>...Carregando...</div>;
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
    limparProdutos();
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Carrinho</title>
      </Helmet>
      <Cabecalho />
      <h1>Carrinho de Compras {cliente.nome}</h1>
      <ul>
        {cartItens.map((item) => (
          <li key={item.id} className={styles.item}>
            <p>Produto: {item.nome}</p>
            <img src={item.url} alt={item.nome} className={styles.image} />
            <p>Quantidade: {item.quantidade}</p>
            <p>Preço: {item.preco}</p>
            <button onClick={() => adicionarItens(item.id)} className={styles.button}>Adicionar</button>
            <button onClick={() => removerItens(item.id)} className={styles.button}>Remover</button>
          </li>
        ))}
      </ul>
      <p className={styles.totalCarrinho}>Total do carrinho: {valorTotal}</p>
      <button type="button" onClick={finalizar} className={styles.button}>Finalizar Compra</button>
    </div>
  );
};

export default CarrinhoPage;
