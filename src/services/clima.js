import api from '../config/axios';
import { header } from '../config/headers';

export const getClimas = async () => {
	try {
		const resp = await api.get('/climas', {headers: header()});
		return resp;
	} catch (error) {
		return error;
	}
}

export const saveClima = async data => {
	try {
		const resp = await api.post('/climas', data , {headers: header()});
		return resp;
	} catch (error) {
		return error;
	}
}

export const editClima = async (idclima, data) => {
	try {
		const resp = await api.put('/climas/'+idclima, data, {headers: header()});
		return resp;
	} catch (error) {
		return error;
	}
}

export const deleteClima = async data => {
	try {
		const resp = await api.delete('/climas/'+data , {headers: header()});
		return resp;
	} catch (error) {
		return error;
	}
}
