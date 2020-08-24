import api from '../config/axios';

export const onLogin = async data => {
	try {
		const resp = await api.post('/auth', data);
		return resp;
	} catch (error) {
		return error;
	}
}

export const onRegister = async data => {
	try {
		const resp = await api.post('/usuarios', data);
		return resp;
	} catch (error) {
		return error;
	}
}

export const validToken = async () => {
	try {
		const token_api = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME);
		const resp = await api.post('/auth/validToken', { "token": token_api });
		return resp;
	} catch (error) {
		return error;
	}
}
