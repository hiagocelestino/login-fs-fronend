import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Dados from './pages/Dados';
import EditarDados from './pages/EditarDados';
import Login from './pages/Login';
import PaginaPrincipal from './pages/PaginaPrincipal';
import { tokenService } from './services/authService';


interface Autenticacao{
    children: JSX.Element
}

export default function AppRouter(){
    const PrivateRoute = ({children }:Autenticacao) => {
        return tokenService.isAuthenticated() ? children : <Navigate to="/" />;
    };
    
    return(
        <main className='container'>
            <Router>
                <Routes>
                    <Route path='/' element={<PaginaPrincipal />} >
                        <Route index element={<Login />} />
                        <Route 
                            path='dados'
                            element={
                                <PrivateRoute>
                                  <Dados />
                                </PrivateRoute>
                              }
                        />
                        <Route 
                            path='editar'
                            element={
                                <PrivateRoute>
                                  <EditarDados />
                                </PrivateRoute>
                            }
                        />
                        <Route path='/cadastrar' element={<Cadastro />} />
                    </Route>

                </Routes>
            </Router>
        </main>
    );
}