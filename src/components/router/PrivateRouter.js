import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
import AppContext from '../../context/appContext';

const PrivateRouter = ({component: Component, ...props}) => {
  const { token } = useContext(AppContext);

  return (
    <Route {...props} render={ props => !token ? (
      <Redirect to="/" />
    ) : (
      <Component {...props} />
    ) } />
  )
}

export default PrivateRouter;