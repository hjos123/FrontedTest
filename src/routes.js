import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import PrivateRouter from './components/router/PrivateRouter';
import Login from './components/login';
import Home from './components/home';
import Nopage from './components/nopage';

const Routes = props => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRouter path="/home" component={Home} />
            <Route component={Nopage} />
        </Switch>
    );
}

export default Routes;