import { BaseURL } from "../../Utilitario/Utilitario";
import { Login } from "./Login";

export const getPessoa = async (idPessoa) => {
    try{
        const token = await Login();  
             
        if (!token){
          console.error('Token de autenticação não disponível');
          return [];
        }

        const resposta = await fetch(`${BaseURL}/Pessoa/${idPessoa}`, {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               'Authorization' : `Bearer ${token.token}` 
            }
        });

        return await resposta.json();
    }
    catch (error) {
        console.log('Erro ao acessar o serviço de pessoa', error);
        return null;
    }
}    

export const getPessoas = async() => {
    try{
       const token = await Login();     

       if (!token){
         console.error('Token de autenticação não disponível');
         return [];
       }

       const resposta = await fetch(`${BaseURL}/ListaPessoas`, {
          method: 'GET',
          headers: {
             'Content-Type' : 'application/json',
             'Authorization' : `Bearer ${token.token}`
          }
       });

       return await resposta.json();


    }
    catch (error) {
        console.log('Erro ao acessar o serviço de listar pessoas', error);
        return null;
    }
}

export const postPessoa = async (pessoa) => {
    try
    {
        const token = await Login();     

        if (!token){
          console.error('Token de autenticação não disponível');
          return [];
        }

        const resposta = await fetch(`${BaseURL}/Inserir`, {
            method: 'POST',
            headers: {
               'Content-Type' : 'application/json',
               'Authorization' : `Bearer ${token.token}`
            },
            body: JSON.stringify(pessoa)
        });

        return await resposta.json(); 

    }
    catch (error) {
        console.log('Erro ao acessar o serviço de post de pessoa', error);
        return null;
    }

}

export const putPessoa = async (pessoa) => {
    try
    {
        const token = await Login();     

        if (!token){
          console.error('Token de autenticação não disponível');
          return [];
        }

        const resposta = await fetch(`${BaseURL}/AlterarPessoa/${pessoa.idPessoa}`, {
            method: 'PUT',
            headers: {
               'Content-Type' : 'application/json',
               'Authorization' : `Bearer ${token.token}`
            },
            body: JSON.stringify(pessoa)
         });
  
         return await resposta.json(); 

    }
    catch (error) {
        console.log('Erro ao acessar o serviço de put de pessoa', error);
        return null;
    }
}

