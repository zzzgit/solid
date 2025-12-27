import {
	Match, Switch, createContext, mergeProps, splitProps, useContext,
} from 'solid-js'
import { css } from '@emotion/css'

const TableContext = createContext({ variant: '' })

const Cell = (rawProps)=> {
	const variant = useContext(TableContext).variant
	const withDefaults = mergeProps({ }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'class'])
	return (
		<Switch when ={variant === 'head'}>
			<Match when={true}>
				<th class={commonProps.class} >
					{commonProps.children}
				</th>
			</Match>
			<Match when={false}>
				<td class={commonProps.class} >
					{commonProps.children}
				</td>
			</Match>
		</Switch>
	)
}

const Row = (rawProps)=> {
	const withDefaults = mergeProps({ }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'class'])
	return (
		<tr class={commonProps.class} >
			{commonProps.children}
		</tr>
	)
}
const Head = (rawProps)=> {
	const withDefaults = mergeProps({ }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'class'])
	return (
		<TableContext.Provider value={{ variant: 'head' }}>
			<thead class={commonProps.class} >
				{commonProps.children}
			</thead>
		</TableContext.Provider>
	)
}
const Body = (rawProps)=> {
	const withDefaults = mergeProps({ }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'class'])
	return (
		<TableContext.Provider value={{ variant: 'body' }}>
			<tbody class={commonProps.class} >
				{commonProps.children}
			</tbody>
		</TableContext.Provider>
	)
}

const Foot = (rawProps)=> {
	const withDefaults = mergeProps({ }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'class'])
	return (
		<TableContext.Provider value={{ variant: 'foot' }}>
			<tfoot class={commonProps.class} >
				{commonProps.children}
			</tfoot>
		</TableContext.Provider>
	)
}

const Table = (rawProps)=> {
	const withDefaults = mergeProps({ data: [] }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'class'])
	return (
		<table
			class={tableStyle}
			classList={{
				[commonProps.class]: true,
				striped: props.striped,
			}} >
			{commonProps.children}
		</table>
	)
}

export default Table

Table.Root = Table
Table.Head = Head
Table.Body = Body
Table.Foot = Foot
Table.Row = Row
Table.Cell = Cell

const tableStyle = css`
label: Table;
tr {
	//
}
&.striped {
	tbody {
		tr:nth-of-type(odd) {
			background-color: gray;
		}
	}
}

`
