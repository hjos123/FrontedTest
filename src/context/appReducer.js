import {
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  VALIDADO_EXITOSO
} from '../types';

export default (state, action) => {
  switch(action.type){
    case VALIDADO_EXITOSO:
    return{
      ...state,
      user: action.payload.usuario
    }
    case LOGIN_EXITOSO:
    localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, action.payload.token);
    return{
      ...state,
      token: action.payload.token,
      user: action.payload.usuario
    }
    case LOGIN_ERROR:
    localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME);
    return{
      ...state,
      token: null,
      user: null
    }
    default:
      return state;
  }
}
