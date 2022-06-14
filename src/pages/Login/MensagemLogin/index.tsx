import { Typography } from "@mui/material";

interface Props{
    mensagem: string|null
}

export default function MensagemLogin({mensagem}:Props){
    return(
        <Typography component="h3" sx={{color: 'red' }}>{mensagem}</Typography>
    );
}