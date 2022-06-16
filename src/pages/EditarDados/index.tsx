import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../http";
import { tokenService } from "../../services/authService";

export default function EditarDados(){
    const navigate = useNavigate();
    const [userNome, setUserNome ] = useState('');
    const [enderecoCep, setEnderecoCep ] = useState('');
    const [enderecoComplemento, setEnderecoComplemento ] = useState('');
    const [enderecoEstado, setEnderecoEstado ] = useState('');
    const [enderecoMunicipio, setEnderecoMunicipio ] = useState('');
    const [enderecoNumero, setEnderecoNumero ] = useState('');
    const [enderecoPais, setEnderecoPais ] = useState('');
    const [enderecoRua, setEnderecoRua ] = useState('');

    useEffect(()=>{
        http.get('/usuario',{
            headers: {
                'Authorization': `${tokenService.isAuthenticated() ? tokenService.get() : ''} `,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(resposta => {
            if(resposta.data){
                let data = resposta.data;
                    setUserNome(data.nome);
                    setEnderecoCep(data.endereco.cep)
                    setEnderecoComplemento(data.endereco.complemento)
                    setEnderecoEstado(data.endereco.estado)
                    setEnderecoMunicipio(data.endereco.municipio)
                    setEnderecoNumero(data.endereco.numero)
                    setEnderecoPais(data.endereco.pais)
                    setEnderecoRua(data.endereco.rua)    
                }
            })
        }, []);

        const atualizarDados = (evento: React.FormEvent<HTMLFormElement>)=>{
            evento.preventDefault();

            let dados = {
                nome: userNome,
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
            http.put('/usuario', dados, {
                headers: {
                    'Authorization': `${tokenService.isAuthenticated() ? tokenService.get() : ''} `,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then( resposta => {
                alert(resposta.data.mensagem);
                navigate("/");
            })
        }

    return(
        <Box component="form" sx={{ width: '100%' }} onSubmit={atualizarDados} >

            <TextField
                value={userNome}
                onChange={evento => setUserNome(evento.target.value)}
                id="standard-basic"
                label="Nome"
                variant="standard"
                fullWidth
                margin="dense"
            />

            <Typography component="h3"> Dados de Endereço</Typography>

            <TextField
                value={enderecoPais}
                onChange={evento => setEnderecoPais(evento.target.value)}
                id="standard-basic"
                label="País"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                value={enderecoEstado}
                onChange={evento => setEnderecoEstado(evento.target.value)}
                id="standard-basic"
                label="Estado"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                value={enderecoMunicipio}
                onChange={evento => setEnderecoMunicipio(evento.target.value)}
                id="standard-basic"
                label="Município"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                value={enderecoCep}
                onChange={evento => setEnderecoCep(evento.target.value)}
                id="standard-basic"
                label="CEP"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                value={enderecoRua}
                onChange={evento => setEnderecoRua(evento.target.value)}
                id="standard-basic"
                label="Rua"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                value={enderecoNumero}
                onChange={evento => setEnderecoNumero(evento.target.value)}
                id="standard-basic"
                label="Número"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                value={enderecoComplemento}
                onChange={evento => setEnderecoComplemento(evento.target.value)}
                id="standard-basic"
                label="Complemento"
                variant="standard"
                fullWidth
                margin="dense"
            />
            
            <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Atualizar</Button>
        </Box>
    );
}