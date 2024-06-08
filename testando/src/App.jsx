import './App.css'
import { ClienteProvider } from './context/clienteContext'
import { ProdutoProvider } from './context/produtosContext'
import { Rotas } from './Routes/routes'
import Cabecalho from './components/paginaInicio/cabecalho'
import Rodape from './components/paginaInicio/rodape'


function App() {


  return (
    <>
    <ProdutoProvider>
      <ClienteProvider> 
        <Cabecalho/> 
      <Rotas/>
      <Rodape/>
      </ClienteProvider>
    </ProdutoProvider>
    </>
  )
}

export default App
