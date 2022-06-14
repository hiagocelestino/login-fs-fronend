import { tokenService } from "../services/authService";

interface Props{
    'authorization':string;
    'Accept':string;
    'Content-Type': string;
}

export default function header():Props{
    return(
       {
            'authorization': `${tokenService.isAuthenticated() ? tokenService.get() : ''} `,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    )
}