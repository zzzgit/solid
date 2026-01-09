import { splitProps } from 'solid-js'
import { css, cx } from '@emotion/css'

const Button = (props)=> {
	const [local, others] = splitProps(props, [
		'children',
		'variant',
		'size',
		'class',
		'className',
	])

	return (
		<button class={containerStyle(props)} {...others}>
			{local.children}
		</button>
	)
}

export default Button

const containerStyle = props=> css`
--text-color: var(--${props.color}-9);
--bg-color: var(--${props.color}-3);
--border-color: var(--${props.color}-7);
color: var(--text-color);
background-color: var(--bg-color);
border: 1px solid var(--border-color);
`
