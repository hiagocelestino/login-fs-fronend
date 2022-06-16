import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import http from "../../http";

export default function Cadastro(){
    const [userNome, setUserNome ] = useState('');
    const [userSenha, setUserSenha] = useState('');
    const [userPis, setUserPis] = useState('');
    const [userCpf, setUserCpf ] = useState('');
    const [userEmail, setUserEmail ] = useState('');
    const [enderecoCep, setEnderecoCep ] = useState('');
    const [enderecoComplemento, setEnderecoComplemento ] = useState('');
    const [enderecoEstado, setEnderecoEstado ] = useState('');
    const [enderecoMunicipio, setEnderecoMunicipio ] = useState('');
    const [enderecoNumero, setEnderecoNumero ] = useState('');
    const [enderecoPais, setEnderecoPais ] = useState('');
    const [enderecoRua, setEnderecoRua ] = useState('');
    const navigate = useNavigate();

    const cadastrarUsuario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        let dados = {
            nome: userNome,
            senha: userSenha,
            pis: userPis,
            cpf: userCpf,
            email: userEmail,
            endereco: {
                cep: enderecoCep,
                complemento: enderecoComplemento,
                estado: enderecoEstado,
                municipio: enderecoMunicipio,
                numero: enderecoNumero,
                pais: enderecoPais,
                rua: enderecoRua 
            }
        }
        
        http.post('/usuario', dados)
        .then( resposta => {
            alert(resposta.data.mensagem);
            navigate('/');
        })
        .catch(response =>{
            alert(response.response.data.mensagem);
        })
    }

    return(
        <Box component="form" sx={{ width: '100%' }} onSubmit={cadastrarUsuario} >

            <TextField
                onChange={evento => setUserNome(evento.target.value)}
                id="standard-basic"
                label="Nome"
                variant="standard"
                fullWidth
                margin="dense"
            />

            <TextField
                onChange={evento => setUserSenha(evento.target.value)}
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                fullWidth
                margin="dense"
            />
            
            <TextField
                onChange={evento => setUserEmail(evento.target.value)}
                id="standard-basic"
                label="Email"
                variant="standard"
                fullWidth
                margin="dense"
                helperText="nome@email.com"
                inputProps={{ inputMode: 'numeric', pattern: '/.+\\@.+\\..+' }}
            />
            <TextField
                onChange={evento => setUserCpf(evento.target.value)}
                id="standard-basic"
                label="CPF"
                variant="standard"
                fullWidth
                margin="dense"
                helperText="Insira somente números"
                inputProps={{ inputMode: 'numeric', pattern: '^(\\d{0,11})$' }}
            />
            <TextField
                onChange={evento => setUserPis(evento.target.value)}
                id="standard-basic"
                label="Pis"
                variant="standard"
                fullWidth
                margin="dense"
                helperText="Insira somente números"
                inputProps={{ inputMode: 'numeric', pattern: '^(\\d{0,11})$' }}
            />

            <Typography sx={{mt:2}} component="h2"> Dados de Endereço</Typography>

            <TextField
                onChange={evento => setEnderecoPais(evento.target.value)}
                id="standard-basic"
                label="País"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                onChange={evento => setEnderecoEstado(evento.target.value)}
                id="standard-basic"
                label="Estado"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                onChange={evento => setEnderecoMunicipio(evento.target.value)}
                id="standard-basic"
                label="Município"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                onChange={evento => setEnderecoCep(evento.target.value)}
                id="standard-basic"
                label="CEP"
                variant="standard"
                fullWidth
                margin="dense"
                helperText="Insira somente números"
                inputProps={{ inputMode: 'numeric', pattern: '^(\\d{0,8})$' }}
            />
            <TextField
                onChange={evento => setEnderecoRua(evento.target.value)}
                id="standard-basic"
                label="Rua"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                onChange={evento => setEnderecoNumero(evento.target.value)}
                id="standard-basic"
                label="Número"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                onChange={evento => setEnderecoComplemento(evento.target.value)}
                id="standard-basic"
                label="Complemento"
                variant="standard"
                fullWidth
                margin="dense"
            />
            
            <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Cadastrar</Button>
        </Box>
    );
}