import React, { useEffect, useContext, useState } from 'react';

import { Grid } from '@material-ui/core';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import AppContext from '../../context/appContext';

const Login = props => {
    const { token } = useContext(AppContext);
    const [showform, setShowForm] = useState(false);

    useEffect( () => {
        if (token)
            props.history.push("/home");

    }, [token, props.history]);

    return(
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <FormLogin showform={showform} setShowForm={setShowForm} />
            <FormRegister showform={showform} setShowForm={setShowForm} />
          </Grid>
        </Grid>
    );
}

export default Login;