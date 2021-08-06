export const usuarioAutenticado = () => localStorage.getItem('projeto-inical') !== null;

export const parseJwt = () => {
    let base64 = localStorage.getItem('sp-login').split('.')[1];

    return JSON.parse(window.atob(base64))
}