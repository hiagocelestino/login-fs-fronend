import { Button, Link, Typography} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import http from "../../http";
import header from "../../http/header";
import { tokenService } from "../../services/authService";
import { userService } from "../../services/userService";

export default function Dados(){
    const navigate = useNavigate();
    
    const editarDados = () => navigate("/editar");

    const logout = () => {
        userService.logout();
        navigate("/")
    }

    const deletarConta = () => {
        http.delete('/usuario', {
            headers: {
                'authorization': `${tokenService.isAuthenticated() ? tokenService.get() : ''} `,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then( resposta => {
            alert(resposta.data.mensagem);
            <Navigate to="/" />
        })
    }

    return(
        <>
            <Button variant="outlined" onClick={editarDados}>Editar Dados</Button>
            <Button variant="outlined" onClick={logout} color="error">Logout</Button>
            <Typography component="h3"><Link onClick={deletarConta} underline="hover">Deletar conta</Link></Typography>
        </>
    );
}