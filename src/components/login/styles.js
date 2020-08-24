import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: '100%',
    },
  },
  login: {
  	width: '100%',
  	maxWidth: 400,
  	padding: theme.spacing(1),
  	display: 'block',
  	margin: '50px auto'
  },
  loading: {
  	display: 'block',
  	marginTop: theme.spacing(1),
  	textAlign: 'center'
  },
  titulo: {
  	textAlign: 'center'
  },
  subtitulo: {
  	textAlign: 'center',
  	color: 'gray',
  	marginBottom: theme.spacing(3)
  },
  menuButton: {
  	marginTop: theme.spacing(3)
  },
  button: {
  	textAlign: 'right',
  },
  message: {
  	marginTop: theme.spacing(2)
  },
  icono: {
  	display: 'block',
  	fontSize: 50,
  	margin: '10px auto',
  	color: '#303f9f'
  }
}))