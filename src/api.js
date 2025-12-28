import { doGet } from './http.js'

export const getCustomers = ()=> {
	return doGet('customers')
}
