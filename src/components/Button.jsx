import { createMemo, splitProps } from 'solid-js'
import { css } from '@emotion/css'

const defaults = {
	variant: 'solid',
	size: 'md',
	color: null,
	expression: 'primary',
}

const expressionColorMap = {
	primary: 'blue',
	secondary: 'mauve',
	success: 'green',
	warning: 'orange',
	danger: 'red',
	info: 'cyan',
}

const warmColors = new Set([
	'yellow',
	'orange',
	'amber',
	'gold',
	'bronze',
	'brown',
	'tomato',
	'red',
	'crimson',
	'rose',
	'pink',
	'salmon',
])

const Button = (props)=> {
	const [local, others] = splitProps(props, [
		'children',
		'variant',
		'size',
		'color',
		'expression',
		'class',
		'disabled',
		'loading',
	])

	const validSizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
	const validExpressions = ['primary', 'secondary', 'success', 'warning', 'danger', 'info']

	const sizeName = createMemo(()=> {
		const size = local.size || defaults.size
		return validSizes.includes(size) ? size : defaults.size
	})

	const expressionName = createMemo(()=> {
		const expr = local.expression || defaults.expression
		return validExpressions.includes(expr) ? expr : defaults.expression
	})

	const colorName = createMemo(()=> {
		if (local.color){ return local.color }
		return expressionColorMap[expressionName()]
	})

	const solidForeground = createMemo(()=> {
		return warmColors.has(colorName()) ? 'black' : 'white'
	})

	const variantName = createMemo(()=> local.variant || defaults.variant)

	return (
		<button
			class={[
				containerStyle({
					sizeName: sizeName(),
					colorName: colorName(),
					solidForeground: solidForeground(),
				}),
				sizeName(),
				variantName(),
				expressionName(),
				local.loading && 'loading',
				local.class,
			].filter(Boolean).join(' ')}
			disabled={local.disabled || local.loading}
			aria-busy={local.loading}
			aria-disabled={local.disabled || local.loading}
			{...others}
		>
			{local.children}
		</button>
	)
}

export default Button

const containerStyle = ({
	sizeName, colorName, solidForeground,
})=> css`
--solid-background: var(--${colorName}-9);
--solid-hover-background: var(--${colorName}-10);
--solid-active-background: var(--${colorName}-11);
--solid-foreground: ${solidForeground};
--outline-border: var(--${colorName}-a7);
--outline-foreground: var(--${colorName}-a11);
--outline-hover-background: var(--${colorName}-a2);
--outline-active-background: var(--${colorName}-a3);
--surface-background: var(--${colorName}-2);
--surface-hover-background: var(--${colorName}-3);
--surface-active-background: var(--${colorName}-4);
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
	color: var(--solid-foreground);
	border-color: var(--accent-color);
	&:hover {
		background-color: var(--solid-hover-background);
	}
	&:active {
		background-color: var(--solid-active-background);
	}
	&:focus-visible {
		outline: 2px solid var(--solid-background);
		outline-offset: 2px;
	}
}
&.outline {
	border: 1px solid var(--outline-border);
	background-color: transparent;
	color: var(--outline-foreground);
	&:hover {
		background-color: var(--outline-hover-background);
	}
	&:active {
		background-color: var(--outline-active-background);
	}
	&:focus-visible {
		outline: 2px solid var(--outline-foreground);
		outline-offset: 2px;
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
	&:active {
		background-color: var(--surface-active-background);
	}
	&:focus-visible {
		outline: 2px solid var(--surface-foreground);
		outline-offset: 2px;
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
