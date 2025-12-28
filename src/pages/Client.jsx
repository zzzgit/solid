import { For, createSignal, onMount } from 'solid-js'
import Table from '../components/Table.jsx'
import { getCustomers } from '../api.js'
// page 永遠不用設置padding margin

const Client = ()=> {
	const [tableData, setTableData] = createSignal([{
		id: 1, name: 'Loading...', status: 'Loading...',
	}])
	const [isDialogOpen, setIsDialogOpen] = createSignal(false)
	const [formData, setFormData] = createSignal({
		id: '',
		name: '',
		status: '',
	})

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
		setFormData({
			id: '', name: '', status: '',
		})
	}

	const handleInputChange = (field, value)=> {
		setFormData({ ...formData(), [field]: value })
	}

	const handleCommit = ()=> {
		console.log('Form Data:', formData())
		// 这里可以添加提交数据的逻辑
		handleCloseDialog()
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
					<Table.Cell>Status</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<For each={tableData()}>
					{client=> <Table.Row >
						<Table.Cell>{client.id}</Table.Cell>
						<Table.Cell>{client.name}</Table.Cell>
						<Table.Cell>{client.status}</Table.Cell>
					</Table.Row>
					}
				</For>
			</Table.Body>
		</Table>

		{/* Dialog Modal */}
		{isDialogOpen() && <div
			style={{
				position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', 'background-color': 'rgba(0,0,0,0.5)', display: 'flex', 'justify-content': 'center', 'align-items': 'center', 'z-index': '1000',
			}}
			onClick={handleCloseDialog}
		>
			<div
				style={{
					background: 'white', padding: '24px', 'border-radius': '8px', width: '400px', 'max-width': '90%',
				}}
				onClick={e=> e.stopPropagation()}
			>
				<h2 style={{ 'margin-top': '0', 'margin-bottom': '20px' }}>Create New Client</h2>

				<div style={{ 'margin-bottom': '16px' }}>
					<label style={{
						display: 'block', 'margin-bottom': '4px', 'font-weight': '500',
					}}>ID</label>
					<input
						type='text'
						value={formData().id}
						onInput={e=> handleInputChange('id', e.target.value)}
						style={{
							width: '100%', padding: '8px', border: '1px solid #ddd', 'border-radius': '4px', 'box-sizing': 'border-box',
						}}
					/>
				</div>

				<div style={{ 'margin-bottom': '16px' }}>
					<label style={{
						display: 'block', 'margin-bottom': '4px', 'font-weight': '500',
					}}>Name</label>
					<input
						type='text'
						value={formData().name}
						onInput={e=> handleInputChange('name', e.target.value)}
						style={{
							width: '100%', padding: '8px', border: '1px solid #ddd', 'border-radius': '4px', 'box-sizing': 'border-box',
						}}
					/>
				</div>

				<div style={{ 'margin-bottom': '24px' }}>
					<label style={{
						display: 'block', 'margin-bottom': '4px', 'font-weight': '500',
					}}>Status</label>
					<input
						type='text'
						value={formData().status}
						onInput={e=> handleInputChange('status', e.target.value)}
						style={{
							width: '100%', padding: '8px', border: '1px solid #ddd', 'border-radius': '4px', 'box-sizing': 'border-box',
						}}
					/>
				</div>

				<div style={{
					display: 'flex', 'justify-content': 'flex-end', gap: '12px',
				}}>
					<button
						onClick={handleCloseDialog}
						style={{
							padding: '8px 16px', 'background-color': '#f0f0f0', border: 'none', 'border-radius': '4px', cursor: 'pointer',
						}}
					>
						Cancel
					</button>
					<button
						onClick={handleCommit}
						style={{
							padding: '8px 16px', 'background-color': '#0070f3', color: 'white', border: 'none', 'border-radius': '4px', cursor: 'pointer',
						}}
					>
						Commit
					</button>
				</div>
			</div>
		</div>
		}

	</div>
}

export default Client
