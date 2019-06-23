import {
    MODIFICA_ADICIONA_CONTATO_EMAIL,
    MODIFICA_ADICIONA_CONTATO_ERRO,
    LISTA_CONTATO_USUARIO
} from '../actions/type'

const INITIAL_STATE = {
    adiciona_contato_email: '',
    cadastro_resultado_txt_erro: 'teste',
    lista_contato_usuario: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFICA_ADICIONA_CONTATO_EMAIL:
            return { ...state, adiciona_contato_email: action.payload }
        case MODIFICA_ADICIONA_CONTATO_ERRO:
            return { ...state, cadastro_resultado_txt_erro: action.payload }
        case LISTA_CONTATO_USUARIO:
            return { ...state, lista_contato_usuario: action.payload }

        default:
            return state;
    }
}