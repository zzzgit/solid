import {
	Match, Switch, children, createContext, createSignal, mergeProps, splitProps, useContext,
} from 'solid-js'
import { css } from '@emotion/css'

const TableContext = createContext({
	variant: '',
	checkable: false,
	onChecked: null,
	selectedRows: ()=> [],
	toggleRowSelection: null,
})

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
	const [commonProps] = splitProps(withDefaults, ['children', 'class', 'data'])
	const tableContext = useContext(TableContext)
	const isCheckable = ()=> tableContext.checkable
	const isSelected = ()=> {
		if (commonProps.data === undefined){ return false }
		const rows = tableContext.selectedRows?.() ?? []
		return rows.includes(commonProps.data)
	}
	const handleCheckboxChange = (e)=> {
		if (!tableContext.toggleRowSelection || commonProps.data === undefined){
			return
		}
		tableContext.toggleRowSelection(commonProps.data, e.currentTarget.checked)
	}
	return (
		<tr class={commonProps.class} >
			{isCheckable() && <th class={checkboxCellStyle}>
				<input
					type='checkbox'
					checked={isSelected()}
					onChange={handleCheckboxChange}
					class={checkboxStyle}
				/>
			</th>
			}
			{commonProps.children}
		</tr>
	)
}
const Head = (rawProps)=> {
	const withDefaults = mergeProps({ }, rawProps)
	const [commonProps] = splitProps(withDefaults, ['children', 'class'])
	const tableContext = useContext(TableContext)
	return (
		<TableContext.Provider value={{
			...tableContext,
			variant: 'head',
		}}>
			<thead class={commonProps.class} >
				{tableContext.checkable && <th class={checkboxHeaderStyle} />
				}
				{commonProps.children}
			</thead>
		</TableContext.Provider>
	)
}
const Body = (rawProps)=> {
	const withDefaults = mergeProps({ emptyText: 'No data' }, rawProps)
	const [commonProps, props] = splitProps(withDefaults, ['children', 'class', 'emptyText'])
	const resolved = children(()=> commonProps.children)
	const tableContext = useContext(TableContext)
	const hasChildren = ()=> {
		const r = resolved()
		if (Array.isArray(r)){ return r.length > 0 }
		return !!r
	}
	return (
		<TableContext.Provider value={{
			...tableContext,
			variant: 'body',
		}}>
			<tbody class={commonProps.class} classList={{ [emptyBodyStyle]: !hasChildren() }} >
				<Switch>
					<Match when={hasChildren()}>
						{commonProps.children}
					</Match>
					<Match when={!hasChildren()}>
						<tr class={emptyRowStyle}>
							<td class={emptyStateStyle} colSpan={100}>{props.emptyText || 'walang laman'}</td>
						</tr>
					</Match>
				</Switch>
			</tbody>
		</TableContext.Provider>
	)
}

const Foot = (rawProps)=> {
	const withDefaults = mergeProps({ }, rawProps)
	const [commonProps] = splitProps(withDefaults, ['children', 'class'])
	const tableContext = useContext(TableContext)
	return (
		<TableContext.Provider value={{ ...tableContext, variant: 'foot' }}>
			<tfoot class={commonProps.class} >
				{commonProps.children}
			</tfoot>
		</TableContext.Provider>
	)
}

const Table = (props)=> {
	const [selectedRows, setSelectedRows] = createSignal([])
	const toggleRowSelection = (rowData, checked)=> {
		if (rowData === undefined){
			return
		}
		setSelectedRows((prev)=> {
			const alreadySelected = prev.includes(rowData)
			const nextSelection = checked ? alreadySelected ? prev : [...prev, rowData] : prev.filter(item=> item !== rowData)
			if (props.onChecked){
				props.onChecked(nextSelection)
			}
			return nextSelection
		})
	}
	const tableSizes = {
		sm: 'small',
		md: 'medium',
		lg: 'large',
	}
	const size = tableSizes[props.size || 'md']
	const value = {
		variant: '',
		checkable: props.checkable,
		onChecked: props.onChecked,
		selectedRows,
		toggleRowSelection,
	}
	return (
		<TableContext.Provider value={value}>
			<table
				class={tableStyle}
				classList={{
					[props.class]: true,
					[size]: true,
					striped: props.striped,
					columned: props.columned,
				}} >
				{props.children}
			</table>
		</TableContext.Provider>
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

const emptyStateStyle = css`
    text-align: center;
    padding: 12px;
    color: #666;
`
const emptyRowStyle = css`
    height: 100%;
    & > td {
        height: 100%;
        vertical-align: middle;
        padding: 12px;
    }
`
const emptyBodyStyle = css`
    height: 100%;
`

const checkboxCellStyle = css`
    width: 40px;
    text-align: center;
`

const checkboxHeaderStyle = css`
    width: 40px;
    border-bottom: 1px solid rgb(228,228,231);
`

const checkboxStyle = css`
    cursor: pointer;
    width: 16px;
    height: 16px;
`
