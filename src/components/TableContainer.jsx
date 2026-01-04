const TableContainer = (props)=> {
	return (
		<section classList = {{ 'solid-table-container': true, [props.class]: !!props.class }}
			style={{
				display: 'block',
				width: '100%',
				'overflow-x': 'auto',
				position: 'relative',
				...props.style,
			}}
		>
			{props.children}
		</section>
	)
}

export default TableContainer
