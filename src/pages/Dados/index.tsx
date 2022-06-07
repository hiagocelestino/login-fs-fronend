import { Button, Link, Typography} from "@mui/material";

export default function Dados(){
    return(
        <>
            <Button variant="outlined">Editar Dados</Button>
            <Button variant="outlined" color="error">Logout</Button>
            <Typography component="h3"><Link href="#" underline="hover">Deletar conta</Link></Typography>
        </>
    );
}