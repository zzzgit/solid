const Column = (props)=> {
	return (
		<th class={props.className} >
			{props.children}
			<span>bbb</span>
		</th>
	)
}

export default Column
