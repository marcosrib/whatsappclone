import {
    MODIFICA_ADICIONA_CONTATO_EMAIL,
    MODIFICA_ADICIONA_CONTATO_ERRO,
    LISTA_CONTATO_USUARIO,
    MODIFICA_MENSAGEM
} from './type'
import b64 from 'base-64'
import firebase from 'firebase'
import _ from 'lodash'
export const modificaAdicionaContatoEmail = texto => {

    return {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload: texto
    }
}

export const adicionaContato = email => {
    return dispatch => {

        let emailB64 = b64.encode(email);
        firebase.database().ref(`/contatos/${emailB64}`)
            .once('value').then(snapshot => {
                if (snapshot.val()) {

                    const dadosUsuario = _.first(_.values(snapshot.val()));

                    const { currentUser } = firebase.auth();
                    let emailUsuarioB64 = b64.encode(currentUser.email);
                    firebase.database().ref(`/usuario_contato/${emailUsuarioB64}`)
                        .push({ email, nome: dadosUsuario.nome })
                        .then(() => console.warn('sucesso'))
                        .catch(erro => adicionaContatoErro(erro.message, dispatch))
                } else {
                    dispatch({
                        type: MODIFICA_ADICIONA_CONTATO_ERRO,
                        payload: 'O email informado não corresponde a um email valido'
                    })
                }
            })
    }



}

const adicionaContatoErro = (erro, dispatch) => {
    dispatch({
        type: MODIFICA_ADICIONA_CONTATO_ERRO,
        payload: erro
    })
}

export const contatoUsuarioFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        let emailUsuarioB64 = b64.encode(currentUser.email);
        firebase.database().ref(`/usuario_contato/${emailUsuarioB64}`)
            .on('value', snapshot => {
                const obj = snapshot.val();
                const arrayContatos = []
                arrayContatos.push(obj)
                


                const contatos = _.map(obj, (val, uid) => {
                    return {
                        ...val, uid
                    }
                })

                console.warn(contatos);


                dispatch({
                    type: LISTA_CONTATO_USUARIO,
                    payload: contatos
                })
            })
    }
}

export const modificaMensagem = texto => {
    return {
        type: MODIFICA_MENSAGEM,
        payload: texto
    }
}

export const enviaMensagem = (mensagem, contatoNome, contatoEmail) => {

    const { currentUser } = firebase.auth();
    const usuarioEmail = currentUser.email;
    return dispatch => {

        const usuarioEmailB64 = b64.encode(usuarioEmail);
        const contatoEmailB64 = b64.encode(contatoEmail)

        firebase.database().ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
            .push({ mensagem, tipo: 'e' })
            .then(() => {
                firebase.database().ref(`/mensagens/${contatoEmailB64}/${usuarioEmailB64}`)
                    .push({ mensagem, tipo: 'r' })
                    .then(() => dispatch({ type: '' }))
            })
            .then(() => {
                firebase.database().ref(`/usuario_conversas/${usuarioEmailB64}/${contatoEmailB64}`)
                    .set({ nome: contatoNome, email: contatoEmail })

            })
            .then(() => {
                console.warn(usuarioEmailB64);
                firebase.database().ref(`/contatos/${usuarioEmailB64}`)
                    .once('value')
                    .then(snapshot => {
                          const dadosUsario = _.first(_.values(snapshot.val()));
                        firebase.database().ref(`/usuario_conversas/${contatoEmailB64}/${usuarioEmailB64}`)
                            .set({ nome: dadosUsario.nome, email: usuarioEmail })

                    })

            })
    }
   
}