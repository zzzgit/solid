import { createSignal } from 'solid-js'
import { createCustomer } from '../../api.js'

const CustomerCreationDialog = (props)=> {
	const [formData, setFormData] = createSignal({
		name: '',
		gender: '',
		phone: '',
		email: '',
		extra: '',
	})

	const handleInputChange = (field, value)=> {
		setFormData({ ...formData(), [field]: value })
	}

	const handleCommit = async()=> {
		console.log('Form Data:', formData())

		createCustomer(formData()).then((result)=> {
			console.log('Customer created:', result)
			alert('Customer created successfully!')
			handleClose()
			return null
		}).catch((error)=> {
			console.error('Error creating customer:', error)
			alert('Failed to create customer. Please try again.')
		})
	}

	const handleClose = ()=> {
		setFormData({
			name: '',
			gender: '',
			phone: '',
			email: '',
			extra: '',
		})
		props.onClose?.()
	}

	return <>
		{props.isOpen && <div
			style={{
				position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', 'background-color': 'rgba(0,0,0,0.5)', display: 'flex', 'justify-content': 'center', 'align-items': 'center', 'z-index': '1000',
			}}
			onClick={handleClose}
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
					}}>Name *</label>
					<input
						type='text'
						value={formData().name}
						onInput={e=> handleInputChange('name', e.target.value)}
						style={{
							width: '100%', padding: '8px', border: '1px solid #ddd', 'border-radius': '4px', 'box-sizing': 'border-box',
						}}
						placeholder='Enter name'
					/>
				</div>

				<div style={{ 'margin-bottom': '16px' }}>
					<label style={{
						display: 'block', 'margin-bottom': '4px', 'font-weight': '500',
					}}>Gender</label>
					<select
						value={formData().gender}
						onChange={e=> handleInputChange('gender', e.target.value)}
						style={{
							width: '100%', padding: '8px', border: '1px solid #ddd', 'border-radius': '4px', 'box-sizing': 'border-box',
						}}
					>
						<option value=''>Select gender</option>
						<option value='MALE'>Male</option>
						<option value='FEMALE'>Female</option>
						<option value='OTHER'>Other</option>
					</select>
				</div>

				<div style={{ 'margin-bottom': '16px' }}>
					<label style={{
						display: 'block', 'margin-bottom': '4px', 'font-weight': '500',
					}}>Phone</label>
					<input
						type='tel'
						value={formData().phone}
						onInput={e=> handleInputChange('phone', e.target.value)}
						style={{
							width: '100%', padding: '8px', border: '1px solid #ddd', 'border-radius': '4px', 'box-sizing': 'border-box',
						}}
						placeholder='Enter phone number'
					/>
				</div>

				<div style={{ 'margin-bottom': '16px' }}>
					<label style={{
						display: 'block', 'margin-bottom': '4px', 'font-weight': '500',
					}}>Email</label>
					<input
						type='email'
						value={formData().email}
						onInput={e=> handleInputChange('email', e.target.value)}
						style={{
							width: '100%', padding: '8px', border: '1px solid #ddd', 'border-radius': '4px', 'box-sizing': 'border-box',
						}}
						placeholder='Enter email address'
					/>
				</div>

				<div style={{ 'margin-bottom': '24px' }}>
					<label style={{
						display: 'block', 'margin-bottom': '4px', 'font-weight': '500',
					}}>Extra</label>
					<textarea
						value={formData().extra}
						onInput={e=> handleInputChange('extra', e.target.value)}
						style={{
							width: '100%', padding: '8px', border: '1px solid #ddd', 'border-radius': '4px', 'box-sizing': 'border-box', 'min-height': '80px',
						}}
						placeholder='Additional notes'
					/>
				</div>

				<div style={{
					display: 'flex', 'justify-content': 'flex-end', gap: '12px',
				}}>
					<button
						onClick={handleClose}
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
	</>
}

export default CustomerCreationDialog
