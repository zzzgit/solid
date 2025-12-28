import { doGet, doPost } from './http.js'

export const getCustomers = ()=> {
	return doGet('customers')
}

export const getCustomerById = (id)=> {
	return doGet(`customers/${id}`)
}

export const createCustomer = (customerObject)=> {
	return doPost('customers', customerObject)
}
