import { mergeProps, splitProps } from 'solid-js'
import { css, cx } from '@emotion/css'

const defaults = {
	variant: 'solid',
	size: 'md',

}

const Button = (props)=> {
	const [local, others] = splitProps(props, [
		'children',
		'variant',
		'size',
		'class',
		'className',
	])

	// 計算size的class
	const validSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
	const sizeName = validSizes.includes(local.size) ? local.size : defaults.size
	const colorName = props.color || 'blue'
	const variantName = local.variant || defaults.variant

	return (
		<button
			classList={{ [sizeName]: true, [variantName]: true }}
			class={containerStyle({ sizeName, colorName })}
			{...others}
		>
			{local.children}
		</button>
	)
}

export default Button

const containerStyle = ({ sizeName, colorName })=> css`
--solid-background: var(--${colorName}-9);
--solid-hover-background: var(--${colorName}-10);
--outline-border: var(--${colorName}-a7);
--outline-foreground: var(--${colorName}-a11);
--outline-hover-background: var(--${colorName}-a2);
--surface-background: var(--${colorName}-2);
--surface-hover-background: var(--${colorName}-3);
--surface-border-color: var(--${colorName}-6);
--surface-hover-border-color: var(--${colorName}-7);
--surface-foreground: var(--${colorName}-11);

height: var(--component-height-${sizeName});
min-height: var(--component-height-${sizeName});
padding: var(--component-padding-${sizeName});
font-size: var(--component-font-size-${sizeName});
border-radius: 4px;
border: none;
cursor: pointer;	

&.solid {
	background-color: var(--solid-background);
	color: white;
	border-color: var(--accent-color);
	&:hover {
		background-color: var(--solid-hover-background);
	}
}
&.outline {
	border: 1px solid var(--outline-border);
	background-color: transparent;
	color: var(--outline-foreground);
	&:hover {
		background-color: var(--outline-hover-background);
	}
}
&.surface {
	border: 1px solid var(--surface-border-color);
	background-color: var(--surface-background);
	color: var(--surface-foreground);
	&:hover {
		background-color: var(--surface-hover-background);
		border-color: var(--surface-hover-border-color);
	}
}

`
