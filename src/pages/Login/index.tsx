import { Box, Button, Link, TextField, Typography} from "@mui/material";
import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import http from "../../http";
import { tokenService } from "../../services/authService";
import { userService } from "../../services/userService";
import MensagemLogin from "./MensagemLogin";

export default function Login(){
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    useEffect(()=>{
        tokenService.isAuthenticated() ? navigate("/dados") : setMensagem(''); 
    }, [])

    const limpaMensagem = () => {
        setMensagem('');
    }

    const logar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        http.post('auth', {
            login: login,
            senha: senha
        })
        .then(resposta => {
            if(resposta.data.token){
                tokenService.save(resposta.data.token);
                if(resposta.data.nome){
                    userService.saveNome(resposta.data.nome);
                }
                navigate("/dados");
            }else{
                const mensagem = resposta.data.mensagem;
                setMensagem(mensagem);
            }
        })
    }

    return(
        <Box component="form" sx={{ width: '100%' }} onSubmit={logar}>

            <MensagemLogin mensagem={mensagem} />

            <TextField
                onChange={evento => setLogin(evento.target.value)}
                onClick={limpaMensagem}
                id="standard-basic"
                label="E-mail/CPF/Pis"
                variant="standard"
                fullWidth
                margin="dense"
                required
                sx={{ pb: 2 }}
            />

            <TextField
                onChange={evento => setSenha(evento.target.value)}
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                fullWidth
                margin="dense"
                required
            />

            <Button  sx={{ my: 5 }} type="submit" fullWidth variant="outlined">Logar</Button>
            <Typography  sx={{ py: 5 }} component="h3"> Não possui conta? <Link href="/cadastrar" underline="hover">Cadastra-se aqui!</Link></Typography>
        </Box>
    );
}