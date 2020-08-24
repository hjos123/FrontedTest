import React, { useContext } from 'react';
import AppContext from '../../context/appContext';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = props => {
	const { setLogout, user } = useContext(AppContext);
	const classes = useStyles();

	return (
		<div className={classes.root}>
	      <AppBar position="static">
	        <Toolbar>
	          <Typography variant="h6" className={classes.title}>
	            Hola, <b>{user.name}</b> 
	          </Typography>
	          <IconButton
	          onClick={setLogout} 
	          color="inherit" 
	          aria-label="Cerrar Sesion">
				 <ExitToAppIcon />
			  </IconButton>
	        </Toolbar>
	      </AppBar>
	    </div>
	)
}

export default Navbar;