import React from 'react';
import { 
	Grid, 
	Card, 
	CardContent, 
	Typography, 
	IconButton, 
	Grow 
} from '@material-ui/core';
import Styles from './styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const ShowClimas = props => {
	const classes = Styles();
	const {name, id, sys, main, weather} = props.clima;
	const time = (new Date()).getHours()+":"+(new Date()).getMinutes();

	const devolverDiaSemana = () =>{
		let fecha=new Date();
    	let dias=['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    	return dias[fecha.getDay()];
	}

	return (
		<Grow in={id}>
			<Grid item sm={4}>
				<Card className={classes.card}>
					<CardContent>
						<IconButton 
						onClick={ () => props.eliminar(id) }
						className={classes.button} 
						aria-label="delete">
				            <HighlightOffIcon />
				        </IconButton>
				        <Typography variant="h5" component="h2" className={classes.temperatura}>
				        	{ Math.round(main.temp - 273.15) + ' °C'}
				        </Typography>
						<img 
						className={classes.iconotiempo}
						src={"https://openweathermap.org/img/wn/"+weather[0].icon+"@2x.png"} 
						alt="icono" />
						<Typography variant="h5" className={classes.titulo} component="h2">
			  				{name + ', ' + sys.country}
			  			</Typography>
			  			<Typography variant="body2" className={classes.subtitulo} component="h2">
			  				{weather[0].description}
			  			</Typography>
			  			<Typography variant="body2" className={classes.subtitulo} component="h2">
			  				{devolverDiaSemana() + ", " + time}
			  			</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grow>
	);
}

export default ShowClimas;