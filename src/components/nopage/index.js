import React from 'react';
import { Link } from 'react-router-dom';
import { 
	Grid, 
	Card, 
	CardContent, 
	Typography 
} from '@material-ui/core';
import Style from './styles';

const Nopage = (props) => {
  const classes = Style();

  return (
    <Grid
	  container
	  direction="row"
	  justify="center"
	  alignItems="center">

	  <Grid item xs={5}>
	  	<Card className={classes.root}>
	  		<CardContent>
	  			<Typography variant='h2' component='h2' className={classes.titulo}>
	  				OOOPS!
	  			</Typography>
	  			<Typography variant='body1' component='h2' className={classes.subtitulo}>
	  				No existe la pagina o se encuentra fuera de servicio
	  			</Typography>
	  			<Link
	  			to="/"
	  			className={classes.button}>
	  				Regresar al inicio
	  			</Link>
	  		</CardContent>
	  	</Card>
	  </Grid>

    </Grid>
  )
}

export default Nopage;