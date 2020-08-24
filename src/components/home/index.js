import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';
import { Grid, Card, CardContent, Typography, Link } from '@material-ui/core';
import ShowClimas from './showClimas';
import Styles from './styles';
import { Listar } from '../../services/api_clima';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import Modal from './modal';
import { deleteClima, getClimas } from '../../services/clima';

const Home = props => {
	const classes = Styles();
	const [climas, setClimas] = useState([]);
	const [dialog, setDialog] = useState(false);

	useEffect(() => {
		const consultar = async() => {
			const resp = await getClimas();
			const array = resp.data.map( da => {
				return da.idclima;
			});
			//console.log(array);
			const datos = await Listar(array);
			//console.log(datos);
			if (datos.status === 200)
				setClimas(datos.data.list);
			else
				console.log("No se encontro la ciudad");
		}
		consultar();
	}, []);

	const showForm = e => {
		e.preventDefault();
		if (climas.length < 5)
			setDialog(true);
	}

	const eliminar = async data => {
		const resp = await deleteClima(data);
		if (resp.status === 200){
			const result = climas.filter(clima => clima.id !== data);
			setClimas(result);
		}else
			console.log("error al eliminar");
	}

    return(
        <div>
            <Navbar />
            <Grid
            className={classes.root}
			container
			direction="row"
			justify="center"
			alignItems="center">
			
				{climas.map( (clima, id) => (
					<ShowClimas key={id} clima={clima} eliminar={eliminar} />
				))}

				<Grid item sm={4}>
					<Card className={classes.card}>
						<CardContent className={classes.content}>
							<Link 
							href="#" 
							onClick={showForm} 
							className={classes.registro}>
								<AddCircleOutlinedIcon className={climas.length < 5 ? classes.iconreg : classes.iconreg2} />
								<Typography className={climas.length < 5 ? classes.labelreg : classes.labelreg2} variant='h6' component="span">
									Agregar Nueva Ubicacion
								</Typography>
							</Link>
						</CardContent>
					</Card>
				</Grid>
			</Grid>

			<Modal dialog={dialog} setDialog={setDialog} climas={climas} setClimas={setClimas} />
        </div>
    );
}

export default Home;