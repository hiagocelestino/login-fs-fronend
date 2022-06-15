import { Typography } from "@mui/material";

interface Props{
    usuario: string | null
}

export default function Saudacao({usuario}:Props){
    return(
        <Typography   component="h1" variant="h6"> Olá, {usuario ? usuario : 'Visitante'}!</Typography>
    );
}