import React, {useReducer, useEffect} from 'react';
import appContext from './appContext';
import appReducer from './appReducer';
import {
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  VALIDADO_EXITOSO
} from '../types';
import { validToken } from '../services/auth';

const AppState = props => {
  const initialState = {
    token: localStorage.getItem(process.env.REACT_APP_TOKEN_NAME),
    user: [],
  }

  const [state, dispatch] = useReducer(appReducer, initialState);

  const setLogin = data => {
    dispatch({
      type: LOGIN_EXITOSO,
      payload: data
    });
  }

  const setLogout = () => {
    dispatch({
      type: LOGIN_ERROR
    });
  }

  useEffect(() => {
    const token = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME);
    const validar = async() => {
        const resp = await validToken();
        if (resp.status === 200)
          dispatch({
            type: VALIDADO_EXITOSO,
            payload: resp.data
          });
        else
          dispatch({
            type: LOGIN_ERROR
          });
    }

    if (token)
      validar();
  }, []);

  return(
    <appContext.Provider
    value={{
      user: state.user,
      token: state.token,
      setLogin,
      setLogout,
    }} >
      {props.children}
    </appContext.Provider>
  );
}

export default AppState;
