import firebase from 'firebase';
import {NavigationActions} from 'react-navigation'
import b64 from 'base-64';
import {
       MODIFICA_EMAIL,
       MODIFICA_SENHA,
       MODIFICA_NOME,
       CADASTRO_USUARIO_SUCESSO,
       CADASTRO_USUARIO_ERRO,
       LOGIN_USUARIO_SUCESSO,
       LOGIN_USUARIO_ERRO,
       LOGIN_EM_ANDAMENTO,
       CADASTRO_EM_ANDAMENTO
} from './type';

export const modificaEmail = (texto) => {

    return {
        type: MODIFICA_EMAIL,
        payload: texto

    }
}

export const modificaSenha = (texto) => {

    return {
        type: MODIFICA_SENHA,
        payload: texto

    }
}

export const modificaNome = (texto) => {

    return {
        type: MODIFICA_NOME,
        payload: texto

    }
}

export const cadastraUsuario = ({ nome, email, senha }) => {
    
    return dispatch => {
        dispatch({ type: CADASTRO_EM_ANDAMENTO });
        
        firebase.auth().createUserWithEmailAndPassword(email,senha)
            .then(user => {
                let email64 = b64.encode(email);

                firebase.database().ref(`/contatos/${email64}`)
                .push({ nome })
                .then(value => cadastrarUsuarioSucesso(dispatch))
            })
            .catch(erro => cadastrarUsuarioErro(erro, dispatch));
    } 
}

const cadastrarUsuarioSucesso = (dispatch) => {
    dispatch ({ type: CADASTRO_USUARIO_SUCESSO });
    //Actions.BoasVindas();
}


const cadastrarUsuarioErro = (erro, dispatch) => {
    console.log(erro.code)


   var  erroCadastro = ''
    switch (erro.code) {
        case "auth/email-already-in-use":
            erroCadastro = 'Email já existe' ;
            break;
        case "auth/invalid-email":
            erroCadastro = 'Email inválido' ;
            break; 
        case "auth/weak-password":
            erroCadastro = 'Senha deve possuir no minimo 6 caracteres' ;
            break;         
        default:
         erroCadastro = erro.message ;
    }     
    dispatch ({ type: CADASTRO_USUARIO_ERRO ,payload: erroCadastro })

}
export const autenticarUsuario = ({ email, senha,navigation }) => {
    return dispatch => { 
        dispatch({ type: LOGIN_EM_ANDAMENTO });
        
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => loginUsuarioSucesso(dispatch, navigation))
            .catch(erro => loginUsuarioErro(erro, dispatch))
    }
}

const loginUsuarioSucesso = (dispatch,navigation) => {
     dispatch ( 
                {
                    type: LOGIN_USUARIO_SUCESSO
                },
             
            );
      
            navigation.navigate({ routeName: 'Principal' })
}



const loginUsuarioErro = (erro, dispatch) => {
    console.warn("err");
    
    dispatch ( 
        {
            type: LOGIN_USUARIO_ERRO,
            payload: erro.message
        }    
   )
}