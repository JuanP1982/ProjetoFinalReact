import './App.css'
import { ClienteProvider } from './context/clienteContext'
import { ProdutoProvider } from './context/produtosContext'
import { Rotas } from './Routes/routes'


function App() {


  return (
    <>
    <ProdutoProvider>
      <ClienteProvider>  
      <Rotas/>
      </ClienteProvider>
    </ProdutoProvider>
    </>
  )
}

export default App
