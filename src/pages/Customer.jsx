import { For, createSignal, onMount } from 'solid-js'
import Table from '../components/Table.jsx'
import { searchCustomers } from '../api.js'
import CustomerCreationDialog from './widgets/Customer.creation.jsx'
import Pagination from '../components/Pagination.jsx'
import TableContainer from '../components/TableContainer.jsx'

// page 永遠不用設置padding margin

const Customer = ()=> {
	const [tableData, setTableData] = createSignal([])
	const [isDialogOpen, setIsDialogOpen] = createSignal(false)
	const [searchId, setSearchId] = createSignal('')
	const [searchName, setSearchName] = createSignal('')
	const [searchGender, setSearchGender] = createSignal('')
	const [pager, setPager] = createSignal({
		total: 0,
		pageSize: 10,
		currentPage: 1,
	})

	const fetchCustomers = (conditions, pager)=> {
		return searchCustomers(conditions, pager).then((response)=> {
			if (response.data){
				setTableData(response.data)
				setPager(response.pager)
			}
			return null
		}).catch((err)=> {
			console.error('Error fetching customers:', err)
		})
	}

	onMount(()=> {
		fetchCustomers({}, pager())
	})

	const handleSearch = ()=> {
		const params = {}
		if (searchId()){ params.id = searchId() }
		if (searchName()){ params.name = searchName() }
		if (searchGender()){ params.gender = searchGender() }

		fetchCustomers(params, pager())
	}

	const handleOpenDialog = ()=> {
		setIsDialogOpen(true)
	}

	const handleCloseDialog = ()=> {
		setIsDialogOpen(false)
	}

	const handlePageChange = (newPage)=> {
		const params = {}
		if (searchId()){ params.id = searchId() }
		if (searchName()){ params.name = searchName() }
		if (searchGender()){ params.gender = searchGender() }

		const newPager = {
			...pager(),
			currentPage: newPage.page,
		}
		searchCustomers(params, newPager).then((response)=> {
			if (response.data){
				setTableData(response.data)
				setPager(response.pager)
			}
			return null
		}).catch((err)=> {
			console.error('Error changing page:', err)
		})
	}

	return <div>
		<div style={{
			display: 'flex', 'justify-content': 'space-between', 'align-items': 'center', 'margin-bottom': '20px',
		}}>
			<button
				onClick={handleOpenDialog}
				style={{
					padding: '8px 16px', 'background-color': '#0070f3', color: 'white', border: 'none', 'border-radius': '4px', cursor: 'pointer',
				}}
			>
				Create
			</button>
		</div>

		{/* Search Bar */}
		<div style={{
			display: 'flex', gap: '10px', 'margin-bottom': '20px', 'align-items': 'center',
		}}>
			<input
				type='text'
				placeholder='Search by ID'
				value={searchId()}
				onInput={e=> setSearchId(e.target.value)}
				style={{
					padding: '8px 12px', border: '1px solid #ddd', 'border-radius': '4px', flex: '1',
				}}
			/>
			<input
				type='text'
				placeholder='Search by Name'
				value={searchName()}
				onInput={e=> setSearchName(e.target.value)}
				style={{
					padding: '8px 12px', border: '1px solid #ddd', 'border-radius': '4px', flex: '1',
				}}
			/>
			<input
				type='text'
				placeholder='Search by Gender'
				value={searchGender()}
				onInput={e=> setSearchGender(e.target.value)}
				style={{
					padding: '8px 12px', border: '1px solid #ddd', 'border-radius': '4px', flex: '1',
				}}
			/>
			<button
				onClick={handleSearch}
				style={{
					padding: '8px 20px', 'background-color': '#10b981', color: 'white', border: 'none', 'border-radius': '4px', cursor: 'pointer', 'white-space': 'nowrap',
				}}
			>
				Search
			</button>
		</div>
		<TableContainer style ={{
			'min-height': '540px',
		}}>
			<Table columned class='fooooo' size='md'>
				<Table.Head>
					<Table.Row>
						<Table.Cell>ID</Table.Cell>
						<Table.Cell>Name</Table.Cell>
						<Table.Cell>Gender</Table.Cell>
						<Table.Cell>Phone</Table.Cell>
						<Table.Cell>Created At</Table.Cell>
						<Table.Cell>Updated At</Table.Cell>
						<Table.Cell>Extra</Table.Cell>
					</Table.Row>
				</Table.Head>
				<Table.Body>
					<For each={tableData()}>
						{client=> <Table.Row key={client.id}>
							<Table.Cell>{client.id}</Table.Cell>
							<Table.Cell>{client.name}</Table.Cell>
							<Table.Cell>{client.gender || '-'}</Table.Cell>
							<Table.Cell>{client.phone || '-'}</Table.Cell>
							<Table.Cell>{new Date(client.createdAt).toLocaleString()}</Table.Cell>
							<Table.Cell>{new Date(client.updatedAt).toLocaleString()}</Table.Cell>
							<Table.Cell>{client.extra || '-'}</Table.Cell>
						</Table.Row>
						}
					</For>
				</Table.Body>
			</Table>
		</TableContainer>
		<Pagination pager={pager()} onPageChange={handlePageChange} />

		<CustomerCreationDialog
			isOpen={isDialogOpen()}
			onClose={handleCloseDialog}
		/>

	</div>
}

export default Customer
