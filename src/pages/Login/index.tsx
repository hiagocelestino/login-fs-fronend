import { Box, Button, TextField, Typography, Link } from "@mui/material";
import { useEffect, useState } from "react";
import http from "../../http";

export default function Login(){
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    useEffect(()=>{
        setMensagem(mensagem);
    },[mensagem])

    const logar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        http.post('auth', {
            login: login,
            senha: senha
        })
            .then(resposta => {
                if(resposta.data.token){
                    localStorage.setItem("token", JSON.stringify(resposta.data.token));
                }else{
                    const mensagem = resposta.data.mensagem;
                }
            })
        
    }

    return(
        <Box component="form" sx={{ width: '100%' }} onSubmit={logar}>
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
            <Typography component="h3"> Não possui conta? <Link href="#" underline="hover">Cadastra-se aqui!</Link></Typography>
        </Box>
    );
}