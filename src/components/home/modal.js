import React, {useState} from 'react';
import { 
	Dialog, 
	DialogTitle, 
	DialogContent, 
	TextField, 
	List, 
	ListItem, 
	ListItemIcon, 
	ListItemText, 
	Typography 
} from '@material-ui/core';
import Style from './styles';
import { Buscar } from '../../services/api_clima';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { saveClima } from '../../services/clima';

const Modal = props => {
	const classes = Style();

	const [search, setSearch] = useState(null);
	const [error, setError] = useState('');

	const Changer = async e => {
		const quest = e.target.value;
		const respuesta = await Buscar(quest);
		if (respuesta.status === 200)
			setSearch(respuesta.data);
		else{
			setSearch(null);
			setError("No se obtuvo respuesta de su busqueda");
		}
	}

	const Seleccionar = async () => {
		const result = props.climas.filter(clima => clima.id === search.id);
		if ( result.length > 0 ){
			setSearch(null);
			setError("Esta ciudad/pais/consulta ya se encuentra en su lista");
		}
		else{
			const resp = await saveClima({idclima: search.id});
			if (resp.status === 200){
				props.setClimas([
					...props.climas,
					search
				]);
				setSearch(null);
				props.setDialog(false);
			}else
				console.log("error al guardar");
		}
	}

	return (
		<Dialog onClose={() => props.setDialog(false)} open={props.dialog}>
	      <DialogTitle className={classes.modalTitle}>
	      	Agregar Nueva Ubicacion
	      </DialogTitle>
	      <DialogContent dividers>
	      	<div className={classes.modal}>
	      		<TextField 
	      		className={classes.input} 
	      		type="text"
	      		name="buscar"
	      		onChange={Changer}
	      		variant="outlined"
	      		label="Buscador..." />
		      	
		      	<Typography className={classes.letras} variant="h6" component="h2">
		      		Resultados de la busqueda:
		      	</Typography>

		      	<List>
			       {search !== null ? (
			       	<ListItem button onClick={Seleccionar}>
			       		<ListItemIcon>
			       			<LocationOnIcon />
			       		</ListItemIcon>
			       		<ListItemText primary={search.name+' - '+search.sys.country} />
			       	</ListItem>
			       ) : error}
		       	</List>

	      	</div>
	      </DialogContent>
	    </Dialog>
	);
}

export default Modal;