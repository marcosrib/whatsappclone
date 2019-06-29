const INITIAL_STATE = {}
import { LISTA_CONVERSA_USUARIO } from '../actions/type'
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LISTA_CONVERSA_USUARIO:
        return action.payload
        default:
            return state
    }
}