import { createContext, useState, useEffect } from "react";
import { obterProdutosCarrinho } from "../uteis/localStorage/localStorage";
import { salvarProdutosCarrinho } from "../uteis/localStorage/localStorage";

const cartContext = createContext();

const CartProvider = (props) => {
  const [cartItens, setCartItens] = useState(obterProdutosCarrinho());
  const [valorTotal, setValorTotal] = useState(0);

  

  function adicionarItens(novoProduto) {
    const produtoExistente = cartItens.find(produto => produto.id === novoProduto.id);
  
   var novosItens;
    
    if (produtoExistente) {
      novosItens = cartItens.map(item => {
        if (item.id === novoProduto.id) {
          return { ...item, quantidade: item.quantidade + 1 };
        }
        return item;
      });
    } else {
      novosItens = [...cartItens, { ...novoProduto, quantidade: 1 }];
    }
  calcularTotal()
    setCartItens(novosItens);
    salvarProdutosCarrinho(novosItens);
  }

  function removerItens(id) {
    const novosItens = cartItens.map(item => {
      if (item.id === id) {
        return { ...item, quantidade: item.quantidade - 1 };
      }
      return item;
    }).filter(item => item.quantidade > 0);
  
    setCartItens(novosItens);
    salvarProdutosCarrinho(novosItens);
  }

  function calcularTotal() {
    let total = 0;
    cartItens.forEach((item) => {
      total += item.preco * item.quantidade;
    });
    setValorTotal(total);
  }

  function limparCarrinho() {
    setCartItens([]);
    
  }

  

  return (
    <>
      <cartContext.Provider
        value={{
          cartItens,
          adicionarItens,
          removerItens,
          limparCarrinho,
          calcularTotal,
          valorTotal
        }}
      >
        {props.children}
      </cartContext.Provider>
    </>
  );
};

export { cartContext, CartProvider };