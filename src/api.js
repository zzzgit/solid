import { doGet, doPost } from './http.js'

// 禁止使用
export const getCustomers = ()=> {
	return doGet('customers')
}

export const getCustomerById = (id)=> {
	return doGet(`customers/${id}`)
}

export const createCustomer = (customerObject)=> {
	return doPost('customers', customerObject)
}

export const searchCustomers = (params)=> {
	return doGet('customers', params)
}
