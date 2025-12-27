import { mergeProps, splitProps } from 'solid-js'

const TableTd = (rawProps)=> {
	const withDefaults = mergeProps({ className: '' }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'className'])
	return (
		<td class={commonProps.className} {...props}>
			{commonProps.children}
		</td>
	)
}

const TableTh = (rawProps)=> {
	const withDefaults = mergeProps({ className: '' }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'className'])
	return (
		<th class={commonProps.className} {...props}>
			{commonProps.children}
		</th>
	)
}

const TableTr = (rawProps)=> {
	const withDefaults = mergeProps({ className: '' }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'className'])
	return (
		<tr class={commonProps.className} {...props}>
			{commonProps.children}
		</tr>
	)
}
const TableThead = (rawProps)=> {
	const withDefaults = mergeProps({ className: '' }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'className'])
	return (
		<thead class={commonProps.className} {...props}>
			{commonProps.children}
		</thead>
	)
}
const TableTbody = (rawProps)=> {
	const withDefaults = mergeProps({ className: '' }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'className'])
	return (
		<tbody class={commonProps.className} {...props}>
			{commonProps.children}
		</tbody>
	)
}

const TableTfoot = (rawProps)=> {
	const withDefaults = mergeProps({ className: '' }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'className'])
	return (
		<tfoot class={commonProps.className} {...props}>
			{commonProps.children}
		</tfoot>
	)
}

const Table = (rawProps)=> {
	const withDefaults = mergeProps({ data: [] }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'className'])
	return (
		<table>
			{commonProps.children}
		</table>
	)
}

export default Table

Table.Thead = TableThead
Table.Tbody = TableTbody
Table.Tfoot = TableTfoot
Table.Tr = TableTr
Table.Th = TableTh
Table.Td = TableTd
