import {
	Match, Switch, classList, createContext, mergeProps, splitProps, useContext,
} from 'solid-js'
import { css } from '@emotion/css'
import clsx from 'clsx'

const TableContext = createContext({ variant: '' })

const Cell = (rawProps)=> {
	const variant = useContext(TableContext).variant
	const withDefaults = mergeProps({ }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'className'])
	return (
		<Switch when ={variant === 'head'}>
			<Match when={true}>
				<th class={commonProps.className} >
					{commonProps.children}
				</th>
			</Match>
			<Match when={false}>
				<td class={commonProps.className} >
					{commonProps.children}
				</td>
			</Match>
		</Switch>
	)
}

const Row = (rawProps)=> {
	const withDefaults = mergeProps({ }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'className'])
	return (
		<tr class={commonProps.className} >
			{commonProps.children}
		</tr>
	)
}
const Head = (rawProps)=> {
	const withDefaults = mergeProps({ }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'className'])
	return (
		<TableContext.Provider value={{ variant: 'head' }}>
			<thead class={commonProps.className} >
				{commonProps.children}
			</thead>
		</TableContext.Provider>
	)
}
const Body = (rawProps)=> {
	const withDefaults = mergeProps({ }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'className'])
	return (
		<TableContext.Provider value={{ variant: 'body' }}>
			<tbody class={commonProps.className} >
				{commonProps.children}
			</tbody>
		</TableContext.Provider>
	)
}

const Foot = (rawProps)=> {
	const withDefaults = mergeProps({ }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'className'])
	return (
		<TableContext.Provider value={{ variant: 'foot' }}>
			<tfoot class={commonProps.className} >
				{commonProps.children}
			</tfoot>
		</TableContext.Provider>
	)
}

const Table = (rawProps)=> {
	const withDefaults = mergeProps({ data: [] }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'className'])
	return (
		<table class={clsx(tableStyle, commonProps.className, { striped: props.striped })} >
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
