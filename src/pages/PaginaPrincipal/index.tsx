import { Box} from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { userService } from '../../services/userService';
import Saudacao from '../Saudacao';
import styles from './PaginaPrincipal.module.scss';

export default function PaginaPrincipal(){
    const [usuario, setUsuario] = useState('');

    let nome = userService.getNome();
    useEffect(()=>{
        if(nome){
            setUsuario(nome);
        }
    }, [nome])

    return(
        <section className={styles.container}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1}}>
                <Saudacao usuario={usuario} />
                <Outlet />
            </Box>
        </section>
    );
}