import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";

import { onLogin } from '../../services/auth';
import AppContext from '../../context/appContext';
import useStyles from './styles';
import Alert from '@material-ui/lab/Alert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { 
	TextField, 
	Card, 
	CardContent, 
	Button, 
	CircularProgress, 
	Typography, 
	Grid,
	Fade 
} from '@material-ui/core';

const FormLogin = props => {
	const schema = yup.object().shape({
	  email: yup.string()
	  			.email('El correo electronico debe ser valido')
	  			.required('El correo electronico es requerido'),
	  password: yup.string()
	  			.required('La contraseña es requerida')
	  			.min(6,'La contraseña debe ser minimo de 6 caracteres')
	  			.matches(/(?=.*?[0-9])/, 'La contraseña debe contener un numero'),
	});
	const { register, handleSubmit, errors } = useForm({
    	resolver: yupResolver(schema)
  	});
	const [ message, setMessage ] = useState('');
	const [ loading, setLoading ] = useState(false);
	const { setLogin } = useContext(AppContext);
	const classes = useStyles();
	
	const Submit = async data => {
		setLoading(true);
		const resp = await onLogin(data);
		if (resp.data)
			setLogin(resp.data);
		else
			setMessage(resp.response ? resp.response.data.message : "Error de conexion");
		setLoading(false);
	}

  if (props.showform === true) return null;
  return (
  	<Fade in={!props.showform}>
	  	<Card className={classes.login}>
	  		<CardContent>
	  			<AccountCircleIcon className={classes.icono} />
	  			<Typography variant="h5" className={classes.titulo} component="h2">
	  				Iniciar Sesión
	  			</Typography>
	  			<Typography variant="body2" className={classes.subtitulo} component="h2">
	  				Ingresar tu correo y contraseña
	  			</Typography>
		  		<form className={classes.root} onSubmit={handleSubmit(Submit)}>
			      <TextField 
			      error={errors.email}
			      helperText={errors.email?.message}
			      label="Correo Electronico" 
			      name="email" 
			      type="email"
			      disabled={loading} 
			      inputRef={register}
			      variant="outlined" />
			      
			      <TextField 
			      error={errors.password}
			      helperText={errors.password?.message}
			      label="Contraseña" 
			      name="password" 
			      type="password"
			      disabled={loading} 
			      inputRef={register}
			      variant="outlined" />
			     
			    <Grid container className={classes.menuButton}>
			    	<Grid item sm={6}>
			    		<Button 
				      	type="button"
				      	onClick={() => props.setShowForm(true)} 
				      	disabled={loading}
				      	color="primary">
				      		Crear Cuenta
				      	</Button>
			    	</Grid>
			    	<Grid item sm={6} className={classes.button}>
			    		 {loading ? (
					    	<CircularProgress /> 
					    ) : (
					    	<Button 
					      	type="submit" 
					      	variant="contained" 
					      	disabled={loading}
					      	color="primary">
					      		Acceder
					      	</Button>
					    )}
			    	</Grid>
			    </Grid>
			    
			    </form>
		    	{ message ? (
		    		<Alert severity="error" className={classes.message}> 
		    			{message} 
		    		</Alert>
		    	) : null}
		    </CardContent> 
	  	</Card>
  	</Fade>
  )
}

export default FormLogin;