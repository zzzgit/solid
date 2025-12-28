const baseUrl = 'http://localhost:3000/api/v1/'

const doGet = async(endpoint)=> {
	const response = await fetch(new URL(endpoint, baseUrl).href)
	return response.json()
}

const doPost = async(endpoint, data)=> {
	const response = await fetch(new URL(endpoint, baseUrl).href, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
	return response.json()
}

export { doGet, doPost }
