import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";

import { onRegister } from '../../services/auth';
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

const FormRegister = props => {
	const schema = yup.object().shape({
	  name: yup.string()
	  			.required('Este campo es requerido'),
	  email: yup.string()
	  			.email('Este campo debe contener un correo electronico valido')
	  			.required('Este campo es requerido'),
	  password: yup.string()
	  			.required('Este campo es requerido')
	  			.matches(/(?=.*?[0-9])/, 'La contraseña debe contener un numero')
	  			.min(6,'Este campo requiere un minimo de 6 caracteres'),
	  confirmPassword: yup.string()
	  			.required('Este campo es requerido')
	  			.min(6,'Este campo requiere un minimo de 6 caracteres')
	  			.matches(/(?=.*?[0-9])/, 'La contraseña debe contener un numero')
	  			.oneOf([yup.ref('password'), null], 'No coinciden las contraseñas'),
	});
	const { register, handleSubmit, errors } = useForm({
    	resolver: yupResolver(schema)
  	});
	const [ message, setMessage ] = useState('');
	const [ loading, setLoading ] = useState(false);
	const classes = useStyles();
	
	const Submit = async data => {
		setLoading(true);
		const resp = await onRegister(data);
		if (resp.data){
			props.setShowForm(false);
		}
		else{
			if (resp.response.status === 402)
				setMessage("El correo electronico ya existe");
			else
				setMessage(resp.response ? resp.response.data.message : "Error de conexion");
		}

		setLoading(false);
	}

  if (props.showform === false) return null;
  return (
  	<Fade in={props.showform}>
	  	<Card className={classes.login}>
	  		<CardContent>
	  			<AccountCircleIcon className={classes.icono} />
	  			<Typography variant="h5" className={classes.titulo} component="h2">
	  				Registro de Usuario
	  			</Typography>
	  			<Typography variant="body2" className={classes.subtitulo} component="h2">
	  				Favor de llenar todos los campos
	  			</Typography>
		  		<form className={classes.root} onSubmit={handleSubmit(Submit)}>
		  		  <TextField 
			      error={errors.name}
			      helperText={errors.name?.message}
			      label="Nombre" 
			      name="name" 
			      type="text"
			      disabled={loading} 
			      inputRef={register}
			      variant="outlined" />

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

			      <TextField 
			      error={errors.confirmPassword}
			      helperText={errors.confirmPassword?.message}
			      label="Confirmar Contraseña" 
			      name="confirmPassword" 
			      type="password"
			      disabled={loading} 
			      inputRef={register}
			      variant="outlined" />
			     
			    <Grid container className={classes.menuButton}>
			    	<Grid item sm={6}>
			    		<Button 
				      	type="button"
				      	onClick={() => props.setShowForm(false)} 
				      	disabled={loading}
				      	color="primary">
				      		Iniciar Sesion
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
					      		Registrarse
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

export default FormRegister;