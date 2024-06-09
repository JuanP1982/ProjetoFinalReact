import { createContext, useState, useEffect } from "react";
import { obterProdutosCarrinho } from "../uteis/localStorage/localStorage";
import { salvarProdutosCarrinho } from "../uteis/localStorage/localStorage";

const cartContext = createContext();

const CartProvider = (props) => {
  const [cartItens, setCartItens] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    const itensSalvos = obterProdutosCarrinho();
    setCartItens(itensSalvos);
  }, []);

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
  
    setCartItens(novosItens);
    salvarProdutosCarrinho(novosItens);
  }

  function removerItens(id) {
    const novosItens = cartItens.filter(item => item.id !== id);
  
    setCartItens(novosItens);
    salvarProdutosCarrinho(novosItens);
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
        }}
      >
        {props.children}
      </cartContext.Provider>
    </>
  );
};

export { cartContext, CartProvider };