import { For } from 'solid-js'
import { Button } from '@suid/material'
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

		<Button variant='contained'>Client Page</Button>
		<br />
		<table border={1} style={{ 'margin-top': '20px' }}>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				<For each={tableData}>{client=> <tr >
					<td>{client.id}</td>
					<td>{client.name}</td>
					<td>{client.status}</td>
				</tr>
				}</For>
			</tbody>
		</table>
		<div>another table</div>
		<Table striped class='fooooo'>
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
