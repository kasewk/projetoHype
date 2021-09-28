import { BrowserRouter, Route } from 'react-router-dom'


import ListaPredio from './pages/ListaPredio'
import CadastroPredio from './pages/CadastroPredio'
import Apartamentos from './pages/Apartamentos'
import CadastroApartamento from './pages/CadastroApartamento'


function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={ListaPredio} />
            <Route exact path="/cadastropredio" component={CadastroPredio} />
            <Route exact path="/apartamentos/:id" component={Apartamentos} />
            <Route exact path="/cadastroapartamento" component={CadastroApartamento} />
        </BrowserRouter>
    );
}

export default App;
