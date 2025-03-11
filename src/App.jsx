import './App.css';
import PaginaInicial from './componentes/paginaInicial/PaginaInicial';
import SobreMim from './componentes/sobreMim/SobreMim';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Importando o BrowserRouter e Route do react-router-dom.

function App() {
  

  return (
   
    // Envolve o componente App com o componente BrowserRouter
    <BrowserRouter basename="/meu_portifolio"> 

        {/* O componente Routes permite que você crie várias rotas que são renderizadas com base na URL atual */}
        <Routes>

            {/* A propriedade element do componente Route é usada para definir o componente que será renderizado quando a URL corresponder ao caminho definido na propriedade path */}
            <Route path="/" element={<PaginaInicial/>} />
            <Route path="/sobre-mim" element={<SobreMim/>} />

        </Routes>

    </BrowserRouter>

  )

}

export default App;
