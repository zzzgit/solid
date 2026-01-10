import { createMemo, splitProps } from 'solid-js'
import { css } from '@emotion/css'

const defaults = {
	variant: 'solid',
	size: 'md',
	color: 'blue',
}

const Button = (props)=> {
	const [local, others] = splitProps(props, [
		'children',
		'variant',
		'size',
		'color',
		'class',
		'className',
	])

	// 計算size的class - 使用 getter 函數保持響應性
	const validSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
	const sizeName = createMemo(()=> {
		const size = local.size || defaults.size
		return validSizes.includes(size) ? size : defaults.size
	})
	const colorName = createMemo(()=> local.color || defaults.color)
	const variantName = createMemo(()=> local.variant || defaults.variant)

	return (
		<button
			classList={{ [sizeName()]: true, [variantName()]: true }}
			class={containerStyle({
				sizeName: sizeName(),
				colorName: colorName(),
			})}
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
