import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import PaginaPrincipal from './pages/PaginaPrincipal';

export default function AppRouter(){
    return(
        <main className='container'>
            <Router>
                <Routes>
                    <Route path='/' element={<PaginaPrincipal />} >
                        <Route index element={<Cadastro />} />
                    </Route>

                </Routes>
            </Router>
        </main>
    );
}