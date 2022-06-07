import { Box, Button, Link, TextField, Typography } from '@mui/material';
import Cadastro from '../Cadastro';
import Login from '../Login';
import Saudacao from '../Saudacao';
import styles from './PaginaPrincipal.module.scss';

export default function PaginaPrincipal(){
    return(
        <section className={styles.container}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
                <Saudacao />
                <Login />
            </Box>
        </section>
    );
}