import { Typography } from "@mui/material";

interface Props{
    nome: string | null
}

export default function Saudacao({nome}:Props){
    
    return(
        <Typography   component="h1" variant="h6"> Olá, {nome ? nome : 'Visitante'}!</Typography>
    );
}