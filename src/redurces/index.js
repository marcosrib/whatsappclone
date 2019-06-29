import { combineReducers } from 'redux';
import AutenticacaoReducer from './AutenticacaoReducer';
import AppReducer from './AppReducer';
import ListaConversasReducer from  './ListaConversasReducer'
export default combineReducers({
AutenticacaoReducer,
AppReducer,
ListaConversasReducer

});
