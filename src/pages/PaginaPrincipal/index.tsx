import { Box} from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { userService } from '../../services/userService';
import Saudacao from '../Saudacao';
import styles from './PaginaPrincipal.module.scss';

export default function PaginaPrincipal(){
    const [nome, setNome] = useState<string|null>('');

    let nomeUsuario = userService.getNome();

    useEffect(()=>{
        if(nomeUsuario){
            setNome(nomeUsuario);
        }
    }, [nomeUsuario])

    return(
        <section className={styles.container}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1}}>
                <Saudacao nome={nome} />
                <Outlet />
            </Box>
        </section>
    );
}