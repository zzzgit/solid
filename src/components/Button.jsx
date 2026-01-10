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
		'disabled',
		'loading',
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
			class={[
				containerStyle({
					sizeName: sizeName(),
					colorName: colorName(),
				}),
				sizeName(),
				variantName(),
				local.loading && 'loading',
				local.class || local.className,
			].filter(Boolean).join(' ')}
			disabled={local.disabled || local.loading}
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
user-select: none;

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

&:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

&.loading {
	position: relative;
	opacity: 0.7;
	cursor: progress;
	
	&::after {
		content: '';
		position: absolute;
		width: 16px;
		height: 16px;
		top: 50%;
		left: 50%;
		margin-left: -8px;
		margin-top: -8px;
		border: 2px solid transparent;
		border-top-color: currentColor;
		border-radius: 50%;
		animation: button-loading-spinner 0.6s linear infinite;
	}
}

@keyframes button-loading-spinner {
	from {
		transform: rotate(0turn);
	}
	to {
		transform: rotate(1turn);
	}
}

`
