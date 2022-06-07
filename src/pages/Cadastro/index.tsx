import { Box, Button, TextField, Typography } from "@mui/material";

export default function Cadastro(){
    return(
        <Box component="form" sx={{ width: '100%' }} >

            <TextField
                id="standard-basic"
                label="Nome"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                id="standard-basic"
                label="CPF"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                id="standard-basic"
                label="Pis"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                fullWidth
                margin="dense"
            />

            <Typography component="h3"> Dados de Endereço</Typography>

            <TextField
                id="standard-basic"
                label="País"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                id="standard-basic"
                label="Estado"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                id="standard-basic"
                label="Município"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                id="standard-basic"
                label="CEP"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                id="standard-basic"
                label="Rua"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                id="standard-basic"
                label="Número"
                variant="standard"
                fullWidth
                margin="dense"
            />
            <TextField
                id="standard-basic"
                label="Completo"
                variant="standard"
                fullWidth
                margin="dense"
            />
            
            <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Cadastrar</Button>
        </Box>
    );
}