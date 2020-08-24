import api from '../config/axiosClima';

export const Buscar = async (search) => {
	try {
		const resp = await api.get('/weather?q=' + search + '&lang=es&appid=' + process.env.REACT_APP_API_CLIMA_TOKEN);
		return resp;
	} catch (error) {
		return error;
	}
}

export const Listar = async (data) => {
	try {
		const resp = await api.get('/group?id=' + data + '&lang=es&appid=' + process.env.REACT_APP_API_CLIMA_TOKEN);
		return resp;
	} catch (error) {
		return error;
	}
}