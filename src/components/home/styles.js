import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1280,
    marginTop: theme.spacing(1),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  card: {
    height: 300,
    width: '100%',
    maxWidth: 350,
    margin: 'auto',
    marginTop: theme.spacing(3),
    position: 'relative',
  },
  content: {
    height: '100%',
  },
  titulo: {
    color: '#303f9f',
    textAlign: 'center',
  },
  subtitulo: {
    color: 'gray',
    textAlign: 'center',
  },
  registro: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  iconreg: {
    fontSize: 80,
  },
  labelreg: {
    color: 'gray',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: theme.spacing(3),
  },
  modal: {
    width: 400,
    height: 250,
    maxWidth: '100%',
  },
  input: {
    width: '100%',
  },
  letras: {
    marginTop: theme.spacing(3),
    color: 'gray',
  },
  modalTitle: {
    textTransform: 'uppercase',
    color: '#303f9f',
  },
  iconotiempo: {
    display: 'block',
    margin: 'auto',
  },
  button: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  temperatura: {
    display: 'block',
    color: '#303f9f',
    marginBottom: theme.spacing(2),
  },
  iconreg2: {
    fontSize: 80,
    color: 'gray',
  },
  labelreg2: {
    color: 'gray',
  },
}))