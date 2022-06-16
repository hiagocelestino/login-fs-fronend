import { Box, Button, Link, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import http from "../../http";
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
            userService.logout();
            alert(resposta.data.mensagem);
            navigate("/")
        })
    }

    return(
        <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <Button sx={{my:5}} variant="outlined" onClick={editarDados}>Editar Dados</Button>
            <Button sx={{my:5}} variant="outlined" onClick={logout} color="error">Logout</Button>
            <Typography sx={{my:5}} component="h3"><Link onClick={deletarConta} underline="hover">Deletar conta</Link></Typography>
        </Box>
    );
}