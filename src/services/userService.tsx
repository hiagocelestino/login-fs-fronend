const USER = 'USER';
const NOME = 'NOME';

export const userService = {
    get(){
        return globalThis.sessionStorage.getItem(USER);
    },
    delete(){
        globalThis.sessionStorage.removeItem(USER);
    },
    isId(){
       return this.get() != null;
    },
    saveNome(nome:string){
        globalThis.sessionStorage.setItem('NOME', nome);
    },
    getNome(){
        return globalThis.sessionStorage.getItem(NOME);
    },
    logout(){
        sessionStorage.clear();
    }
}