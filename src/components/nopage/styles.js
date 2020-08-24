import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: 450,
    marginTop: theme.spacing(3),
  },
  titulo: {
  	textAlign: 'center',
  	marginTop: theme.spacing(2),
  	color: '#303f9f',
    letterSpacing: 2,
  },
  subtitulo: {
  	color: 'gray',
  	textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: theme.spacing(2),
  },
  button: {
  	display: 'block',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
  	marginTop: theme.spacing(4),
    color: '#303f9f', 
  }
}))