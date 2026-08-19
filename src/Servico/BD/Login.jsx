import { BaseURL, usuarioLogin, senhaLogin } from '../../Utilitario/Utilitario';

export const Login = async () => {
    try {

        const resposta = await fetch(`${BaseURL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usuario: usuarioLogin, senha: senhaLogin })
        });
     
        return await resposta.json();
    } catch (error) {
        console.log('Erro ao acessar o serviço de Login', error);
        return null;
    }
};