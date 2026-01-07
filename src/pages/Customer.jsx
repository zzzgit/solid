import { For, createSignal, onMount } from 'solid-js'
import Table from '../components/Table.jsx'
import { deleteCustomerById, deleteCustomers, searchCustomers } from '../api.js'
import CustomerCreationDialog from './widgets/Customer.creation.jsx'
import Pagination from '../components/Pagination.jsx'
import TableContainer from '../components/TableContainer.jsx'
import Button from '../components/Button.jsx'

// page 永遠不用設置padding margin

const Customer = ()=> {
	const [tableData, setTableData] = createSignal([])
	const [isDialogOpen, setIsDialogOpen] = createSignal(false)
	const [searchId, setSearchId] = createSignal('')
	const [searchName, setSearchName] = createSignal('')
	const [searchGender, setSearchGender] = createSignal('')
	const [checkedRows, setCheckedRows] = createSignal([])
	const [pager, setPager] = createSignal({
		total: 0,
		pageSize: 10,
		currentPage: 1,
	})

	const fetchCustomers = (conditions, pager)=> {
		return searchCustomers(conditions, pager).then((response)=> {
			if (response.data){
				setTableData(response.data)
				setPager(response.meta.pagination)
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

	const handleRowChecked = (rowData)=> {
		setCheckedRows(rowData)
	}

	const handleDelete = async()=> {
		const rowsToDelete = checkedRows()

		if (rowsToDelete.length === 0){
			alert('請選擇要刪除的行')
			return
		}

		if (!confirm(`確定要刪除 ${rowsToDelete.length} 條記錄嗎？`)){
			return
		}

		if(rowsToDelete.length === 1){
			// 此處成功則返回204
			deleteCustomerById(rowsToDelete[0].id).then(()=> {
				console.log('Deleted single row:', rowsToDelete[0].id)
				return null
			}).catch((err)=> {
				console.error('Error deleting single row:', err)
			})
			return null
		}
		// 多選
		const ids = rowsToDelete.map(r=> r.id)
		deleteCustomers(ids).then(()=> {
			console.log('Deleted multiple rows:', ids)
			return null
		}).catch((err)=> {
			console.error('Error deleting multiple rows:', err)
		})
	}

	return <div>
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

		{/* Action Buttons */}
		<div style={{
			display: 'flex', gap: '10px', 'margin-bottom': '20px',
		}}>
			<button
				onClick={handleOpenDialog}
				style={{
					padding: '8px 16px', 'background-color': '#0070f3', color: 'white', border: 'none', 'border-radius': '4px', cursor: 'pointer',
				}}
			>
				Create
			</button>
			<Button onClick={handleDelete} disabled={checkedRows().length === 0}>Delete {checkedRows().length > 0 && `(${checkedRows().length})`}</Button>
		</div>
		<TableContainer style ={{
			'min-height': '540px',
		}}>
			<Table columned class='fooooo' size='md' checkable onChecked={handleRowChecked}>
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
						{rowData=> <Table.Row key={rowData.id} data={rowData}>
							<Table.Cell>{rowData.id}</Table.Cell>
							<Table.Cell>{rowData.name}</Table.Cell>
							<Table.Cell>{rowData.gender || '-'}</Table.Cell>
							<Table.Cell>{rowData.phone || '-'}</Table.Cell>
							<Table.Cell>{new Date(rowData.createdAt).toLocaleString()}</Table.Cell>
							<Table.Cell>{new Date(rowData.updatedAt).toLocaleString()}</Table.Cell>
							<Table.Cell>{rowData.extra || '-'}</Table.Cell>
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
