import { Box, Button, Link, TextField, Typography} from "@mui/material";
import { useState } from "react";
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

    const logar = (evento: React.FormEvent<HTMLFormElement>) => {
        setMensagem('');
        evento.preventDefault();

        http.post('auth', {
            login: login,
            senha: senha
        })
        .then(resposta => {
            if(resposta.data.token){
                tokenService.save(resposta.data.token);
                if(resposta.data.id){
                    userService.save(String(resposta.data.id));
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
                id="standard-basic"
                label="E-mail/CPF/Pis"
                variant="standard"
                fullWidth
                margin="dense"
                required
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

            <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Logar</Button>
            <Typography component="h3"> Não possui conta? <Link href="/cadastrar" underline="hover">Cadastra-se aqui!</Link></Typography>
        </Box>
    );
}