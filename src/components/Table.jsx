import {
	Match, Switch, createContext, mergeProps, splitProps, useContext,
} from 'solid-js'
import { css } from '@emotion/css'

const TableContext = createContext({ variant: '' })

const Cell = (props)=> {
	const variant = useContext(TableContext).variant
	const style = ()=> { return props.width ? { width: props.width } : {} }
	return (
		<Switch>
			<Match when={variant === 'head'}>
				<th class={props.class} style={style()}>
					{props.children}
				</th>
			</Match>
			<Match when={variant === 'body'}>
				<td class={props.class} >
					{props.children}
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

const Table = (props)=> {
	const tableSizes = {
		sm: 'small',
		md: 'medium',
		lg: 'large',
	}
	const size = tableSizes[props.size || 'md']
	const showHorizontal = props.columned
	return (
		<table
			class={tableStyle}
			classList={{
				[props.class]: true,
				[size]: true,
				striped: props.striped,
				columned: showHorizontal,
			}} >
			{props.children}
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
border-spacing: 0;
border-top: 1px solid rgb(228,228,231);
tbody tr {
	transition: background-color 0.2s ease;
	&:hover {
		background-color: rgb(250,250,250);
	}
}
th {
	border-bottom: 1px solid rgb(228,228,231);
	user-select: none;
}
td {
	border-bottom: 1px solid rgb(228,228,231);
}
&.striped {
	border-top: none;
	tbody {
		tr:nth-of-type(odd) {
			background-color: gray;
		}
	}
	th {
		border-bottom: none;
	}
	td {
		border-bottom: none;
	}
}
&.columned {
	border-left: 1px solid rgb(228,228,231);
	th {
		border-right: 1px solid rgb(228,228,231);
	}
	td {
		border-right: 1px solid rgb(228,228,231);
	}
}
&.small {
	th {
		padding: 8px;
	}
	td {
		padding: 8px;
	}
}
&.medium {
	th {
		padding: 12px;
	}
	td {
		padding: 12px;
	}
}
&.large {
	th {
		padding: 12px 16px;
	}
	td {
		padding: 12px 16px;
	}
}

`
