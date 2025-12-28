const baseUrl = 'http://localhost:3000/api/v1/'

const doGet = async(endpoint)=> {
	const response = await fetch(new URL(endpoint, baseUrl).href)
	return response.json()
}

export { doGet }
