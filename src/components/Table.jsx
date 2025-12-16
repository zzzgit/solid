import Column from './Column'
import Tr from './Tr'

const Table = (props)=> {
	return (
		<table>
			<thead>
				<Tr>
					<Column class='id-column'>ID</Column>
					<Column class='name-column'>Name</Column>
					<Column class='status-column'>Status</Column>
				</Tr>
			</thead>
			<tbody>
				{props.data && props.data.map(row=> <Tr>
					<td>{row.id}</td>
					<td>{row.name}</td>
					<td>{row.status}</td>
				</Tr>)}
			</tbody>
		</table>
	)
}

export default Table
