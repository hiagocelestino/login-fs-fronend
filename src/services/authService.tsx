const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';

export const tokenService = {
    save(accessToken:string){
        globalThis.sessionStorage.setItem('ACCESS_TOKEN_KEY', accessToken);
    },
    get(){
        return globalThis.sessionStorage.getItem(ACCESS_TOKEN_KEY);
    },
    delete(){
        globalThis.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    },
    isAuthenticated(){
       return this.get() != null;
    }
}