import './App.css';
import { ClienteProvider } from './context/clienteContext';
import { ProdutoProvider } from './context/produtosContext';
import { Rotas } from './Routes/routes';
import Cabecalho from './components/paginaInicio/cabecalho';  
import Rodape from './components/paginaInicio/rodape';
import { CartProvider } from './context/carrinhoContext';

function App() {
  return (
    <ProdutoProvider>
        <ClienteProvider>
      <CartProvider>
          <Rotas />
    </CartProvider>
    
        </ClienteProvider>
      </ProdutoProvider>
  );
}

export default App;