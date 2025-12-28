import { For, createSignal, onMount } from 'solid-js'
import Table from '../components/Table.jsx'
import { getCustomers } from '../api.js'
// page 永遠不用設置padding margin

const Client = ()=> {
	const tableData = createSignal([])
	onMount(()=> {
		getCustomers().then((data)=> {
			console.log(data)
			if (data){
				tableData(data)
			}
			return null
		}).catch((err)=> {
			console.error('Error fetching customers:', err)
		})
	})

	return <div>
		<div>another table</div>

		<Table class='fooooo' size='md'>
			<Table.Head>
				<Table.Row>
					<Table.Cell>ID</Table.Cell>
					<Table.Cell>Name</Table.Cell>
					<Table.Cell>Status</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<For each={tableData}>{client=> <Table.Row >
					<Table.Cell>{client.id}</Table.Cell>
					<Table.Cell>{client.name}</Table.Cell>
					<Table.Cell>{client.status}</Table.Cell>
				</Table.Row>
				}</For>
			</Table.Body>
		</Table>

	</div>
}

export default Client
