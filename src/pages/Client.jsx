import { For } from 'solid-js'
import Table from '../components/Table.jsx'
// page 永遠不用設置padding margin

const tableData = [
	{
		id: 1, name: 'Client A', status: 'Active',
	},
	{
		id: 2, name: 'Client B', status: 'Inactive',
	},
	{
		id: 3, name: 'Client C', status: 'Active',
	},
]
const Client = ()=> {
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
