import { For, createSignal, onMount } from 'solid-js'
import Table from '../components/Table.jsx'
import { getCustomers } from '../api.js'
import CustomerCreationDialog from './widgets/Customer.creation.jsx'
// page 永遠不用設置padding margin

const Customer = ()=> {
	const [tableData, setTableData] = createSignal([])
	const [isDialogOpen, setIsDialogOpen] = createSignal(false)

	onMount(()=> {
		getCustomers().then((data)=> {
			console.log(data)
			if (data){
				setTableData(data)
			}
			return null
		}).catch((err)=> {
			console.error('Error fetching customers:', err)
		})
	})

	const handleOpenDialog = ()=> {
		setIsDialogOpen(true)
	}

	const handleCloseDialog = ()=> {
		setIsDialogOpen(false)
	}

	return <div>
		<div style={{
			display: 'flex', 'justify-content': 'space-between', 'align-items': 'center', 'margin-bottom': '20px',
		}}>
			<div>another table</div>
			<button
				onClick={handleOpenDialog}
				style={{
					padding: '8px 16px', 'background-color': '#0070f3', color: 'white', border: 'none', 'border-radius': '4px', cursor: 'pointer',
				}}
			>
				Create
			</button>
		</div>

		<Table class='fooooo' size='md'>
			<Table.Head>
				<Table.Row>
					<Table.Cell>ID</Table.Cell>
					<Table.Cell>Name</Table.Cell>
					<Table.Cell>Gender</Table.Cell>
					<Table.Cell>Phone</Table.Cell>
					<Table.Cell>Extra</Table.Cell>
					<Table.Cell>Created At</Table.Cell>
					<Table.Cell>Updated At</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<For each={tableData()}>
					{client=> <Table.Row >
						<Table.Cell>{client.id}</Table.Cell>
						<Table.Cell>{client.name}</Table.Cell>
						<Table.Cell>{client.gender || '-'}</Table.Cell>
						<Table.Cell>{client.phone || '-'}</Table.Cell>
						<Table.Cell>{client.extra || '-'}</Table.Cell>
						<Table.Cell>{new Date(client.createdAt).toLocaleString()}</Table.Cell>
						<Table.Cell>{new Date(client.updatedAt).toLocaleString()}</Table.Cell>
					</Table.Row>
					}
				</For>
			</Table.Body>
		</Table>

		<CustomerCreationDialog
			isOpen={isDialogOpen()}
			onClose={handleCloseDialog}
		/>

	</div>
}

export default Customer
