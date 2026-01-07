const baseUrl = 'http://localhost:3000/api/v1/'

const doGet = (endpoint, params = {})=> {
	const url = new URL(endpoint, baseUrl)
	Object.keys(params).forEach((key)=> {
		if (params[key] != null){
			url.searchParams.append(key, params[key])
		}
	})
	return fetch(url.href).then((response)=> {
		return response.json()
	})
}

const doPost = (endpoint, data)=> {
	return fetch(new URL(endpoint, baseUrl).href, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}).then((response)=> {
		if (!response.ok){
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		return response.json()
	}).catch((error)=> {
		console.error('Error in POST request:', error)
		throw error
	})
}

const doDelete = (endpoint, ids)=> {
	const url = new URL(endpoint, baseUrl).href
	return fetch(url, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ ids }),
	}).then((response)=> {
		if (!response.ok){
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		return response.json()
	}).catch((error)=> {
		console.error('Error in DELETE request:', error)
		throw error
	})
}

export {
	doGet, doPost, doDelete,
}
